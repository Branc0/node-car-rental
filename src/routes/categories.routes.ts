import { Router } from "express";
import CategoryRepository from "../repositories/categoryRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoryRepository = new CategoryRepository();

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
  try {
    const service = new CreateCategoryService(categoryRepository);
    const newCategory = service.execute(req.body);
    return res.status(201).send(newCategory);
  } catch (err) {
    return res.status(400).send(err);
  }
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
