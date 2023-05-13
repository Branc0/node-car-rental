import { ICategoryRepository } from "../../../../repositories/ICategoryRepository";
import { inject, injectable } from "inversify";
import Category from "../../model/Category";

interface ICreateCategory {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryService {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository
  ) {}

  async execute({ name, description }: ICreateCategory): Promise<Category> {
    if (!name || !description) {
      throw Error("Required data missing");
    }

    const categoryExists = await this.categoryRepository.find(name)!!;
    if (categoryExists) {
      throw Error("This Category already exists!");
    }

    const res = this.categoryRepository.create({ name, description });

    return res;
  }
}

export { CreateCategoryService };
