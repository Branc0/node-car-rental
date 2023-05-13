import { Request, Response } from "express";
import { CreateCategoryService } from "./CreateCategory.service";
import container from "../../../../shared/container/inversify.config";
class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const createCategoryService = container.resolve(CreateCategoryService);
    try {
      const newCategory = await createCategoryService.execute(req.body);
      return res.status(201).send(newCategory);
    } catch (err) {
      return res.status(400).send(err);
    }
  }
}

export default CreateCategoryController;
