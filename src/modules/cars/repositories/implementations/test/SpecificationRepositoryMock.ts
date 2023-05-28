import { injectable } from "inversify";
import { ICreateSpecificationDTO } from "../../../DTOs/ICreateSpecificationDTO";
import Specification from "../../../model/Specification";
import { ISpecificationRepository } from "../../ISpecificationRepository";

@injectable()
export default class SpecificationRepositoryMock
  implements ISpecificationRepository
{
  private specifications: Specification[] = [];

  create(data: ICreateSpecificationDTO): Promise<Specification> {
    const newSpecification = new Specification(data);
    this.specifications.push(newSpecification);
    return new Promise((resolve) => resolve(newSpecification));
  }

  list(): Promise<Specification[]> {
    return new Promise((resolve) => resolve([...this.specifications]));
  }

  findById(id: string): Promise<Specification | undefined> {
    const specification = this.specifications.find(
      (specification) => specification.id === id
    );
    return new Promise((resolve) => resolve(specification));
  }
}
