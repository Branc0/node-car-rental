import { Router } from "express";
import AuthenticateUserController from "../modules/users/useCases/authenticateUser/authenticateUser.controller";

export const authenticationRoutes = Router();
const authenticateUserController = new AuthenticateUserController();

authenticationRoutes.post("/sessions", authenticateUserController.handle);
