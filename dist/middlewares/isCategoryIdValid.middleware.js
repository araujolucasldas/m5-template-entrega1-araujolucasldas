"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCategoryIdBodyValid = void 0;
const appError_1 = require("../errors/appError");
const prisma_1 = require("../database/prisma");
class isCategoryIdBodyValid {
    static async execute(req, res, next) {
        const id = req.body.categoryId;
        if (id) {
            const category = await prisma_1.prisma.category.findFirst({ where: { id: Number(id) } });
            if (!category) {
                throw new appError_1.AppError(404, "category not found");
            }
        }
        next();
    }
}
exports.isCategoryIdBodyValid = isCategoryIdBodyValid;
