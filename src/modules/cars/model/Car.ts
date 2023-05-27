import { UUID, randomUUID } from "crypto";
import { ICreateCarDTO } from "../../../shared/DTOs/ICreateCarDTO";

export default class Car {
  id: string;
  name: string;
  description: string;
  license_plate: string;
  daily_rate: number;
  fine_amount: number;
  brand: string;
  category_id: string;
  availability: boolean;
  created_at?: string;

  constructor({
    name,
    description,
    license_plate,
    daily_rate,
    fine_amount,
    brand,
    category_id,
  }: ICreateCarDTO) {
    this.id = randomUUID();
    this.availability = true;
    this.name = name;
    this.description = description;
    this.license_plate = license_plate;
    this.daily_rate = daily_rate;
    this.fine_amount = fine_amount;
    this.brand = brand;
    this.category_id = category_id;
  }
}
