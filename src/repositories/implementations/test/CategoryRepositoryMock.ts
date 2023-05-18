import { ICreateCategoryDTO } from "../../../DTOs/ICreateCategoryDTO";
import Category from "../../../modules/cars/model/Category";
import { ICategoryRepository } from "../../ICategoryRepository";

export default class CategoryRepositoryMock implements ICategoryRepository {
  private _data: Category[] = [];

  create(data: ICreateCategoryDTO): Promise<Category> {
    return new Promise((resolve) => {
      const newCategory = new Category(data);
      this._data.push(newCategory);
      resolve(newCategory);
    });
  }

  list(): Promise<Category[]> {
    return new Promise((resolve) => {
      resolve([...this._data]);
    });
  }

  find(name: string): Promise<Category | undefined> {
    return new Promise((resolve) => {
      const user = this._data.find((category) => category.name === name);
    });
  }
}
