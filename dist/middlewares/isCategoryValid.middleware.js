"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCategoryIdValid = void 0;
const appError_1 = require("../errors/appError");
const prisma_1 = require("../database/prisma");
class isCategoryIdValid {
    static async execute(req, res, next) {
        const id = req.params.id;
        const category = await prisma_1.prisma.category.findFirst({ where: { id: Number(id) } });
        if (!category) {
            throw new appError_1.AppError(404, "Category not found");
        }
        res.locals.category = category;
        next();
    }
}
exports.isCategoryIdValid = isCategoryIdValid;
