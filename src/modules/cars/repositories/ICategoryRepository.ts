import { ICreateCategoryDTO } from "../../../shared/DTOs/ICreateCategoryDTO";
import Category from "../model/Category";

export interface ICategoryRepository {
  create: (data: ICreateCategoryDTO) => Promise<Category>;
  list: () => Promise<Category[]>;
  find: (name: string) => Promise<Category | undefined>;
}
