import { Request, Response } from "express";
import FindCategoryService from "./FindCategory.service";

class FindCategoryController {
  constructor(private findCategoryService: FindCategoryService) {}

  async handle(req: Request, res: Response) {
    const name = req.params.name;

    const category = await this.findCategoryService.execute(name);
    if (category) {
      return res.status(200).send(category);
    }
    return res.status(404).send();
  }
}

export default FindCategoryController;
