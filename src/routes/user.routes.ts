import { Router } from "express";
import { container } from "tsyringe";
import { UserServices } from "../services/user.services";
import { UserControllers } from "../controllers/user.controllers";
import { ValidateBody } from "../middlewares/validateBody.middleware";
import { userLoginBodySchema, userRegisterBodySchema } from "../schemas/user.schemas";
import { ValidateToken } from "../middlewares/validateToken.middleware";
import { isEmailValid } from "../middlewares/isEmailValid.middleware";

export const userRouter = Router()

container.registerSingleton("UserServices", UserServices)

const userControllers = container.resolve(UserControllers)

userRouter.post("/", ValidateBody.execute(userRegisterBodySchema),
    isEmailValid.execute,
    (req, res) => { userControllers.Register(req, res) })

userRouter.post("/login", ValidateBody.execute(userLoginBodySchema),
    (req, res) => { userControllers.Login(req, res) })

userRouter.get("/profile", ValidateToken.execute,
    (req, res) => { userControllers.GetUser(req, res) })