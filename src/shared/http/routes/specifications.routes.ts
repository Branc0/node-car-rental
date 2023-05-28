import { Router } from "express";
import CreateSpecificationController from "../../../modules/cars/useCases/createSpecification/createSpecification.controller";
import { adminGuard } from "../middlewares/adminGuard";
import ListSpecificationsController from "../../../modules/cars/useCases/listSpecifications/ListSpecifications.controller";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationController = new ListSpecificationsController();

specificationsRoutes.post("", adminGuard, createSpecificationController.handle);
specificationsRoutes.get("", listSpecificationController.handle);

export default specificationsRoutes;
