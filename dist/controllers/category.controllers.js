"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryControllers = void 0;
const category_services_1 = require("../services/category.services");
class CategoryControllers {
    async create(req, res) {
        const categoryServices = new category_services_1.CategoryServices();
        const userId = res.locals.decode.id;
        const response = await categoryServices.create(req.body, userId);
        return res.status(201).json(response);
    }
    async delete(req, res) {
        const categoryServices = new category_services_1.CategoryServices();
        await categoryServices.delete(Number(req.params.id));
        return res.status(204).json();
    }
}
exports.CategoryControllers = CategoryControllers;
