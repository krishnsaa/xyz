import mongoose from "mongoose";

export const connectDB = async () => {
  console.log("MONGO_URL =", process.env.MONGO_URL); // debug once
  await mongoose.connect(process.env.MONGO_URL!);
  console.log("MongoDB connected");
};