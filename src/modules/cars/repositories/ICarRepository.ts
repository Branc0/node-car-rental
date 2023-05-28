import { ICreateCarDTO } from "../DTOs/ICreateCarDTO";
import { ICreateCarSpecificationDTO } from "../DTOs/ICreateCarSpecificationDTO";
import { IListAvailableCarDTO } from "../DTOs/IListAvailableCarDTO";
import Car from "../model/Car";

export interface ICarRepository {
  create: (data: ICreateCarDTO) => Promise<Car>;
  list: () => Promise<Car[]>;
  findByPlate: (licensePlate: string) => Promise<Car | undefined>;
  findById: (id: string) => Promise<Car | undefined>;
  listByAvailability: (data: IListAvailableCarDTO) => Promise<Car[]>;
  createCarSpecification: (data: ICreateCarSpecificationDTO) => Promise<void>;
}
