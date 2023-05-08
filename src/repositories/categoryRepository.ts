import Category from "../model/Category";

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export default class CategoryRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
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
