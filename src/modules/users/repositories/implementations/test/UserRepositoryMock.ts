import { ICreateUserDTO } from "../../../../../shared/DTOs/ICreateUserDTO";
import User from "../../../model/User";
import { IUserRepository } from "../../IUserRepository";

export default class UserRepositoryMock implements IUserRepository {
  users: User[] = [];

  create(data: ICreateUserDTO): Promise<User> {
    const user = new User(data);
    this.users.push(user);
    return new Promise((resolve) => {
      resolve(user);
    });
  }

  findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find((user) => user.email === email);
    return new Promise((resolve) => {
      resolve(user);
    });
  }

  findById(id: string): Promise<User | undefined> {
    const user = this.users.find((user) => user.id === id);
    return new Promise((resolve) => {
      resolve(user);
    });
  }
}
