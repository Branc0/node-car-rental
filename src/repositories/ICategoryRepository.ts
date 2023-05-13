import { ICreateCategoryDTO } from "../DTOs/ICreateCategoryDTO";
import Category from "../modules/cars/model/Category";

export interface ICategoryRepository {
  create: (data: ICreateCategoryDTO) => Promise<Category>;
  list: () => Promise<Category[]>;
  find: (name: string) => Promise<Category | undefined>;
}
