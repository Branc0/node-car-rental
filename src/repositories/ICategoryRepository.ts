import Category from "../modules/cars/model/Category";

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export interface ICategoryRepository {
  create: (data: ICreateCategoryDTO) => Promise<Category>;
  list: () => Promise<Category[]>;
  find: (name: string) => Promise<Category | undefined>;
}
