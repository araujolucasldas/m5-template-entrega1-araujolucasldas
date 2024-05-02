"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskControllers = void 0;
const task_services_1 = require("../services/task.services");
class TaskControllers {
    async create(req, res) {
        const taskServices = new task_services_1.TaskServices();
        const userId = res.locals.decode.id;
        const response = await taskServices.create(req.body, userId);
        return res.status(201).json(response);
    }
    async findMany(req, res) {
        const taskServices = new task_services_1.TaskServices();
        const search = req.query.category;
        const userId = res.locals.decode?.id;
        const response = await taskServices.findMany(search, userId);
        return res.status(200).json(response);
    }
    async findOne(req, res) {
        const taskServices = new task_services_1.TaskServices();
        const response = await taskServices.findOne(Number(req.params.id));
        return res.status(200).json(response);
    }
    async update(req, res) {
        const taskServices = new task_services_1.TaskServices();
        const response = await taskServices.update(Number(req.params.id), req.body);
        return res.status(200).json(response);
    }
    async delete(req, res) {
        const taskServices = new task_services_1.TaskServices();
        await taskServices.delete(Number(req.params.id));
        return res.status(204).json();
    }
}
exports.TaskControllers = TaskControllers;
