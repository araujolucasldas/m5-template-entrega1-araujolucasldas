import { Request, Response } from "express";
import { CategoryServices } from "../services/category.services";

export class CategoryControllers{
    async create(req: Request, res: Response){
        const categoryServices = new CategoryServices()

        const userId = res.locals.decode.id

        const response = await categoryServices.create(req.body, userId)

        return res.status(201).json(response)
    }

    async delete(req: Request, res: Response){
        const categoryServices = new CategoryServices()

        await categoryServices.delete(Number(req.params.id))

        return res.status(204).json()
    }
}