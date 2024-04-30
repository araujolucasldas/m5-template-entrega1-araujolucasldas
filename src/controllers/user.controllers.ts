import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { UserServices } from "../services/user.services";

@injectable()
export class UserControllers{
    constructor(@inject("UserServices") private userServices: UserServices) {}

    async Register(req: Request, res: Response){
        const response = await this.userServices.Register(req.body)

        return res.status(201).json(response)
    }

    async Login(req: Request, res: Response){
        const response = await this.userServices.Login(req.body)

        return res.status(200).json(response)
    }

    async GetUser(req: Request, res: Response){
        const id = res.locals.decode.id

        const response = await this.userServices.GetUser(id)

        return res.status(200).json(response)
    }
}