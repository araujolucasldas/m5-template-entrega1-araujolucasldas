import { prisma } from "../database/prisma";
import { TCategory, TCategoryCreate } from "../schemas/category.schemas";

export class CategoryServices{
    async create(body: TCategoryCreate): Promise<TCategory>{
        const data = prisma.category.create({data: body})

        return data
    }

    async delete(id: number){
        await prisma.category.delete({where: {id}})
    }
}