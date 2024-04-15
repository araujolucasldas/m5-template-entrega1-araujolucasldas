import { Router } from "express";
import { CategoryControllers } from "../controllers/category.controllers";
import { ValidateBody } from "../middlewares/validateBody.middleware";
import { categoryCreateSchema } from "../schemas/category.schemas";
import { isCategoryIdValid } from "../middlewares/isCategoryValid.middleware";

export const categoryRouter = Router()

const categoryControllers = new CategoryControllers()

categoryRouter.post("/", ValidateBody.execute(categoryCreateSchema), categoryControllers.create)

categoryRouter.delete("/:id", isCategoryIdValid.execute, categoryControllers.delete)