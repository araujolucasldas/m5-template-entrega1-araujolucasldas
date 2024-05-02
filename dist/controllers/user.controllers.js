"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserControllers = void 0;
const user_services_1 = require("../services/user.services");
class UserControllers {
    async Register(req, res) {
        const userServices = new user_services_1.UserServices();
        const response = await userServices.Register(req.body);
        return res.status(201).json(response);
    }
    async Login(req, res) {
        const userServices = new user_services_1.UserServices();
        const response = await userServices.Login(req.body);
        return res.status(200).json(response);
    }
    async GetUser(req, res) {
        const userServices = new user_services_1.UserServices();
        const id = res.locals.decode.id;
        const response = await userServices.GetUser(id);
        return res.status(200).json(response);
    }
}
exports.UserControllers = UserControllers;
