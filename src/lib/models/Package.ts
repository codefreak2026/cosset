import mongoose from "mongoose";

const PackageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rate: { type: String, required: true },
  features: [{ type: String }],
  highlighted: { type: Boolean, default: false },
  order: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Package || mongoose.model("Package", PackageSchema);
