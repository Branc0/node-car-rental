import { Router } from "express";
import { createUserController } from "../modules/users/useCases/createUser/index";

export const userRoutes = Router();

userRoutes.post("", (req, res) => {
  createUserController().handle(req, res);
});
