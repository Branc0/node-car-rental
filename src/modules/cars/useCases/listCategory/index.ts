import CategoryRepository from "../../../../repositories/implementations/CategoryRepository";
import ListCategoryController from "./ListCategory.controller";
import ListCategoryService from "./ListCategory.service";

export default (): ListCategoryController => {
  const categoryRepository = new CategoryRepository();
  const listCategoryService = new ListCategoryService(categoryRepository);
  const listCategoryController = new ListCategoryController(
    listCategoryService
  );

  return listCategoryController;
};
