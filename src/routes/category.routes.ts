import { Router } from "express";
import { CategoryControllers } from "../controllers/category.controllers";
import { ValidateBody } from "../middlewares/validateBody.middleware";
import { categoryCreateSchema } from "../schemas/category.schemas";
import { isCategoryIdValid } from "../middlewares/isCategoryValid.middleware";
import { ValidateToken } from "../middlewares/validateToken.middleware";
import { isCategoryOwner } from "../middlewares/isCategoryOwner.middleware";

export const categoryRouter = Router()

const categoryControllers = new CategoryControllers()

categoryRouter.use("/", ValidateToken.execute)

categoryRouter.post("/", ValidateBody.execute(categoryCreateSchema), categoryControllers.create)

categoryRouter.delete("/:id", isCategoryIdValid.execute, isCategoryOwner.execute, categoryControllers.delete)