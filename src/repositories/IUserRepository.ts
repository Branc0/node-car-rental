import { ICreateUserDTO } from "../DTOs/ICreateUserDTO";
import User from "../modules/users/model/User";

export interface IUserRepository {
  create: (data: ICreateUserDTO) => Promise<User>;
  findByEmail: (email: string) => Promise<User | undefined>;
  findById: (id: string) => Promise<User | undefined>;
}
