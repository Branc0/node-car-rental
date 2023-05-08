import CategoryRepository from "../../../../repositories/implementations/CategoryRepository";
import FindCategoryController from "./FindCategory.controller";
import FindCategoryService from "./FindCategory.service";

const categoryRepository = CategoryRepository.getInstance();
const findCategoryService = new FindCategoryService(categoryRepository);
const findCategoryController = new FindCategoryController(findCategoryService);

export { findCategoryController };
