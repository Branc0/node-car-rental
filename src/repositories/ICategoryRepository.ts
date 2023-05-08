import Category from "../modules/cars/model/Category";

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export interface ICategoryRepository {
  create: (data: ICreateCategoryDTO) => Category;
  list: () => Category[];
  find: (name: string) => Category | undefined;
}
