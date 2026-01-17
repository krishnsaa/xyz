import {
  ExpressMiddlewareInterface,
  UnauthorizedError,
} from "routing-controllers";

export class AuthMiddleware implements ExpressMiddlewareInterface {
  use(req: any, res: any, next: (err?: any) => any) {
    const auth = req.headers.authorization;

    if (!auth || !auth.startsWith("Bearer ")) {
      throw new UnauthorizedError("No token provided");
    }

    const token = auth.split(" ")[1];

    // token format: token-userId-timestamp
    const parts = token.split("-");

    if (parts.length < 3) {
      throw new UnauthorizedError("Invalid token");
    }

    const userId = parts[1];

    req.user = { userId };

    next();
  }
}