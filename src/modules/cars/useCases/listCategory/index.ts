import CategoryRepository from "../../../../repositories/implementations/CategoryRepository";
import ListCategoryController from "./ListCategory.controller";
import ListCategoryService from "./ListCategory.service";

const categoryRepository = CategoryRepository.getInstance();
const listCategoryService = new ListCategoryService(categoryRepository);
const listCategoryController = new ListCategoryController(listCategoryService);

export { listCategoryController };
