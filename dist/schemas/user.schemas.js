"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userReturnSchema = exports.userLoginBodySchema = exports.userRegisterBodySchema = exports.UserSchema = void 0;
const zod_1 = require("zod");
exports.UserSchema = zod_1.z.object({
    id: zod_1.z.number().positive(),
    name: zod_1.z.string().min(1),
    email: zod_1.z.string().email().min(1),
    password: zod_1.z.string().min(1)
});
exports.userRegisterBodySchema = exports.UserSchema.omit({ id: true });
exports.userLoginBodySchema = exports.userRegisterBodySchema.omit({ name: true });
exports.userReturnSchema = exports.UserSchema.omit({ password: true });
