import { Request, Response } from "express";
import { ICreateCategoryDTO } from "../../../../repositories/ICategoryRepository";
import { CreateCategoryService } from "./CreateCategory.service";

class CreateCategoryController {
  constructor(private createCategoryService: CreateCategoryService) {}

  handle(req: Request, res: Response) {
    try {
      const newCategory = this.createCategoryService.execute(req.body);
      return res.status(201).send(newCategory);
    } catch (err) {
      return res.status(400).send(err);
    }
  }
}

export default CreateCategoryController;
