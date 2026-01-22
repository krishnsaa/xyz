import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import path from "path";
import { connectDB } from "./config/database";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

connectDB();

const app = createExpressServer({
  controllers: [path.join(__dirname, "controllers", "*.js")],
  middlewares: [path.join(__dirname, "middleware", "*.js")],
  cors: {
    origin: [
      "http://localhost:5173",
      "https://your-frontend-domain.vercel.app"
    ],
    credentials: true,
  },
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("🚀 Server running on port", PORT);
});