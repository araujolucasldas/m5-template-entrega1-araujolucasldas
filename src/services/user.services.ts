import { TUserLoginBody, TUserLoginReturn, TUserRegisterBody, TUserReturn, userReturnSchema } from "../schemas/user.schemas";
import {hash, compare} from "bcryptjs";
import { prisma } from "../database/prisma";
import { AppError } from "../errors/appError";
import jwt from "jsonwebtoken";

export class UserServices{
    async Register(body: TUserRegisterBody): Promise<TUserReturn>{
        const hashPassword = await hash(body.password, 10)
        
        const newUser = {
            name: body.name,
            email: body.email,
            password: hashPassword
        }

        const data = await prisma.user.create({ data: newUser})

        return userReturnSchema.parse(data)
    }

    async Login(body: TUserLoginBody): Promise<TUserLoginReturn>{
       const user = await prisma.user.findFirst({where: {email: body.email}})

        if(!user){
            throw new AppError(404, "User not exists")
        }

        const toCompare = await compare(body.password, user.password)

        if(!toCompare){
            throw new AppError(401, "Email and password doesn't match")
        }

        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET as string)

        return {accessToken: token, user: userReturnSchema.parse(user)}
    }

    async GetUser(id: number): Promise<TUserReturn>{
        const user = await prisma.user.findFirst({where: {id}})

        return userReturnSchema.parse(user)
    }
}