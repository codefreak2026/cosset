import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import SiteStats from "@/lib/models/SiteStats";

const STATS_KEY = "main";

export async function GET() {
  try {
    await connectDB();
    let stats = await SiteStats.findOne({ key: STATS_KEY });
    if (!stats) {
      stats = await SiteStats.create({ key: STATS_KEY, homePageVisits: 0 });
    }
    return NextResponse.json({ homePageVisits: stats.homePageVisits });
  } catch (error) {
    console.error("Stats GET error:", error);
    return NextResponse.json({ homePageVisits: 0 });
  }
}
