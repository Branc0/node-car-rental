import UserRepository from "../../../../repositories/implementations/UserRepository";
import CreateUserController from "./createUser.controller";
import CreateUserService from "./createUser.service";

export const createUserController = (): CreateUserController => {
  const userRepository = new UserRepository();
  const createUserService = new CreateUserService(userRepository);
  const createUserController = new CreateUserController(createUserService);
  return createUserController;
};
