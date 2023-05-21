import { Knex } from "knex";
import { ICreateUserDTO } from "../../../../shared/DTOs/ICreateUserDTO";
import User from "../../model/User";
import { IUserRepository } from "../IUserRepository";
import { db } from "../../../../db";
import { injectable } from "inversify";

@injectable()
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

  async findByEmail(email: string): Promise<User | undefined> {
    const res = await this.repository
      .select("*")
      .where("email", "=", email)
      .first();
    return res;
  }

  async findById(id: string): Promise<User | undefined> {
    const res = await this.repository.select("*").where("id", "=", id).first();
    return res;
  }
}