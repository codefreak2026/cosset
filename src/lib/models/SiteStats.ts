import mongoose from "mongoose";

const SiteStatsSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  homePageVisits: { type: Number, default: 0 },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.SiteStats || mongoose.model("SiteStats", SiteStatsSchema);
