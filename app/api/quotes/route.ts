import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

// ── Estimate engine ────────────────────────────────────────────────────────
// Returns [low, high] in CAD dollars
function calcEstimate(
  projectType: string,
  kitchenSize: string,
  finishLevel: string
): [number, number] {
  // Base ranges by project type (Standard finish, medium kitchen)
  const base: Record<string, [number, number]> = {
    "Full Renovation":   [35000, 65000],
    "Cabinets Only":     [12000, 25000],
    "Countertops Only":  [3500,   8000],
    "Design Consult":    [0,         0],
  };

  let [low, high] = base[projectType] ?? [10000, 25000];
  if (low === 0) return [0, 0]; // Design consult — free

  // Size multiplier
  const sizeMult: Record<string, number> = {
    "Small (<100 sqft)":   0.80,
    "Medium (100–150 sqft)": 1.00,
    "Large (150–200 sqft)":  1.30,
    "Open Concept (200+ sqft)": 1.65,
  };
  const sm = sizeMult[kitchenSize] ?? 1;

  // Finish multiplier
  const finishMult: Record<string, number> = {
    Standard: 1.00,
    Premium:  1.45,
    Luxury:   2.10,
  };
  const fm = finishMult[finishLevel] ?? 1;

  low  = Math.round((low  * sm * fm) / 500) * 500;
  high = Math.round((high * sm * fm) / 500) * 500;

  return [low, high];
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      project_type, kitchen_size, kitchen_layout, finish_level,
      timeline, budget_range, name, phone, email, city,
    } = body;

    if (!project_type || !name || !phone || !email || !city) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const [estimate_low, estimate_high] = calcEstimate(project_type, kitchen_size, finish_level);

    const { error: dbError } = await getSupabase().from("quotes").insert([{
      project_type, kitchen_size, kitchen_layout, finish_level,
      timeline, budget_range, name, phone, email, city,
      estimate_low, estimate_high, status: "new",
    }]);
    if (dbError) throw dbError;

    // Fire Make.com webhook
    const webhookUrl = process.env.MAKE_QUOTE_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name, phone, email, city,
          projectType: project_type,
          kitchenSize: kitchen_size,
          kitchenLayout: kitchen_layout,
          finishLevel: finish_level,
          timeline, budgetRange: budget_range,
          estimateLow: estimate_low,
          estimateHigh: estimate_high,
          submittedAt: new Date().toISOString(),
          source: "quote-estimator",
        }),
      });
    }

    return NextResponse.json({ success: true, estimate_low, estimate_high });
  } catch (err: unknown) {
    console.error("Quote error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
