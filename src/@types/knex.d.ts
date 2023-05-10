import { knex } from "knex";
import Category from "../modules/cars/model/Category";

declare module "knex/types/tables" {
  export interface Tables {
    categories: Category;
  }
}
