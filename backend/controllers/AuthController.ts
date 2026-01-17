import {
  JsonController,
  Post,
  Body,
  BadRequestError,
} from "routing-controllers";
import { UserModel } from "../models/User.model";

@JsonController("/auth")
export class AuthController {

  @Post("/login")
  async login(@Body() body: any) {
    const { userId, password } = body;
    console.log("Received:", body);

    if (!userId || !password) {
      throw new BadRequestError("User ID and password are required");
    }

    const user = await UserModel.findOne({ userId });

    if (!user) {
      throw new BadRequestError("User not found");
    }

    if (user.password !== password) {
      throw new BadRequestError("Invalid credentials");
    }

    const token = `token-${userId}-${Date.now()}`;

    return {
      token,
      user: {
        userId,
      },
    };
  }

  @Post("/register")
  async register(@Body() body: any) {
    const { userId, password } = body;
    console.log("Received:", body);

    if (!userId || !password) {
      throw new BadRequestError("User ID and password are required");
    }

    const existingUser = await UserModel.findOne({ userId });

    if (existingUser) {
      throw new BadRequestError("User already exists");
    }

    await UserModel.create({
      userId,
      password,
    });

    return {
      message: "User registered successfully",
      user: {
        userId,
      },
    };
  }
}