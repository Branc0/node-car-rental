import { randomUUID } from "node:crypto";
import { ICreateUserDTO } from "../../../shared/DTOs/ICreateUserDTO";

export default class User {
  id: string;
  name: string;
  password: string;
  email: string;
  driver_license: string;
  admin?: string;
  avatar?: string;
  created_at?: string;

  constructor({ name, password, driver_license, email }: ICreateUserDTO) {
    this.id = randomUUID();
    this.name = name;
    this.password = password;
    this.email = email;
    this.driver_license = driver_license;
  }
}
