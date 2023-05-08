import { Request, Response } from "express";
import ListCategoryService from "./ListCategory.service";
import Category from "../../model/Category";

class ListCategoryController {
  constructor(private listCategoryService: ListCategoryService) {}

  handle(req: Request, res: Response) {
    const categoriesList = this.listCategoryService.execute();
    return res.status(200).send(categoriesList);
  }
}

export default ListCategoryController;
