"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const user_schemas_1 = require("../schemas/user.schemas");
const bcryptjs_1 = require("bcryptjs");
const prisma_1 = require("../database/prisma");
const appError_1 = require("../errors/appError");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UserServices {
    async Register(body) {
        const hashPassword = await (0, bcryptjs_1.hash)(body.password, 10);
        const newUser = {
            name: body.name,
            email: body.email,
            password: hashPassword
        };
        const data = await prisma_1.prisma.user.create({ data: newUser });
        return user_schemas_1.userReturnSchema.parse(data);
    }
    async Login(body) {
        const user = await prisma_1.prisma.user.findFirst({ where: { email: body.email } });
        if (!user) {
            throw new appError_1.AppError(404, "User not exists");
        }
        const toCompare = await (0, bcryptjs_1.compare)(body.password, user.password);
        if (!toCompare) {
            throw new appError_1.AppError(401, "Email and password doesn't match");
        }
        const token = jsonwebtoken_1.default.sign({ id: user.id }, process.env.JWT_SECRET);
        return { accessToken: token, user: user_schemas_1.userReturnSchema.parse(user) };
    }
    async GetUser(id) {
        const user = await prisma_1.prisma.user.findFirst({ where: { id } });
        return user_schemas_1.userReturnSchema.parse(user);
    }
}
exports.UserServices = UserServices;
