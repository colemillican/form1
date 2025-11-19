import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Service-role client for inserts from the server
const supabase = createClient(supabaseUrl, supabaseServiceKey);

type FormState = {
  businessName: string;
  industry: string;
  email: string;
  website: string;
  teamSize: string;
  monthlyLeads: string;
  mainBottleneck: string;
  currentTools: string;
  dreamOutcome: string;
  extraContext: string;
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { form, type } = body as { form: FormState; type?: string };

    // --- 1) Store in Supabase ---------------------------------------------
    try {
      await supabase.from("preview_leads").insert({
        type: type ?? "AI_SYSTEMS_BLUEPRINT",
        business_name: form.businessName || null,
        industry: form.industry || null,
        email: form.email,
        website: form.website || null,
        team_size: form.teamSize || null,
        monthly_leads: form.monthlyLeads || null,
        main_bottleneck: form.mainBottleneck || null,
        current_tools: form.currentTools || null,
        dream_outcome: form.dreamOutcome || null,
        extra_context: form.extraContext || null,
      });
    } catch (dbErr) {
      // Don’t break the preview if Supabase insert fails
      console.error("Supabase insert error:", dbErr);
    }

    // --- 2) Lightweight “estimates” logic --------------------------------

    // Parse team size + leads as rough numbers
    const leads = parseInt(form.monthlyLeads.replace(/[^0-9]/g, "") || "0", 10) || 0;
    const team =
      parseInt(form.teamSize.replace(/[^0-9]/g, "") || "0", 10) ||
      (form.teamSize.toLowerCase().includes("just me") ? 1 : 0);

    // Rough hours saved: depends on leads + team size
    let baseHours = 10;
    baseHours += Math.min(leads * 0.25, 40); // up to +40 hours from volume
    baseHours += Math.min(team * 3, 30); // up to +30 hours from team coordination
    const estHours = Math.round(Math.min(Math.max(baseHours, 15), 80)); // clamp 15–80

    // Rough value per hour
    const valuePerHour = 60; // you can tweak this if you want to position higher/lower
    const estValue = estHours * valuePerHour; // monthly equivalent

    const hoursSavedPerMonth = `${estHours}–${estHours + 10} hours/month`;
    const valuePerMonth = `$${(estValue - 500).toLocaleString()}–$${(
      estValue + 1500
    ).toLocaleString()}/month`;

    // --- 3) Build a Blueprint that matches the frontend type --------------

    const businessName = form.businessName || "your business";
    const industry = form.industry || "your operation";

    const headline = `How AI employees could reshape ${businessName}`;
    const summary = `Based on what you shared about ${industry.toLowerCase()}, this Blueprint shows how a small team of AI employees could plug into your current tools, clean up the backend work, and give you back meaningful time and margin every month.`;

    const aiEmployees = [
      {
        name: "Lead Response Assistant",
        role: "Handles inbound leads across your main channels and makes sure every inquiry is acknowledged and logged.",
        responsibilities: [
          "Sends an immediate, on-brand reply to every new lead 24/7.",
          "Asks 2–3 qualifying questions and records the answers in your system.",
          "Routes hot or complex leads to the right human with a clear summary.",
        ],
      },
      {
        name: "Follow-Up & Reminder Coordinator",
        role: "Keeps deals, projects, and clients from going cold by driving consistent follow-up and reminders.",
        responsibilities: [
          "Schedules and sends follow-up messages based on your timelines.",
          "Flags stalled opportunities and nudges the right person internally.",
          "Keeps a log of touchpoints so you can see where each lead or client stands.",
        ],
      },
      {
        name: "Ops & Admin Assistant",
        role: "Clears repetitive admin tasks so your team can focus on higher-value work.",
        responsibilities: [
          "Updates records in your tools when new info comes in.",
          "Prepares simple recaps from calls, forms, or email threads.",
          "Surfaces daily/weekly task lists for humans based on system activity.",
        ],
      },
    ];

    const workflowOverview =
      "Leads and requests come in through your existing channels (forms, email, text, etc.). AI employees acknowledge and log each one, qualify where appropriate, create or update records in your tools, and route tasks to your team. Your humans step in for judgment calls, nuanced conversations, and final decisions—without chasing every small detail.";

    const confidenceNote =
      "These estimates are directional and based on typical patterns we see with similar teams and lead volumes. On a strategy call, we refine them with real numbers from your world.";

    const nextSteps =
      "If this Blueprint feels aligned with where you want the business to go, the next step is a short strategy session. We’ll walk through the roles, plug in your real numbers, and map a concrete build plan with timeline and investment.";

    const blueprint = {
      headline,
      summary,
      aiEmployees,
      workflowOverview,
      hoursSavedPerMonth,
      valuePerMonth,
      confidenceNote,
      nextSteps,
    };

    return NextResponse.json(blueprint, { status: 200 });
  } catch (err) {
    console.error("Preview API error:", err);
    return NextResponse.json(
      { error: "Failed to generate Blueprint" },
      { status: 500 }
    );
  }
}
