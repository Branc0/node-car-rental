import { inject, injectable } from "inversify";
import bcrypt from "bcrypt";

import { ICreateUserDTO } from "../../../../DTOs/ICreateUserDTO";
import { IUserRepository } from "../../../../repositories/IUserRepository";
import User from "../../model/User";

@injectable()
export default class CreateUserService {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ) {}

  async execute(body: ICreateUserDTO): Promise<User> {
    const encryptedPassword = await bcrypt.hash(body.password, 10);
    body.password = encryptedPassword;
    const newUser = await this.userRepository.create(body);
    return newUser;
  }
}
