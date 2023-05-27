import { ICreateCarDTO } from "../../../../../shared/DTOs/ICreateCarDTO";
import { IListAvailableCarDTO } from "../../../../../shared/DTOs/IListAvailableCarDTO";
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

  findByPlate(licensePlate: string): Promise<Car | undefined> {
    const car = this.repository.find(
      (car) => car.license_plate === licensePlate
    );
    return new Promise((resolve) => resolve(car));
  }

  listByAvailability(data: IListAvailableCarDTO): Promise<Car[]> {
    const cars = this.repository.filter((car) => car.availability === true);
    return new Promise((resolve) => resolve(cars));
  }
}
