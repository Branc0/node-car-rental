import { Container } from "inversify";

import CategoryRepository from "../../repositories/implementations/CategoryRepository";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";
import { IUserRepository } from "../../repositories/IUserRepository";
import UserRepository from "../../repositories/implementations/UserRepository";

const container = new Container();
container
  .bind<ICategoryRepository>("CategoryRepository")
  .to(CategoryRepository)
  .inSingletonScope();

container
  .bind<IUserRepository>("UserRepository")
  .to(UserRepository)
  .inSingletonScope();

export default container;
