import CategoryRepository from "../../../../repositories/implementations/CategoryRepository";
import CreateCategoryController from "./CreateCategory.controller";
import { CreateCategoryService } from "./CreateCategory.service";

export default (): CreateCategoryController => {
  const categoryRepository = new CategoryRepository();
  const createCategoryService = new CreateCategoryService(categoryRepository);
  const createCategoryController = new CreateCategoryController(
    createCategoryService
  );

  return createCategoryController;
};
