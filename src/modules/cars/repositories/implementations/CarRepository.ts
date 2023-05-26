import { injectable } from "inversify";
import { ICreateCarDTO } from "../../../../shared/DTOs/ICreateCarDTO";
import Car from "../../model/Car";
import { ICarRepository } from "../ICarRepository";
import { Knex } from "knex";
import { db } from "../../../../db";

@injectable()
export default class CarRepository implements ICarRepository {
  private repository: Knex.QueryBuilder<Car>;

  constructor() {
    this.repository = db("cars");
  }

  async create(data: ICreateCarDTO): Promise<Car> {
    const car = new Car(data);
    const [newCar] = await this.repository.insert(car, "*");
    return newCar;
  }

  async list(): Promise<Car[]> {
    const cars = this.repository.select();
    return cars;
  }

  async findByPlate(licensePlate: string): Promise<Car | undefined> {
    const car = await this.repository
      .select("*")
      .where("license_plate", "=", licensePlate)
      .first();

    return car;
  }
}
