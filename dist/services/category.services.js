"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryServices = void 0;
const prisma_1 = require("../database/prisma");
class CategoryServices {
    async create(body, userId) {
        const newCategory = { ...body, userId };
        const data = prisma_1.prisma.category.create({ data: newCategory });
        return data;
    }
    async delete(id) {
        await prisma_1.prisma.category.delete({ where: { id } });
    }
}
exports.CategoryServices = CategoryServices;
