import { inject, injectable } from "inversify";
import { ICarRepository } from "../../repositories/ICarRepository";
import { ICreateCarDTO } from "../../../../shared/DTOs/ICreateCarDTO";
import AppError from "../../../../shared/errors/appError";

@injectable()
export default class CreateCarService {
  constructor(@inject("CarRepository") private carRepository: ICarRepository) {}
  async execute(data: ICreateCarDTO) {
    const isCarAlreadyRegistered = await this.carRepository.findByPlate(
      data.license_plate
    );
    if (!!isCarAlreadyRegistered) {
      throw new AppError(
        `A car with the plate ${data.license_plate} it's already registered`
      );
    }
    const car = await this.carRepository.create(data);
    return car;
  }
}