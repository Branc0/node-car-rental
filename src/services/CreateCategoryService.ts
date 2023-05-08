import { ICategoryRepository } from "../repositories/ICategoryRepository";
import CategoryRepository from "../repositories/categoryRepository";

interface ICreateCategory {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoryRepository: ICategoryRepository) {}

  execute({ name, description }: ICreateCategory) {
    if (!name || !description) {
      throw Error("Required data missing");
    }

    const categoryExists = this.categoryRepository.find(name)!!;
    if (categoryExists) {
      throw Error("This Category already exists!");
    }

    return this.categoryRepository.create({ name, description });
  }
}

export { CreateCategoryService };
