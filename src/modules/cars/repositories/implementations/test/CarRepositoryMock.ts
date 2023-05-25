import { ICreateCarDTO } from "../../../../../shared/DTOs/ICreateCarDTO";
import Car from "../../../model/Car";
import { ICarRepository } from "../../ICarRepository";

export default class CarRepositoryMock implements ICarRepository {
  private repository: Car[] = [];

  create(data: ICreateCarDTO): Promise<Car> {
    const newCar = new Car(data);
    this.repository.push(newCar);
    return new Promise((resolve) => {
      resolve(newCar);
    });
  }
  list(): Promise<Car[]> {
    return new Promise((resolve) => {
      resolve([...this.repository]);
    });
  }
}
