import { Knex } from "knex";
import { ICreateUserDTO } from "../../DTOs/ICreateUserDTO";
import User from "../../modules/users/model/User";
import { IUserRepository } from "../IUserRepository";
import { db } from "../../db";

export default class UserRepository implements IUserRepository {
  private repository: Knex.QueryBuilder<User>;

  constructor() {
    this.repository = db("users");
  }

  async create(data: ICreateUserDTO): Promise<User> {
    const newUser = new User(data);
    const [res] = await this.repository.insert(newUser, "*");
    return res;
  }
}
