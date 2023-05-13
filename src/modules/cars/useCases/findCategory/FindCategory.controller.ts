import { Request, Response } from "express";
import container from "../../../../shared/container/inversify.config";
import FindCategoryService from "./FindCategory.service";

class FindCategoryController {
  async handle(req: Request, res: Response) {
    const findCategoryService = container.resolve(FindCategoryService);

    const name = req.params.name;

    const category = await findCategoryService.execute(name);
    if (category) {
      return res.status(200).send(category);
    }
    return res.status(404).send();
  }
}

export default FindCategoryController;
