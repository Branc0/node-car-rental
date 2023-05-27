import { ICreateCarDTO } from "../../../shared/DTOs/ICreateCarDTO";
import { IListAvailableCarDTO } from "../../../shared/DTOs/IListAvailableCarDTO";
import Car from "../model/Car";

export interface ICarRepository {
  create: (data: ICreateCarDTO) => Promise<Car>;
  list: () => Promise<Car[]>;
  findByPlate: (licensePlate: string) => Promise<Car | undefined>;
  listByAvailability: (data: IListAvailableCarDTO) => Promise<Car[]>;
}
