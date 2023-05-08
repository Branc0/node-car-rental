import { ICategoryRepository } from "../../../../repositories/ICategoryRepository";
import Category from "../../model/Category";

class FindCategoryService {
  constructor(private categoryRepository: ICategoryRepository) {}

  execute(name: string): Category | undefined {
    return this.categoryRepository.find(name);
  }
}

export default FindCategoryService;
