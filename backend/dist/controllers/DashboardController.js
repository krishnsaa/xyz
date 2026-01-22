"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardController = void 0;
const routing_controllers_1 = require("routing-controllers");
const AuthMiddleware_1 = require("../middleware/AuthMiddleware");
const UserStats_model_1 = require("../models/UserStats.model");
const UserBadge_model_1 = require("../models/UserBadge.model");
const Event_model_1 = require("../models/Event.model");
let DashboardController = class DashboardController {
    summary(req) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            console.log("DASHBOARD req.user =", req.user);
            console.log("REQ USER ID:", (_a = req.user) === null || _a === void 0 ? void 0 : _a.userId);
            const stats = yield UserStats_model_1.UserStatsModel.findOne({
                userId: (_b = req.user) === null || _b === void 0 ? void 0 : _b.userId,
            });
            if (!stats) {
                return { totalXP: 0, accuracy: 0, avgReactionTime: 0 };
            }
            return {
                totalXP: stats.totalXP,
                accuracy: stats.total
                    ? (stats.correct / stats.total) * 100
                    : 0,
                avgReactionTime: stats.total
                    ? stats.totalTime / stats.total
                    : 0,
            };
        });
    }
    badges(req) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const badgeDoc = yield UserBadge_model_1.UserBadgeModel.findOne({
                userId: req.user.userId,
            });
            return { earned: (_a = badgeDoc === null || badgeDoc === void 0 ? void 0 : badgeDoc.badges) !== null && _a !== void 0 ? _a : [] };
        });
    }
    history(req) {
        return __awaiter(this, void 0, void 0, function* () {
            return Event_model_1.EventModel.find({ userId: req.user.userId }).sort({
                createdAt: -1,
            });
        });
    }
};
exports.DashboardController = DashboardController;
__decorate([
    (0, routing_controllers_1.Get)("/summary"),
    __param(0, (0, routing_controllers_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "summary", null);
__decorate([
    (0, routing_controllers_1.Get)("/badges"),
    __param(0, (0, routing_controllers_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "badges", null);
__decorate([
    (0, routing_controllers_1.Get)("/history"),
    __param(0, (0, routing_controllers_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "history", null);
exports.DashboardController = DashboardController = __decorate([
    (0, routing_controllers_1.JsonController)("/dashboard"),
    (0, routing_controllers_1.UseBefore)(AuthMiddleware_1.AuthMiddleware)
], DashboardController);
