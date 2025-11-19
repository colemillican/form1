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
  directionalBenefits: string[];
  thirtyDayPlan: ThirtyDayPhase[];
  industryNotes: string;
  nextSteps: string;
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { form, type } = body as { form: FormState; type?: string };

    const businessName = form.businessName || "your business";
    const industryLabel = form.industry || "your operation";

    // -------- 1) Build system prompt (Tone D, no numbers) --------
    const systemPrompt = `
You are a senior operations consultant and AI systems architect.
Your goal is to give a prospective client a sharp, confident,
straightforward operational blueprint—not a final plan.

TONE:
- Competent, mature, masculine, precise
- No hype, no exaggeration, no guarantees
- Under-promise, over-deliver
- Keep language clean, direct, and grounded

FRAMING:
- Everything you produce is “directional,” “proposed,” or “first-pass”
- Do NOT present any output as final or guaranteed
- Avoid specific hours or dollar values entirely
- Do not attempt to calculate savings or ROI
- Do not reference pricing
- Avoid complex multi-agent AI systems unless the user explicitly indicates
  very high volume or multiple departments

YOU WILL OUTPUT A SINGLE JSON OBJECT WITH THESE KEYS:

{
  "headline": string,
  "summary": string,
  "aiEmployees": [
    {
      "name": string,
      "role": string,
      "responsibilities": string[]
    }
  ],
  "workflowOverview": string,
  "directionalBenefits": string[],
  "thirtyDayPlan": [
    {
      "phase": string,
      "title": string,
      "description": string,
      "bullets": string[]
    }
  ],
  "industryNotes": string,
  "nextSteps": string
}

GUIDELINES:

1. HEADLINE
   - 1 concise sentence
   - Should feel like a confident, strategic direction

2. SUMMARY
   - 3–5 sentences max
   - Explain the business problem, the leverage points, and the proposed direction

3. AI EMPLOYEES (2–3 max)
   - Each should have a clear operational purpose
   - Avoid buzzwords
   - Do NOT mention “agents” or “models”
   - Describe them like real team roles

4. WORKFLOW OVERVIEW
   - 4–6 sentences
   - Explain how AI employees fit into the user's existing tools and workflows

5. DIRECTIONAL BENEFITS
   - Bullet list of qualitative improvements (clarity, responsiveness, reduced chaos)
   - NO time or dollar figures

6. THIRTY DAY PLAN
   - 3 or 4 phases
   - Keep each phase realistic and sharp
   - Focus on sequencing and tightening operations

7. INDUSTRY NOTES
   - 2–4 insights specific to the user's industry or workflow patterns

8. NEXT STEPS
   - 1–2 sentences
   - Frame the strategy call as the place where details tighten and decisions are made
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
    };

    let aiBlueprint: Partial<Blueprint> = {};

    if (process.env.OPENAI_API_KEY) {
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
      } catch (err) {
        console.error("OpenAI error generating Blueprint:", err);
      }
    } else {
      console.warn("OPENAI_API_KEY missing; using fallback Blueprint only.");
    }

    // -------- 2) Fallbacks & final Blueprint object --------
    const fallback: Blueprint = {
      headline: `A proposed AI systems direction for ${businessName}`,
      summary: `Based on what you shared about ${industryLabel.toLowerCase()}, this Blueprint outlines a conservative, first-pass direction for using a small team of AI employees to clean up backend work and give you more headspace to run the business. It’s not a final scope—it's a directional starting point to refine together.`,
      aiEmployees: [
        {
          name: "Lead Intake Assistant (proposed)",
          role: "Handles inbound leads across your main channels and makes sure every inquiry is acknowledged and logged in one place.",
          responsibilities: [
            "Send an immediate, on-brand reply to every new lead.",
            "Capture a few key details and record them in your existing tools.",
            "Flag high-value or complex leads for a human callback with a short summary.",
          ],
        },
        {
          name: "Follow-Up Coordinator (proposed)",
          role: "Keeps follow-up consistent so warm conversations don’t die just because the day got busy.",
          responsibilities: [
            "Run simple follow-up sequences for unbooked or unresponsive leads.",
            "Keep track of where each conversation left off.",
            "Route replies back to the right person on your team when judgment is needed.",
          ],
        },
      ],
      workflowOverview:
        "Leads and requests continue to come in through the channels you already use—forms, email, text, or DMs. The proposed AI employees handle first response, simple questions, basic qualification, and logging into your tools. Your team steps in for pricing, nuance, and final decisions. The point is to offload repetitive motion, not replace human judgment.",
      directionalBenefits: [
        "Fewer leads slipping through the cracks because of slow or missed responses.",
        "Cleaner notes and history so anyone on the team can see what’s going on.",
        "Less mental clutter for owners and key staff around who needs what next.",
      ],
      thirtyDayPlan: [
        {
          phase: "Week 1",
          title: "Map reality & connect systems",
          description:
            "We map how leads and requests move through your business today and connect the tools that matter most.",
          bullets: [
            "Document your core lead sources and response patterns.",
            "Clarify which tools should be the source of truth for contacts and work.",
            "Agree on 1–2 specific plays AI employees will own first.",
          ],
        },
        {
          phase: "Week 2",
          title: "Launch intake & simple follow-up",
          description:
            "We roll out an initial AI employee for intake and basic follow-up so nothing sits untouched.",
          bullets: [
            "Install a Lead Intake Assistant tied into your existing channels.",
            "Draft and tune simple, on-brand replies for common questions.",
            "Set up a basic follow-up path for unbooked or dormant leads.",
          ],
        },
        {
          phase: "Week 3–4",
          title: "Tighten admin & handoffs",
          description:
            "We bring more admin work into the system and refine everything based on how your team actually uses it.",
          bullets: [
            "Add light internal notes, summaries, and task routing where it helps most.",
            "Adjust triggers and templates based on live conversations.",
            "Lock in a simple operating rhythm so the system runs without babysitting.",
          ],
        },
      ],
      industryNotes:
        "This direction is based on common patterns in growing local service and professional businesses: leads spread across channels, ad-hoc follow-up, and a rising admin load on the same small group of people. The exact implementation would be shaped around your tools, team, and tolerance for change.",
      nextSteps:
        "If this direction feels close to what you’re looking for, the next step is a short strategy call. We’ll walk through your workflows, tighten the plan, and only then talk about build scope and timeline.",
    };

    const blueprint: Blueprint = {
      headline: aiBlueprint.headline || fallback.headline,
      summary: aiBlueprint.summary || fallback.summary,
      aiEmployees:
        aiBlueprint.aiEmployees && aiBlueprint.aiEmployees.length > 0
          ? aiBlueprint.aiEmployees
          : fallback.aiEmployees,
      workflowOverview: aiBlueprint.workflowOverview || fallback.workflowOverview,
      directionalBenefits:
        aiBlueprint.directionalBenefits && aiBlueprint.directionalBenefits.length > 0
          ? aiBlueprint.directionalBenefits
          : fallback.directionalBenefits,
      thirtyDayPlan:
        aiBlueprint.thirtyDayPlan && aiBlueprint.thirtyDayPlan.length > 0
          ? aiBlueprint.thirtyDayPlan
          : fallback.thirtyDayPlan,
      industryNotes: aiBlueprint.industryNotes || fallback.industryNotes,
      nextSteps: aiBlueprint.nextSteps || fallback.nextSteps,
    };

    // -------- 3) Insert into Supabase --------
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
          ai_blueprint: blueprint,
          // numeric columns (if they exist) left null on purpose
          hours_saved_min: null,
          hours_saved_max: null,
          value_saved_min: null,
          value_saved_max: null,
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

    // -------- 4) Return Blueprint to frontend --------
    return NextResponse.json(blueprint, { status: 200 });
  } catch (err) {
    console.error("Preview API error:", err);
    return NextResponse.json(
      { error: "Failed to generate Blueprint" },
      { status: 500 }
    );
  }
}
