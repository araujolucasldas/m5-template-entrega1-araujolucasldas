import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../errors/appError";


export class ValidateToken{
    static execute(req: Request, res: Response, next: NextFunction){
        const authorization = req.headers.authorization
        const token = authorization?.replace("Bearer ", "")

        const secret = process.env.JWT_SECRET as string

        if(!token){
            throw new AppError(401, "Token is required")
        }

        jwt.verify(token, secret)

        res.locals.decode = jwt.decode(token)

        next()

    }
}