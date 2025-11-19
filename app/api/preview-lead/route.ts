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

    // ---------- 1) Deterministic time & value estimates (Tone D, more realistic) ----------
    const leadsRaw = cleanNumber(form.monthlyLeads);
    const leads = leadsRaw || 10; // assume some volume if they don't know

    let team = cleanNumber(form.teamSize);
    if (!team && form.teamSize.toLowerCase().includes("just me")) {
      team = 1;
    }
    if (!team) team = 1;

    const bottleneck = (form.mainBottleneck || "").toLowerCase();
    const industry = (form.industry || "").toLowerCase();

    // Base minutes per lead (intake + follow-up + admin), intentionally not timid
    let intakeMinutesPerLead = 8;   // getting info, first reply, logging
    let followMinutesPerLead = 7;   // real follow-up across channels
    let adminMinutesPerLead = 5;    // tools, notes, calendar, simple ops

    // Adjust for bottlenecks they explicitly call out
    if (
      bottleneck.includes("follow") ||
      bottleneck.includes("ghost") ||
      bottleneck.includes("response") ||
      bottleneck.includes("reply")
    ) {
      followMinutesPerLead += 5;
    }

    if (
      bottleneck.includes("admin") ||
      bottleneck.includes("invoice") ||
      bottleneck.includes("calendar") ||
      bottleneck.includes("schedule") ||
      bottleneck.includes("paperwork")
    ) {
      adminMinutesPerLead += 4;
    }

    // Minutes from per-lead work
    const intakeMinutes = leads * intakeMinutesPerLead;
    const followupMinutes = leads * followMinutesPerLead;
    const adminMinutes = leads * adminMinutesPerLead;

    // Coordination / ops overhead per team member per month
    // (meetings, chasing info, reminders, context switching)
    let opsMinutesPerPerson = 60;
    if (bottleneck.includes("chaos") || bottleneck.includes("everywhere")) {
      opsMinutesPerPerson += 30;
    }
    const opsMinutes = team * opsMinutesPerPerson;

    const totalMinutes = intakeMinutes + followupMinutes + adminMinutes + opsMinutes;
    const rawHours = totalMinutes / 60;

    // Build a directional range with sensible floors and ceilings
    let minHours = Math.round(rawHours * 0.7);
    let maxHours = Math.round(rawHours * 1.3);

    // Floors: realistic operational lift for any real business
    if (leads >= 5 && minHours < 15) minHours = 15;
    if (leads >= 5 && maxHours < minHours + 10) maxHours = minHours + 10;

    // If they're truly tiny (less than 5 leads/mo), allow lower floor
    if (leads < 5) {
      minHours = Math.max(5, Math.round(rawHours * 0.6));
      maxHours = Math.max(minHours + 5, Math.round(rawHours * 1.2));
    }

    // Hourly value based on admin/ops labor by industry
    let hourlyRate = 30; // default

    if (
      industry.includes("dental") ||
      industry.includes("clinic") ||
      industry.includes("med spa") ||
      industry.includes("medical")
    ) {
      hourlyRate = 45;
    } else if (
      industry.includes("law") ||
      industry.includes("legal")
    ) {
      hourlyRate = 50;
    } else if (
      industry.includes("roof") ||
      industry.includes("hvac") ||
      industry.includes("plumb") ||
      industry.includes("electric") ||
      industry.includes("contractor") ||
      industry.includes("construction")
    ) {
      hourlyRate = 38;
    } else if (
      industry.includes("agency") ||
      industry.includes("marketing") ||
      industry.includes("consult")
    ) {
      hourlyRate = 35;
    }

    let minValue = minHours * hourlyRate;
    let maxValue = maxHours * hourlyRate;

    // Don't underwrite value for any real business with >= 5 leads/mo
    if (leads >= 5 && minValue < 900) {
      minValue = 900;
      maxValue = Math.max(maxValue, Math.round(minValue * 1.5));
    }

    const hoursSavedPerMonth = `${minHours}–${maxHours} hours/month (directional)`;
    const valuePerMonth = `$${minValue.toLocaleString()}–$${maxValue.toLocaleString()}/month (in reclaimed time)`;

    const businessName = form.businessName || "your business";
    const industryLabel = form.industry || "your operation";

    // ---------- 2) Call OpenAI for a grounded, directional plan ----------
    let aiBlueprint: Partial<Blueprint> = {};

    if (process.env.OPENAI_API_KEY) {
      const systemPrompt = `
You are a senior operations consultant and AI automation architect.

You are helping LocalLink Digital generate an **AI Systems Blueprint** as a *proposed direction* for a small or mid-sized business. This is a first pass, not a final scope, and not a guarantee of results.

TONE:
- Confident, clear, and competent.
- Direct and masculine.
- Low hype, high signal.
- Grounded in operations, not AI buzzwords.

POSITIONING:
- This Blueprint is a proposed direction, not a final plan.
- It should be obviously useful, but conservative and honest.
- It should make the owner think: "They actually understand how my business runs."

YOU ARE GIVEN:
- A description of the business, tools, bottlenecks, and goals.
- A time-savings range and a dollar value range calculated by the backend. You must respect those ranges; you do NOT change those numbers.

OUTPUT FORMAT:
Return a single JSON object with these keys:

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
  "confidenceNote": string,
  "nextSteps": string,
  "thirtyDayPlan": [
    {
      "phase": string,      // e.g. "Week 1"
      "title": string,
      "description": string,
      "bullets": string[]
    }
  ],
  "industryNotes": string
}

RULES:
- Treat everything as a *proposal* or *directional draft*, not a guarantee.
- Use words like "could", "proposed", "likely", "directionally", not "will" and not "guaranteed".
- Recommend **no more than 2–3 AI employees** unless the description clearly indicates a high-volume, multi-location or multi-department operation.
- "AI employees" should be simple, understandable roles with clear jobs (e.g., Lead Intake Assistant, Follow-Up Coordinator, Ops Logging Assistant).
- Keep all language practical and concrete. No jargon like "synergy", "revolutionize", etc.
- Do NOT invent revenue numbers. Stick to operational impact (time & focus).
- Make sure the owner sees where humans still make decisions (judgment calls, pricing, edge cases).
- Reflect the business specifics (industry, tools, bottlenecks) in the roles and plan.
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
      console.warn("OPENAI_API_KEY missing; returning fallback Blueprint only.");
    }

    // ---------- 3) Merge AI output with deterministic estimates ----------
    const fallbackHeadline = `A proposed AI systems direction for ${businessName}`;
    const fallbackSummary = `Based on what you shared about ${industryLabel.toLowerCase()}, this Blueprint outlines a conservative, directional plan for using a small team of AI employees to clean up backend work and give you back meaningful time and focus every month. This is a proposal, not a final scope.`;

    const blueprint: Blueprint = {
      headline: aiBlueprint.headline || fallbackHeadline,
      summary: aiBlueprint.summary || fallbackSummary,
      aiEmployees:
        aiBlueprint.aiEmployees && aiBlueprint.aiEmployees.length > 0
          ? aiBlueprint.aiEmployees
          : [
              {
                name: "Lead Intake Assistant (proposed)",
                role: "Handles inbound leads across your main channels and makes sure every inquiry is acknowledged and logged in one place.",
                responsibilities: [
                  "Sends an immediate, on-brand reply to every new lead 24/7.",
                  "Collects a few key pieces of information and records them in your system.",
                  "Flags high-priority leads for a human callback with a short summary.",
                ],
              },
              {
                name: "Follow-Up Coordinator (proposed)",
                role: "Keeps follow-up consistent so warm leads don’t go cold just because the day got busy.",
                responsibilities: [
                  "Runs 3–7–14 day follow-up sequences for unbooked or unresponsive leads.",
                  "Keeps notes on last contact so your team isn’t digging through threads.",
                  "Routes replies back to the right person when human judgment is needed.",
                ],
              },
            ],
      workflowOverview:
        aiBlueprint.workflowOverview ||
        "Leads and requests come in through your existing channels. The proposed AI employees handle first response, basic questions, qualification, and logging. Your team steps in for pricing, nuanced conversations, and final decisions. The goal is to remove the repetitive work—not the human judgment.",
      hoursSavedPerMonth: hoursSavedPerMonth,
      valuePerMonth: valuePerMonth,
      confidenceNote:
        aiBlueprint.confidenceNote ||
        "These ranges are directional and based on the lead volume, team size, and bottlenecks you described. On a strategy call, we walk through your real workflows and refine these numbers with more precision.",
      nextSteps:
        aiBlueprint.nextSteps ||
        "If this proposed direction looks close to where you want your operations to go, the next step is a short strategy session. We pressure-test the roles, plug in your actual numbers, and map a concrete build plan with scope, timeline, and investment.",
      thirtyDayPlan:
        aiBlueprint.thirtyDayPlan && aiBlueprint.thirtyDayPlan.length > 0
          ? aiBlueprint.thirtyDayPlan
          : [
              {
                phase: "Week 1",
                title: "Map reality & connect tools",
                description:
                  "We map how leads flow through your business today and connect your core tools so we’re seeing the same reality.",
                bullets: [
                  "Document lead sources and current response patterns.",
                  "Connect email, forms, and key apps into a single view.",
                  "Agree on 1–2 plays your AI employees will own first.",
                ],
              },
              {
                phase: "Week 2",
                title: "Launch lead intake & basic follow-up",
                description:
                  "We deploy the first AI employee to handle intake and simple follow-up so nothing sits untouched.",
                bullets: [
                  "Install AI Lead Intake Assistant for instant replies.",
                  "Set up simple qualification and logging into your tools.",
                  "Launch basic follow-up sequences for unbooked leads.",
                ],
              },
              {
                phase: "Week 3–4",
                title: "Tighten follow-up & automate admin",
                description:
                  "We bring admin and internal routing into the system and tune everything based on real usage.",
                bullets: [
                  "Add AI Ops Assistant for notes, recaps, and task routing.",
                  "Refine triggers, templates, and alert rules with your feedback.",
                  "Review early data and lock in the highest-leverage automations.",
                ],
              },
            ],
      industryNotes:
        aiBlueprint.industryNotes ||
        "This direction is based on patterns we see in similar local service operations: leads slipping through the cracks, inconsistent follow-up, and a growing admin load. The exact implementation would be tuned to your tools, your team, and how you like to work.",
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
