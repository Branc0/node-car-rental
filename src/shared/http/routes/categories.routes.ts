import { Router } from "express";
import CreateCategoryController from "../../../modules/cars/useCases/createCategory/CreateCategory.controller";
import ListCategoryController from "../../../modules/cars/useCases/listCategory/ListCategory.controller";
import FindCategoryController from "../../../modules/cars/useCases/findCategory/FindCategory.controller";
import { adminGuard } from "../middlewares/adminGuard";

const categoriesRoutes = Router();
const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();
const findCategoryController = new FindCategoryController();

categoriesRoutes.post("/", adminGuard, createCategoryController.handle);
categoriesRoutes.get("/", listCategoryController.handle);
categoriesRoutes.get("/:name", findCategoryController.handle);

export { categoriesRoutes };
