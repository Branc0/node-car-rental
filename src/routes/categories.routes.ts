import { Router } from "express";
import CategoryRepository from "../repositories/implementations/CategoryRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

const categoryRepository = new CategoryRepository();

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  const categoriesList = categoryRepository.list();
  return res.status(200).send(categoriesList);
});

categoriesRoutes.get("/:name", (req, res) => {
  const name = req.params.name;

  const category = categoryRepository.find(name);
  if (category) {
    return res.status(200).send(category);
  }
  return res.status(404).send();
});

export { categoriesRoutes };
