import { inject, injectable } from "inversify";
import { ICategoryRepository } from "../../../../repositories/ICategoryRepository";
import Category from "../../model/Category";

@injectable()
class ListCategoryService {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository
  ) {}

  async execute(): Promise<Category[]> {
    const list = await this.categoryRepository.list();
    return list;
  }
}

export default ListCategoryService;
