import { Router } from "express";
import CategoryRepository from "../repositories/categoryRepository";

const categoryRepository = new CategoryRepository();

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return res.status(400).send("");
  }

  const categoryExists = categoryRepository.find(name)!!;
  if (categoryExists) {
    return res.status(400).send("This Category already exists!");
  }

  const newCategory = categoryRepository.create({ name, description });
  return res.status(201).send(newCategory);
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
