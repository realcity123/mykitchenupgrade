import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, upgrade_type, budget, time_frame, city, source_page } = body;

    if (!name || !phone || !email || !city) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { error: dbError } = await getSupabase().from("leads").insert([
      { name, phone, email, upgrade_type, budget, time_frame, city, source_page, status: "new" },
    ]);
    if (dbError) throw dbError;

    // Fire Make.com webhook
    const webhookUrl = process.env.MAKE_LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          upgradeType: upgrade_type,
          budget,
          timeFrame: time_frame,
          city,
          source: source_page,
          submittedAt: new Date().toISOString(),
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("Lead error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
