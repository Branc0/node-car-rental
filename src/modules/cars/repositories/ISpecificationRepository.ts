import { ICreateSpecificationDTO } from "../DTOs/ICreateSpecificationDTO";
import Specification from "../model/Specification";

export interface ISpecificationRepository {
  create: (data: ICreateSpecificationDTO) => Promise<Specification>;
  list: () => Promise<Specification[]>;
  findById: (id: string) => Promise<Specification | undefined>;
}
