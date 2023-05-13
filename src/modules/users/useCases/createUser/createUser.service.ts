import { inject, injectable } from "inversify";
import { ICreateUserDTO } from "../../../../DTOs/ICreateUserDTO";
import { IUserRepository } from "../../../../repositories/IUserRepository";
import User from "../../model/User";

@injectable()
export default class CreateUserService {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ) {}

  async execute(body: ICreateUserDTO): Promise<User> {
    const newUser = await this.userRepository.create(body);
    return newUser;
  }
}
