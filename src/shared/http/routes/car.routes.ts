import { Router } from "express";
import CreateCarController from "../../../modules/cars/useCases/createCar/createCar.controller";
import { adminGuard } from "../middlewares/adminGuard";
import { authGuard } from "../middlewares/authGuard";
import ListCarController from "../../../modules/cars/useCases/listCar/listCar.controller";

export const carRoutes = Router();

const createCarController = new CreateCarController();
const listCarController = new ListCarController();

carRoutes.get("", listCarController.handle);
carRoutes.post("", authGuard, adminGuard, createCarController.handle);
