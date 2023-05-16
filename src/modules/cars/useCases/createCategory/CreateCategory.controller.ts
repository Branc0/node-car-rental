import { Request, Response } from "express";
import { CreateCategoryService } from "./CreateCategory.service";
import container from "../../../../shared/container/inversify.config";
import AppError from "../../../../errors/appError";
class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const createCategoryService = container.resolve(CreateCategoryService);
    const newCategory = await createCategoryService.execute(req.body);
    return res.status(201).send(newCategory);
  }
}

export default CreateCategoryController;
