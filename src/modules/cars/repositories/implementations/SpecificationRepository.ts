import { injectable } from "inversify";
import { ICreateSpecificationDTO } from "../../../../shared/DTOs/ICreateSpecificationDTO";
import Specification from "../../model/Specification";
import { ISpecificationRepository } from "../ISpecificationRepository";
import { Knex } from "knex";
import { db } from "../../../../db";

@injectable()
export default class SpecificationRepository
  implements ISpecificationRepository
{
  private repository: Knex.QueryBuilder<Specification>;

  constructor() {
    this.repository = db("specifications");
  }

  async create(data: ICreateSpecificationDTO): Promise<Specification> {
    const newSpecification = new Specification(data);
    const [res] = await this.repository.clone().insert(newSpecification, "*");
    return res;
  }

  async list(): Promise<Specification[]> {
    const res = await this.repository.clone().select();
    return res;
  }
}
