import { Container } from "inversify";

import CategoryRepository from "../../modules/cars/repositories/implementations/CategoryRepository";
import { ICategoryRepository } from "../../modules/cars/repositories/ICategoryRepository";
import { IUserRepository } from "../../modules/users/repositories/IUserRepository";
import UserRepository from "../../modules/users/repositories/implementations/UserRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/ISpecificationRepository";
import SpecificationRepository from "../../modules/cars/repositories/implementations/SpecificationRepository";
import { ICarRepository } from "../../modules/cars/repositories/ICarRepository";
import CarRepository from "../../modules/cars/repositories/implementations/CarRepository";

const container = new Container();
container
  .bind<ICategoryRepository>("CategoryRepository")
  .to(CategoryRepository)
  .inSingletonScope();

container
  .bind<IUserRepository>("UserRepository")
  .to(UserRepository)
  .inSingletonScope();

container
  .bind<ISpecificationRepository>("SpecificationRepository")
  .to(SpecificationRepository)
  .inSingletonScope();

container
  .bind<ICarRepository>("CarRepository")
  .to(CarRepository)
  .inSingletonScope();

export default container;
