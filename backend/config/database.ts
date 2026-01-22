import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URL!,{
    tls: true,
  tlsAllowInvalidCertificates: false
  });
  console.log("MongoDB connected");
};
