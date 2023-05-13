import { Knex } from "knex";
import { db } from "../../db";
import Category from "../../modules/cars/model/Category";
import { ICategoryRepository } from "../ICategoryRepository";
import { ICreateCategoryDTO } from "../../DTOs/ICreateCategoryDTO";

export default class CategoryRepository implements ICategoryRepository {
  private repository: Knex.QueryBuilder<Category>;

  constructor() {
    this.repository = db("categories");
  }

  async create(data: ICreateCategoryDTO): Promise<Category> {
    const newCategory = new Category(data);
    const [res] = await this.repository.insert(newCategory, "*");
    return res;
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.select();
    return categories;
  }

  async find(name: string): Promise<Category | undefined> {
    const category = await this.repository
      .select("*")
      .where("name", "=", name)
      .first();
    return category;
  }
}
