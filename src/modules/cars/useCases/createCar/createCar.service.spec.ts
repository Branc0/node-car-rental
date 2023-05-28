import { ICreateCarDTO } from "../../DTOs/ICreateCarDTO";
import AppError from "../../../../shared/errors/appError";
import Car from "../../model/Car";
import { ICarRepository } from "../../repositories/ICarRepository";
import CarRepositoryMock from "../../repositories/implementations/test/CarRepositoryMock";
import CreateCarService from "./createCar.service";

describe(CreateCarService.name, () => {
  let carRepository: ICarRepository;
  let createCarService: CreateCarService;

  beforeEach(() => {
    carRepository = new CarRepositoryMock();
    createCarService = new CreateCarService(carRepository);
  });
  it("should create a new car", async () => {
    const carInput: ICreateCarDTO = {
      brand: "Ford",
      daily_rate: 82,
      description: "a perfect car for a night of luxury",
      fine_amount: 1000,
      license_plate: "FBF-2499",
      name: "Ford Mustang GT",
      category_id: "1",
    };
    const res = await createCarService.execute(carInput);
    expect(res.id).toBeTruthy();
    expect(res).toBeInstanceOf(Car);
  });
  it("should not create a new Car when license plate already exists", async () => {
    const carInput: ICreateCarDTO = {
      brand: "Ford",
      daily_rate: 82,
      description: "a perfect car for a night of luxury",
      fine_amount: 1000,
      license_plate: "FBF-2499",
      name: "Ford Mustang GT",
      category_id: "1",
    };
    await createCarService.execute(carInput);
    expect(
      async () => await createCarService.execute(carInput)
    ).rejects.toBeInstanceOf(AppError);
  });
});
