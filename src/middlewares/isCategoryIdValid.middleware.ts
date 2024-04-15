import { NextFunction, Request, Response } from "express"
import { AppError } from "../errors/appError"
import { prisma } from "../database/prisma"

export class isCategoryIdBodyValid {
    static async execute(req: Request, res: Response, next: NextFunction) {
        const id = req.body.categoryId

        if (id) {
            const category = await prisma.category.findFirst({ where: { id: Number(id) } })

            if (!category) {
                throw new AppError(404, "category not found")
            }
        }

        next()
    }
}