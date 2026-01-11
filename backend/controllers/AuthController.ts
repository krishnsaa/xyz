import { JsonController, Post, Body, BadRequestError } from "routing-controllers";

const USERS = {
  user1: { password: "1234", name: "Krishna" },
  user2: { password: "1234", name: "Aryan" },
  user3: { password: "1234", name: "Abhi" },
  user4: { password: "1234", name: "Arpita" },
};

@JsonController("/auth")
export class AuthController {
  @Post("/login")
login(@Body() body: any) {
    const { userId, password } = body;
    console.log("Received:", body); 

    if (!userId || !password) {
        throw new BadRequestError("Missing fields");
    }

    if (!Object.prototype.hasOwnProperty.call(USERS, userId)) {
        throw new BadRequestError("Invalid credentials");
    }

    const user = USERS[userId as keyof typeof USERS];

    if (user.password !== password) {
        throw new BadRequestError("Invalid credentials");
    }

    return {
        token: userId, 
        user: { userId, name: user.name }
    };
}
}