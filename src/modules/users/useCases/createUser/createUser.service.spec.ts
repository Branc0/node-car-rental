import { ICreateUserDTO } from "../../DTOs/ICreateUserDTO";
import UserRepositoryMock from "../../repositories/implementations/test/UserRepositoryMock";
import User from "../../model/User";
import CreateUserService from "./createUser.service";

describe(CreateUserService.name, () => {
  let repository: UserRepositoryMock;
  let createUserService: CreateUserService;

  beforeEach(() => {
    repository = new UserRepositoryMock();
    createUserService = new CreateUserService(repository);
  });

  it("should create user", async () => {
    const createUserDto: ICreateUserDTO = {
      name: "John smith",
      email: "john@gmail.com",
      password: "123",
      driver_license: "321193",
    };
    const user = await createUserService.execute(createUserDto);

    expect(user).toBeInstanceOf(User);
  });
});
