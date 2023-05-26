import { Router } from "express";
import CreateCarController from "../../../modules/cars/useCases/createCar/createCar.controller";
import { adminGuard } from "../middlewares/adminGuard";

export const carRoutes = Router();

const createCarController = new CreateCarController();

carRoutes.post("", adminGuard, createCarController.handle);
// carRoutes.get("", createCarController.handle);
