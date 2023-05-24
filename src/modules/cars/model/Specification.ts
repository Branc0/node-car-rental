import { randomUUID } from "crypto";
import { ICreateSpecificationDTO } from "../../../shared/DTOs/ICreateSpecificationDTO";

export default class Specification {
  id: string;
  name: string;
  description: string;
  createdAt?: Date;

  constructor({ name, description }: ICreateSpecificationDTO) {
    this.id = randomUUID();
    this.name = name;
    this.description = description;
  }
}
