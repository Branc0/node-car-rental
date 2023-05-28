import { inject, injectable } from "inversify";
import { ICarRepository } from "../../repositories/ICarRepository";
import { ICreateCarSpecificationDTO } from "../../DTOs/ICreateCarSpecificationDTO";
import AppError from "../../../../shared/errors/appError";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

@injectable()
export default class CreateCarSpecificationService {
  constructor(
    @inject("CarRepository") private carRepository: ICarRepository,
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository
  ) {}

  async execute({
    car_id,
    specification_id,
  }: ICreateCarSpecificationDTO): Promise<void> {
    const car = await this.carRepository.findById(car_id);

    if (!car) {
      throw new AppError("Car does not exist, please try another ID", 404);
    }

    const specification = await this.specificationRepository.findById(
      specification_id
    );

    if (!specification) {
      throw new AppError(
        "Specification does not exist, please try another ID",
        404
      );
    }

    await this.carRepository.createCarSpecification({
      car_id,
      specification_id,
    });
  }
}
