import { ICreateUserDTO } from "../../../../DTOs/ICreateUserDTO";
import AppError from "../../../../errors/appError";
import UserRepositoryMock from "../../../../repositories/implementations/test/UserRepositoryMock";
import CreateUserService from "../createUser/createUser.service";
import AuthenticateUserService from "./authenticateUser.service";

describe(AuthenticateUserService.name, () => {
  let repository: UserRepositoryMock;
  let authenticateUserService: AuthenticateUserService;
  let createUserService: CreateUserService;

  beforeEach(() => {
    repository = new UserRepositoryMock();
    authenticateUserService = new AuthenticateUserService(repository);
    createUserService = new CreateUserService(repository);
    authenticateUserService;
  });

  it("should authenticate user", async () => {
    const createUserDto: ICreateUserDTO = {
      name: "John smith",
      email: "john@gmail.com",
      password: "123",
      driver_license: "321193",
    };

    await createUserService.execute({ ...createUserDto });
    const res = await authenticateUserService.execute({
      email: createUserDto.email,
      password: createUserDto.password,
    });
    expect(res.token).toBeTruthy();
    expect(res.user).toEqual({ name: "John smith", email: "john@gmail.com" });
  });

  it("should not authenticate when user does NOT exist", async () => {
    const createUserDto: ICreateUserDTO = {
      name: "John smith",
      email: "john@gmail.com",
      password: "123",
      driver_license: "321193",
    };

    await createUserService.execute({ ...createUserDto });

    expect(
      async () =>
        await authenticateUserService.execute({
          email: "johnDoe@gmail.com",
          password: createUserDto.password,
        })
    ).rejects.toBeInstanceOf(AppError);
  });

  it("should not authenticate when password is incorrect", async () => {
    const createUserDto: ICreateUserDTO = {
      name: "John smith",
      email: "john@gmail.com",
      password: "12",
      driver_license: "321193",
    };

    await createUserService.execute({ ...createUserDto });

    expect(
      async () =>
        await authenticateUserService.execute({
          email: createUserDto.email,
          password: "122",
        })
    ).rejects.toBeInstanceOf(AppError);
  });
});
