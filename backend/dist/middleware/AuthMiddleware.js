"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const routing_controllers_1 = require("routing-controllers");
class AuthMiddleware {
    use(req, res, next) {
        const auth = req.headers.authorization;
        if (!auth || !auth.startsWith("Bearer ")) {
            throw new routing_controllers_1.UnauthorizedError("No token provided");
        }
        const token = auth.split(" ")[1];
        const parts = token.split("-");
        if (parts.length < 3) {
            throw new routing_controllers_1.UnauthorizedError("Invalid token");
        }
        const userId = parts[1];
        req.user = { userId };
        next();
    }
}
exports.AuthMiddleware = AuthMiddleware;
