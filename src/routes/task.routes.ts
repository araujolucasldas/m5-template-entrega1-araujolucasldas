import { Router } from "express";
import { TaskControllers } from "../controllers/task.controllers";
import { ValidateBody } from "../middlewares/validateBody.middleware";
import { taskCreateSchema, taskUpdateSchema } from "../schemas/task.schemas";
import { isTaskIdValid } from "../middlewares/isTaskIdValid.middleware";
import { isCategoryIdBodyValid } from "../middlewares/isCategoryIdValid.middleware";
import { ValidateToken } from "../middlewares/validateToken.middleware";
import { isTaskOwner } from "../middlewares/isTaskOwner.middleware";

export const taskRouter = Router()

const taskControllers = new TaskControllers()

taskRouter.use("/", ValidateToken.execute)

taskRouter.post("/", isCategoryIdBodyValid.execute, ValidateBody.execute(taskCreateSchema), taskControllers.create)

taskRouter.get("/", taskControllers.findMany)

taskRouter.use("/:id", isTaskIdValid.execute, isTaskOwner.execute)

taskRouter.get("/:id", taskControllers.findOne)

taskRouter.patch("/:id", ValidateBody.execute(taskUpdateSchema), taskControllers.update)

taskRouter.delete("/:id", taskControllers.delete)

