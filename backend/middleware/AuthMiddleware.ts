import { ExpressMiddlewareInterface } from "routing-controllers";

export class AuthMiddleware implements ExpressMiddlewareInterface {
  use(req: any, res: any, next: (err?: any) => any) {
    const auth = req.headers.authorization;

    if (!auth || !auth.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    req.user = { userId: auth.replace("Bearer ", "") };
    next();
  }
}