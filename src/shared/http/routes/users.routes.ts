import { Router } from "express";
import CreateUserController from "../../../modules/users/useCases/createUser/createUser.controller";

export const userRoutes = Router();

const createUserController = new CreateUserController();

userRoutes.post("", createUserController.handle);
