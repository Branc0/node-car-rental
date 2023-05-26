import { Router } from "express";
import CreateSpecificationController from "../../../modules/cars/useCases/createSpecification/createSpecification.controller";
import { adminGuard } from "../middlewares/adminGuard";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.post("", adminGuard, createSpecificationController.handle);

export default specificationsRoutes;
