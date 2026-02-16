import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import SiteStats from "@/lib/models/SiteStats";

const STATS_KEY = "main";

export async function POST() {
  try {
    await connectDB();
    let stats = await SiteStats.findOne({ key: STATS_KEY });
    if (!stats) {
      stats = await SiteStats.create({ key: STATS_KEY, homePageVisits: 1 });
    } else {
      stats.homePageVisits += 1;
      stats.updatedAt = new Date();
      await stats.save();
    }
    return NextResponse.json({ homePageVisits: stats.homePageVisits });
  } catch (error) {
    console.error("Stats visit error:", error);
    return NextResponse.json({ error: "Failed to record visit" }, { status: 500 });
  }
}
