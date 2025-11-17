import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("start-project body:", body);

    const {
      name,
      email,
      phone,
      businessName,
      websiteUrl,
      businessAddress,
      logoUrl,
      projectNotes,
    } = body;

    const { data, error } = await supabase
      .from("project_starts")
      .insert({
        name: name || null,
        email: email || null,
        phone: phone || null,
        business_name: businessName || null,
        website_url: websiteUrl || null,
        business_address: businessAddress || null,
        logo_url: logoUrl || null,
        project_notes: projectNotes || null,
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase insert error (project_starts):", error);
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
    console.error("start-project route error:", err);
    return NextResponse.json(
      {
        ok: false,
        message: "Server error in start-project route",
        details: err?.message ?? String(err),
      },
      { status: 500 }
    );
  }
}
