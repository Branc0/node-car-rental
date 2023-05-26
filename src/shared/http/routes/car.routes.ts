import { Router } from "express";
import CreateCarController from "../../../modules/cars/useCases/createCar/createCar.controller";

export const carRoutes = Router();

const createCarController = new CreateCarController();

carRoutes.post("", createCarController.handle);
// carRoutes.get("", createCarController.handle);
