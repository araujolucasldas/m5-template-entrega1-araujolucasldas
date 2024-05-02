import { Router } from "express";
import { container } from "tsyringe";
import { UserServices } from "../services/user.services";
import { UserControllers } from "../controllers/user.controllers";
import { ValidateBody } from "../middlewares/validateBody.middleware";
import { userLoginBodySchema, userRegisterBodySchema } from "../schemas/user.schemas";
import { ValidateToken } from "../middlewares/validateToken.middleware";
import { isEmailValid } from "../middlewares/isEmailValid.middleware";

export const userRouter = Router()

const userControllers = new UserControllers()

userRouter.post("/", ValidateBody.execute(userRegisterBodySchema),
    isEmailValid.execute, userControllers.Register)

userRouter.post("/login", ValidateBody.execute(userLoginBodySchema),
    userControllers.Login)

userRouter.get("/profile", ValidateToken.execute,
    userControllers.GetUser)

