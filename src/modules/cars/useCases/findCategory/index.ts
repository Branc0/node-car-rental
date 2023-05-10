import CategoryRepository from "../../../../repositories/implementations/CategoryRepository";
import FindCategoryController from "./FindCategory.controller";
import FindCategoryService from "./FindCategory.service";

export default (): FindCategoryController => {
  const categoryRepository = new CategoryRepository();
  const findCategoryService = new FindCategoryService(categoryRepository);
  const findCategoryController = new FindCategoryController(
    findCategoryService
  );

  return findCategoryController;
};
