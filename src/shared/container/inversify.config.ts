import { Container } from "inversify";

import CategoryRepository from "../../repositories/implementations/CategoryRepository";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

const container = new Container();
container
  .bind<ICategoryRepository>("CategoryRepository")
  .to(CategoryRepository)
  .inSingletonScope();

export default container;
