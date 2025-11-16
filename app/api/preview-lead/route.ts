import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("preview-lead body:", body);

    const {
      businessName,
      industry,
      location,
      styleVibe,
      primaryGoal,
      idealCustomer,
      keyOffers,
      differentiator,
      email,
      phone,
    } = body;

    const { data, error } = await supabase
      .from("preview_leads")
      .insert({
        business_name: businessName || null,
        industry: industry || null,
        location: location || null,
        style_vibe: styleVibe || null,
        primary_goal: primaryGoal || null,
        ideal_customer: idealCustomer || null,
        key_offers: keyOffers || null,
        differentiator: differentiator || null,
        email: email || null,
        phone: phone || null,
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { ok: false, message: "Supabase error", details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, data }, { status: 200 });
  } catch (err: any) {
    console.error("preview-lead route error:", err);
    return NextResponse.json(
      {
        ok: false,
        message: "Server error in preview-lead route",
        details: err?.message ?? String(err),
      },
      { status: 500 }
    );
  }
}
