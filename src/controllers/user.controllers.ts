import { Request, Response } from "express";
import { UserServices } from "../services/user.services";

export class UserControllers{
   
    async Register(req: Request, res: Response){
        const userServices = new UserServices()

        const response = await userServices.Register(req.body)

        return res.status(201).json(response)
    }

    async Login(req: Request, res: Response){
        const userServices = new UserServices()

        const response = await userServices.Login(req.body)

        return res.status(200).json(response)
    }

    async GetUser(req: Request, res: Response){
        const userServices = new UserServices()

        const id = res.locals.decode.id

        const response = await userServices.GetUser(id)

        return res.status(200).json(response)
    }
}