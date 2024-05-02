"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const appError_1 = require("../errors/appError");
class ValidateToken {
    static execute(req, res, next) {
        const authorization = req.headers.authorization;
        const token = authorization?.replace("Bearer ", "");
        const secret = process.env.JWT_SECRET;
        if (!token) {
            throw new appError_1.AppError(401, "Token is required");
        }
        jsonwebtoken_1.default.verify(token, secret);
        res.locals.decode = jsonwebtoken_1.default.decode(token);
        next();
    }
}
exports.ValidateToken = ValidateToken;
