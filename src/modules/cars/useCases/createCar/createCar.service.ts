import { inject, injectable } from "inversify";
import { ICarRepository } from "../../repositories/ICarRepository";
import { ICreateCarDTO } from "../../DTOs/ICreateCarDTO";
import AppError from "../../../../shared/errors/appError";
import Car from "../../model/Car";

@injectable()
export default class CreateCarService {
  constructor(@inject("CarRepository") private carRepository: ICarRepository) {}
  async execute(data: ICreateCarDTO): Promise<Car> {
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
