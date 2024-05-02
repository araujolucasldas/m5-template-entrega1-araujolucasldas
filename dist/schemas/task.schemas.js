"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskUpdateSchema = exports.taskCreateSchema = exports.taskSchema = void 0;
const zod_1 = require("zod");
exports.taskSchema = zod_1.z.object({
    id: zod_1.z.number().positive(),
    title: zod_1.z.string().min(1),
    content: zod_1.z.string().min(1),
    finished: zod_1.z.boolean().default(false),
    categoryId: zod_1.z.number().positive().nullish(),
    userId: zod_1.z.number().positive()
});
exports.taskCreateSchema = exports.taskSchema.omit({ id: true, userId: true });
exports.taskUpdateSchema = exports.taskCreateSchema.partial();
