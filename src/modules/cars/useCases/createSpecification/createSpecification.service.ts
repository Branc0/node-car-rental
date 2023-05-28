import { inject, injectable } from "inversify";
import { ICreateCategoryDTO } from "../../DTOs/ICreateCategoryDTO";
import AppError from "../../../../shared/errors/appError";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

@injectable()
export default class CreateSpecificationService {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository
  ) {}
  async execute({ name, description }: ICreateCategoryDTO) {
    if (!name || !description) {
      throw new AppError("Invalid fields");
    }
    const newSpecification = await this.specificationRepository.create({
      name,
      description,
    });
    return newSpecification;
  }
}
