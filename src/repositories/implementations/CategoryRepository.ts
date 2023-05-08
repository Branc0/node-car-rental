import Category from "../../modules/cars/model/Category";
import {
  ICategoryRepository,
  ICreateCategoryDTO,
} from "../ICategoryRepository";

export default class CategoryRepository implements ICategoryRepository {
  private categories: Category[];
  private static INSTANCE: CategoryRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoryRepository {
    if (!CategoryRepository.INSTANCE) {
      CategoryRepository.INSTANCE = new CategoryRepository();
    }
    return CategoryRepository.INSTANCE;
  }

  create(data: ICreateCategoryDTO): Category {
    const newCategory = new Category(data);
    this.categories = [...this.categories, newCategory];
    return newCategory;
  }

  list(): Category[] {
    return [...this.categories];
  }

  find(name: string): Category | undefined {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }
}
