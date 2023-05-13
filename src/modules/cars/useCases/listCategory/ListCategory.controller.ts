import { Request, Response } from "express";
import container from "../../../../shared/container/inversify.config";
import ListCategoryService from "./ListCategory.service";

class ListCategoryController {
  async handle(req: Request, res: Response) {
    const listCategoryService = container.resolve(ListCategoryService);
    const categoriesList = await listCategoryService.execute();
    return res.status(200).send(categoriesList);
  }
}

export default ListCategoryController;
