import { inject, injectable } from "inversify";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";
import Category from "../../model/Category";
@injectable()
class FindCategoryService {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository
  ) {}

  async execute(name: string): Promise<Category | undefined> {
    const category = await this.categoryRepository.find(name);
    return category;
  }
}

export default FindCategoryService;
