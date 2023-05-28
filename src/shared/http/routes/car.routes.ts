import { Router } from "express";
import { adminGuard } from "../middlewares/adminGuard";
import { authGuard } from "../middlewares/authGuard";
import CreateCarController from "../../../modules/cars/useCases/createCar/createCar.controller";
import ListCarController from "../../../modules/cars/useCases/listCar/listCar.controller";
import CreateCarSpecificationController from "../../../modules/cars/useCases/createCarSpecification/createCarSpecification.controller";

export const carRoutes = Router();

const createCarController = new CreateCarController();
const createCarSpecificationController = new CreateCarSpecificationController();
const listCarController = new ListCarController();

carRoutes.get("", listCarController.handle);
carRoutes.post("", authGuard, adminGuard, createCarController.handle);
carRoutes.post(
  "/:id/specifications",
  authGuard,
  adminGuard,
  createCarSpecificationController.handle
);
