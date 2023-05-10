import { Router } from "express";
import createCategoryController from "../modules/cars/useCases/createCategory";
import listCategoryController from "../modules/cars/useCases/listCategory";
import findCategoryController from "../modules/cars/useCases/findCategory";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
  return createCategoryController().handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  return listCategoryController().handle(req, res);
});

categoriesRoutes.get("/:name", (req, res) => {
  return findCategoryController().handle(req, res);
});

export { categoriesRoutes };
