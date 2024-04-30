import { prisma } from "../database/prisma";
import { TCategory, TCategoryCreate } from "../schemas/category.schemas";

export class CategoryServices{
    async create(body: TCategoryCreate, userId: number): Promise<TCategory>{
        const newCategory = {...body, userId}
        
        const data = prisma.category.create({data: newCategory})

        return data
    }

    async delete(id: number){
        await prisma.category.delete({where: {id}})
    }
}