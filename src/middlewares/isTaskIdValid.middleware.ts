import { NextFunction, Request, Response } from "express"
import { AppError } from "../errors/appError"
import { prisma } from "../database/prisma"

export class isTaskIdValid{
    static async execute(req: Request, res: Response, next: NextFunction){
        const id = req.params.id

        const task = await prisma.task.findFirst({where: {id: Number(id)}})

        if(!task){
            throw new AppError(404, "Task not found")
        }

        next()
    }
}