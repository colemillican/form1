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
      businessAddress,
      logoUrl,
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
        // 🔹 Only keep these if you've added these columns in Supabase:
        business_address: businessAddress || null,
        logo_url: logoUrl || null,
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

    // 🔹 Return the id explicitly so the frontend can grab previewId
    return NextResponse.json(
      {
        ok: true,
        id: data.id,
        data,
      },
      { status: 200 }
    );
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

// GET /api/preview-lead?id=...
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { ok: false, message: "Missing id query parameter" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("preview_leads")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Supabase select error (preview_leads):", error);
      return NextResponse.json(
        { ok: false, message: "Supabase error", details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        data,
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("preview-lead GET route error:", err);
    return NextResponse.json(
      {
        ok: false,
        message: "Server error in preview-lead GET route",
        details: err?.message ?? String(err),
      },
      { status: 500 }
    );
  }
}
