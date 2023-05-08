import { ICategoryRepository } from "../../../../repositories/ICategoryRepository";
import Category from "../../model/Category";

class ListCategoryService {
  constructor(private categoryRepository: ICategoryRepository) {}

  execute(): Category[] {
    return this.categoryRepository.list();
  }
}

export default ListCategoryService;
