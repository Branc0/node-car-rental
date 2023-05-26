import { Request, Response } from "express";
import container from "../../../../shared/container/inversify.config";
import CreateCarService from "./createCar.service";

export default class CreateCarController {
  carService: CreateCarService;
  constructor() {
    this.carService = container.resolve(CreateCarService);
  }

  handle(req: Request, res: Response) {
    req.body;
    this.carService.execute(req.body);
  }
}
