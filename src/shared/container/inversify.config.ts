import { Container } from "inversify";

import CategoryRepository from "../../modules/cars/repositories/implementations/CategoryRepository";
import { ICategoryRepository } from "../../modules/cars/repositories/ICategoryRepository";
import { IUserRepository } from "../../modules/users/repositories/IUserRepository";
import UserRepository from "../../modules/users/repositories/implementations/UserRepository";

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
