import { JsonController, Post, Body, BadRequestError } from "routing-controllers";

const USERS: Record<
  string,
  { password: string}
> = {
  krishna: { password: "1234" },
  aryan: { password: "1234"},
  abhi: { password: "1234"},
  arpita: { password: "1234" },
};
@JsonController("/auth")
export class AuthController {
  @Post("/login")
  login(@Body() body: any) {
    const { userId, password } = body;
    console.log("Received:", body);
    if (!userId || !password) {
      throw new BadRequestError("User ID and password are required");
    }
    const user = USERS[userId];
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
        userId
      },
    };
  }
    @Post("/register")
  register(@Body() body: any) {
    const { userId, password } = body;

    console.log("Received:", body);

    if (!userId || !password) {
      throw new BadRequestError("User ID and password are required");
    }

    if (USERS[userId]) {
      throw new BadRequestError("User already exists");
    }

    USERS[userId] = {
      password
    };

    return {
      message: "User registered successfully",
      user: {
        userId,
      },
    };
}
}