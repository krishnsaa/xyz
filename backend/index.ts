import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import path from "path";
import { connectDB } from "./config/database";
import dotenv from "dotenv";

dotenv.config();

connectDB();

const app = createExpressServer({
  controllers: [path.join(__dirname, "controllers", "*.js")],
  middlewares: [path.join(__dirname, "middleware", "*.js")],
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("🚀 Server running on port", PORT);
});