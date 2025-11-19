import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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

type AIEmployee = {
  name: string;
  role: string;
  responsibilities: string[];
};

type ThirtyDayPhase = {
  phase: string;
  title: string;
  description: string;
  bullets: string[];
};

type Blueprint = {
  headline: string;
  summary: string;
  aiEmployees: AIEmployee[];
  workflowOverview: string;
  hoursSavedPerMonth: string;
  valuePerMonth: string;
  confidenceNote: string;
  nextSteps: string;
  thirtyDayPlan: ThirtyDayPhase[];
  industryNotes: string;
};

function cleanNumber(s: string): number {
  return parseInt((s || "").replace(/[^0-9]/g, ""), 10) || 0;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { form, type } = body as { form: FormState; type?: string };

    // ---------- 1) Deterministic time & value estimates ----------
    const leadsRaw = cleanNumber(form.monthlyLeads);
    const leads = leadsRaw || 20; // assume at least some volume
    let team = cleanNumber(form.teamSize);
    if (!team && form.teamSize.toLowerCase().includes("just me")) {
      team = 1;
    }

    const bottleneck = (form.mainBottleneck || "").toLowerCase();
    const industry = (form.industry || "").toLowerCase();

    // base minutes per lead
    let intakeMinutesPerLead = 6; // initial reply + basic logging
    let followupMinutesPerLead = 4; // default follow up
    let adminMinutesPerLead = 3; // basic admin

    if (
      bottleneck.includes("follow") ||
      bottleneck.includes("ghost") ||
      bottleneck.includes("response")
    ) {
      followupMinutesPerLead += 4; // they clearly struggle here
    }

    if (
      bottleneck.includes("admin") ||
      bottleneck.includes("invoice") ||
      bottleneck.includes("calendar") ||
      bottleneck.includes("schedule")
    ) {
      adminMinutesPerLead += 4;
    }

    const intakeMinutes = leads * intakeMinutesPerLead;
    const followupMinutes = leads * followupMinutesPerLead;
    const adminMinutes = leads * adminMinutesPerLead;

    // coordination / internal ops minutes based on team size
    const opsMinutes = Math.max(team, 1) * 45; // minimal per-person weekly ops overhead

    const totalMinutes = intakeMinutes + followupMinutes + adminMinutes + opsMinutes;
    const rawHours = totalMinutes / 60;

    // clamp and make a range
    const minHours = Math.max(10, Math.round(rawHours * 0.6));
    const maxHours = Math.max(minHours + 5, Math.round(rawHours * 1.1));

    // hourly value based on rough industry benchmarks
    let hourlyRate = 28; // default admin-level

    if (
      industry.includes("dental") ||
      industry.includes("clinic") ||
      industry.includes("med spa") ||
      industry.includes("law") ||
      industry.includes("legal")
    ) {
      hourlyRate = 40;
    } else if (
      industry.includes("roof") ||
      industry.includes("hvac") ||
      industry.includes("plumb") ||
      industry.includes("electric") ||
      industry.includes("contractor")
    ) {
      hourlyRate = 35;
    } else if (
      industry.includes("agency") ||
      industry.includes("marketing") ||
      industry.includes("consult")
    ) {
      hourlyRate = 32;
    }

    const minValue = minHours * hourlyRate;
    const maxValue = maxHours * hourlyRate;

    const hoursSavedPerMonth = `${minHours}–${maxHours} hours/month`;
    const valuePerMonth = `$${minValue.toLocaleString()}–$${maxValue.toLocaleString()}/month`;

    const businessName = form.businessName || "your business";
    const industryLabel = form.industry || "your operation";

    // ---------- 2) Call OpenAI for personalized plan ----------
    let aiBlueprint: Partial<Blueprint> = {};

    if (process.env.OPENAI_API_KEY) {
      const systemPrompt = `
You are a senior operations consultant and AI automation architect who designs "AI employees" for small and mid-sized service businesses.

You are helping a company called LocalLink Digital produce an **AI Systems Blueprint** for potential clients.

GOALS:
- Make the client feel deeply understood.
- Turn their answers into a specific, practical plan (not generic fluff).
- Show exactly HOW AI will plug into their existing tools and workflows.
- Use the time & value estimates we calculated as grounding (do not change them).

OUTPUT FORMAT:
Return a single JSON object with the following keys:

{
  "headline": string,
  "summary": string,
  "aiEmployees": [
    {
      "name": string,
      "role": string,
      "responsibilities": string[]
    },
    ...
  ],
  "workflowOverview": string,
  "confidenceNote": string,
  "nextSteps": string,
  "thirtyDayPlan": [
    {
      "phase": string,      // e.g. "Week 1"
      "title": string,
      "description": string,
      "bullets": string[]
    },
    ...
  ],
  "industryNotes": string
}

GUIDELINES:
- Anchor everything in the specific business info and bottlenecks.
- "AI employees" should feel like roles on their team with clear jobs.
- Keep language plain, sharp, and businesslike (not hypey, not technical).
- In "thirtyDayPlan", outline 3–4 phases (Week 1, Week 2, Week 3–4) showing what we would build when.
- "industryNotes" should call out 2–4 insights specific to their industry, lead flow, or tool stack.
- Do NOT include the hours or dollar estimates in the JSON; those are provided separately by the backend.
`;

      const userPayload = {
        businessName: form.businessName,
        industry: form.industry,
        email: form.email,
        website: form.website,
        teamSize: form.teamSize,
        monthlyLeads: form.monthlyLeads,
        mainBottleneck: form.mainBottleneck,
        currentTools: form.currentTools,
        dreamOutcome: form.dreamOutcome,
        extraContext: form.extraContext,
        numericEstimates: {
          leads,
          team,
          hoursRange: [minHours, maxHours],
          valueRange: [minValue, maxValue],
        },
      };

      try {
        const completion = await openai.chat.completions.create({
          model: "gpt-4.1-mini",
          response_format: { type: "json_object" },
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: JSON.stringify(userPayload) },
          ],
        });

        const content = completion.choices[0]?.message?.content || "{}";
        aiBlueprint = JSON.parse(content) as Partial<Blueprint>;
      } catch (aiErr) {
        console.error("OpenAI Blueprint error:", aiErr);
      }
    } else {
      console.warn("OPENAI_API_KEY missing; returning fallback Blueprint.");
    }

    // ---------- 3) Merge AI output with deterministic estimates ----------
    const fallbackHeadline = `How AI employees could reshape ${businessName}`;
    const fallbackSummary = `Based on what you shared about ${industryLabel.toLowerCase()}, this Blueprint shows how a small team of AI employees could plug into your current tools, clean up the backend work, and give you back meaningful time and margin every month.`;

    const blueprint: Blueprint = {
      headline: aiBlueprint.headline || fallbackHeadline,
      summary: aiBlueprint.summary || fallbackSummary,
      aiEmployees:
        aiBlueprint.aiEmployees && aiBlueprint.aiEmployees.length > 0
          ? aiBlueprint.aiEmployees
          : [
              {
                name: "Lead Response Assistant",
                role: "Handles inbound leads across your main channels and makes sure every inquiry is acknowledged and logged.",
                responsibilities: [
                  "Sends an immediate, on-brand reply to every new lead 24/7.",
                  "Asks 2–3 qualifying questions and records the answers in your system.",
                  "Routes hot or complex leads to the right human with a clear summary.",
                ],
              },
            ],
      workflowOverview:
        aiBlueprint.workflowOverview ||
        "Leads and requests come in through your existing channels (forms, email, text, etc.). AI employees acknowledge and log each one, qualify where appropriate, create or update records in your tools, and route tasks to your team. Your humans step in for judgment calls, nuanced conversations, and final decisions—without chasing every small detail.",
      hoursSavedPerMonth,
      valuePerMonth,
      confidenceNote:
        aiBlueprint.confidenceNote ||
        "These estimates are directional and based on typical patterns we see with similar teams and lead volumes. On a strategy call, we refine them with your real numbers.",
      nextSteps:
        aiBlueprint.nextSteps ||
        "If this Blueprint feels aligned with where you want the business to go, the next step is a short strategy session. We’ll walk through the roles, plug in your real numbers, and map a concrete build plan with timeline and investment.",
      thirtyDayPlan:
        aiBlueprint.thirtyDayPlan && aiBlueprint.thirtyDayPlan.length > 0
          ? aiBlueprint.thirtyDayPlan
          : [
              {
                phase: "Week 1",
                title: "Map reality & connect tools",
                description:
                  "We map how leads flow through your business today and connect your core tools so we can start tracking everything in one place.",
                bullets: [
                  "Map lead sources and your current response patterns.",
                  "Connect email, forms, and key apps into a single view.",
                  "Define the core plays your AI employees will run.",
                ],
              },
              {
                phase: "Week 2",
                title: "Launch lead handling & follow-up",
                description:
                  "We launch your first AI employees to handle intake, qualification, and consistent follow-up.",
                bullets: [
                  "Install AI Lead Response Assistant for instant replies.",
                  "Deploy simple qualification flows tied to your tools.",
                  "Set up 3–7–14 day follow-up sequences that match your tone.",
                ],
              },
              {
                phase: "Week 3–4",
                title: "Automate admin & tighten the loop",
                description:
                  "We automate repetitive admin and refine the system based on real usage and your feedback.",
                bullets: [
                  "Roll out AI Ops Assistant for logging and recaps.",
                  "Tune triggers, templates, and internal alerts.",
                  "Review early metrics and lock in the highest-leverage automations.",
                ],
              },
            ],
      industryNotes:
        aiBlueprint.industryNotes ||
        "This Blueprint is grounded in common patterns we see across local service businesses: leads slipping through the cracks, inconsistent follow-up, and a growing admin burden. The exact details will be tuned to your tools, team, and volume during implementation.",
    };

    // ---------- 4) Insert everything into Supabase ----------
    const supabaseUrl = process.env.SUPABASE_URL || "";
    const supabaseKey = process.env.SUPABASE_ANON_KEY || "";

    if (supabaseUrl && supabaseKey) {
      try {
        const supabase = createClient(supabaseUrl, supabaseKey);

        const { error } = await supabase.from("preview_leads").insert({
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
          hours_saved_min: minHours,
          hours_saved_max: maxHours,
          value_saved_min: minValue,
          value_saved_max: maxValue,
          ai_blueprint: blueprint,
        });

        if (error) {
          console.error("Supabase insert error (preview_leads):", error);
        }
      } catch (dbErr) {
        console.error("Supabase insert threw:", dbErr);
      }
    } else {
      console.warn("SUPABASE_URL or SUPABASE_ANON_KEY missing. Skipping Supabase insert.");
    }

    // ---------- 5) Return the Blueprint to the frontend ----------
    return NextResponse.json(blueprint, { status: 200 });
  } catch (err) {
    console.error("Preview API error:", err);
    return NextResponse.json(
      { error: "Failed to generate Blueprint" },
      { status: 500 }
    );
  }
}
