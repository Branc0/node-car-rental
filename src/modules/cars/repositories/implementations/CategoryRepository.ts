import { Knex } from "knex";
import { db } from "../../../../db";
import Category from "../../model/Category";
import { ICategoryRepository } from "../ICategoryRepository";
import { ICreateCategoryDTO } from "../../../../shared/DTOs/ICreateCategoryDTO";
import { injectable } from "inversify";

@injectable()
export default class CategoryRepository implements ICategoryRepository {
  private repository: Knex.QueryBuilder<Category>;

  constructor() {
    this.repository = db("categories");
  }

  async create(data: ICreateCategoryDTO): Promise<Category> {
    const newCategory = new Category(data);
    const [res] = await this.repository.clone().insert(newCategory, "*");
    return res;
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.clone().select();
    return categories;
  }

  async find(name: string): Promise<Category | undefined> {
    const category = await this.repository
      .clone()
      .select("*")
      .where("name", "=", name)
      .first();
    return category;
  }
}
