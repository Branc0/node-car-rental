import { inject, injectable } from "inversify";
import { ICarRepository } from "../../repositories/ICarRepository";
import { IListAvailableCarDTO } from "../../DTOs/IListAvailableCarDTO";

@injectable()
export default class ListCarService {
  constructor(@inject("CarRepository") private carRepository: ICarRepository) {}
  async execute(data: IListAvailableCarDTO) {
    const cars = await this.carRepository.listByAvailability(data);
    return cars;
  }
}
