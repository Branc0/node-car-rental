import { ICategoryRepository } from "../../repositories/ICategoryRepository";
import { inject, injectable } from "inversify";
import Category from "../../model/Category";
import AppError from "../../../../shared/errors/appError";

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
      throw new AppError("Required data missing");
    }

    const categoryExists = await this.categoryRepository.find(name)!!;
    if (categoryExists) {
      throw new AppError("This Category already exists!");
    }

    const res = await this.categoryRepository.create({ name, description });

    return res;
  }
}

export { CreateCategoryService };
