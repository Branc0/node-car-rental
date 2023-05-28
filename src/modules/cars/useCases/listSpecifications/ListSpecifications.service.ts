import { inject, injectable } from "inversify";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";
import Specification from "../../model/Specification";

@injectable()
export default class ListSpecificationsService {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository
  ) {}

  async execute(): Promise<Specification[]> {
    const specifications = await this.specificationRepository.list();
    return specifications;
  }
}
