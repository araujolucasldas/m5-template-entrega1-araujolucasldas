"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskServices = void 0;
const prisma_1 = require("../database/prisma");
class TaskServices {
    async create(body, userId) {
        const newTask = { ...body, userId };
        const data = await prisma_1.prisma.task.create({ data: newTask });
        return data;
    }
    async findMany(search, userId) {
        if (search) {
            const data = await prisma_1.prisma.task.findMany({
                include: { category: true },
                where: { userId, category: { name: { contains: search, mode: "insensitive" } } }
            });
            return data;
        }
        const data = await prisma_1.prisma.task.findMany({
            where: { userId },
            include: { category: true }
        });
        return data;
    }
    async findOne(id) {
        const data = await prisma_1.prisma.task.findFirst({
            where: { id },
            include: { category: true }
        });
        return data;
    }
    async update(id, body) {
        const data = await prisma_1.prisma.task.update({
            where: { id },
            data: body
        });
        return data;
    }
    async delete(id) {
        await prisma_1.prisma.task.delete({ where: { id } });
    }
}
exports.TaskServices = TaskServices;
