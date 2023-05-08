import { randomUUID } from "node:crypto";
import { ICreateCategoryDTO } from "../repositories/ICategoryRepository";

export default class Category {
  id: string;
  name: string;
  description: string;
  created_at: Date;

  constructor({ name, description }: ICreateCategoryDTO) {
    this.id = randomUUID();
    this.name = name;
    (this.description = description), (this.created_at = new Date());
  }
}
