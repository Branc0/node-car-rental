import { injectable } from "inversify";
import { ICreateCarDTO } from "../../../../shared/DTOs/ICreateCarDTO";
import Car from "../../model/Car";
import { ICarRepository } from "../ICarRepository";
import { Knex } from "knex";
import { db } from "../../../../db";
import { IListAvailableCarDTO } from "../../../../shared/DTOs/IListAvailableCarDTO";

@injectable()
export default class CarRepository implements ICarRepository {
  private repository: Knex.QueryBuilder<Car>;

  constructor() {
    this.repository = db("cars");
  }

  async create(data: ICreateCarDTO): Promise<Car> {
    const car = new Car(data);
    const [newCar] = await this.repository.clone().insert(car, "*");
    return newCar;
  }

  async list(): Promise<Car[]> {
    const cars = this.repository.clone().select();
    return cars;
  }

  async findByPlate(licensePlate: string): Promise<Car | undefined> {
    const car = await this.repository
      .clone()
      .select("*")
      .where("license_plate", "=", licensePlate)
      .first();

    return car;
  }

  async listByAvailability({
    name,
    brand,
    category,
  }: IListAvailableCarDTO): Promise<Car[]> {
    const query = this.repository.clone().select().where("availability", true);

    if (brand) {
      query.andWhereLike("brand", `%${brand}%`);
    }

    if (category) {
      query.andWhere("category_id", category);
    }

    if (name) {
      query.andWhereLike("name", `%${name}%`);
    }

    const car = await query;

    return car;
  }
}
