"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTaskIdValid = void 0;
const appError_1 = require("../errors/appError");
const prisma_1 = require("../database/prisma");
class isTaskIdValid {
    static async execute(req, res, next) {
        const id = req.params.id;
        const task = await prisma_1.prisma.task.findFirst({ where: { id: Number(id) } });
        if (!task) {
            throw new appError_1.AppError(404, "Task not found");
        }
        next();
    }
}
exports.isTaskIdValid = isTaskIdValid;
