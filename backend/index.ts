import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import path from "path";
import {connectDB} from "./config/database";
const express = require("express");
connectDB();
const app = createExpressServer({
  controllers: [path.join(__dirname, "controllers", "*.ts")],
  middlewares: [path.join(__dirname, "middleware", "*.ts")],
  cors: true,
});

app.use(express.json());

app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});