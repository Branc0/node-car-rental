import { ICreateUserDTO } from "../../../../DTOs/ICreateUserDTO";
import { IUserRepository } from "../../../../repositories/IUserRepository";
import User from "../../model/User";

export default class CreateUserService {
  constructor(private userRepository: IUserRepository) {}

  async execute(body: ICreateUserDTO): Promise<User> {
    const newUser = await this.userRepository.create(body);
    return newUser;
  }
}
