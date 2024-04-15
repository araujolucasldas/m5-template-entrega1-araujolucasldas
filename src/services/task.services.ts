import { prisma } from "../database/prisma";
import { TTask, TTaskCreate, TTaskUpdate } from "../schemas/task.schemas";

export class TaskServices{
    async create(body: TTaskCreate): Promise<TTask>{
        const data = await prisma.task.create({data: body})

        return data
    }

    async findMany(search?: string): Promise<TTask[]>{
        if(search){
            const data = await prisma.task.findMany({
                include: {category: true},
                where: {category: {name: {contains: search, mode: "insensitive"}}}
                })
    
            return data
        }
        const data = await prisma.task.findMany({
            include: {category: true}
            })

        return data
    }

    async findOne(id: number): Promise<TTask>{
        const data = await prisma.task.findFirst({
            where: {id},
            include: {category: true}
        })

        return data as TTask
    }

    async update(id: number, body: TTaskUpdate){
        const data = await prisma.task.update({
            where: {id},
            data: body
        })

        return data
    }

    async delete(id: number){
        await prisma.task.delete({where: {id}})
    }
}