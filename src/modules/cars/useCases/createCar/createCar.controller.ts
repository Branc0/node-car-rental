import { Request, Response } from "express";
import container from "../../../../shared/container/inversify.config";
import CreateCarService from "./createCar.service";

export default class CreateCarController {
  async handle(req: Request, res: Response) {
    const createCarService = container.resolve(CreateCarService);
    const car = await createCarService.execute(req.body);
    res.status(201).send(car);
  }
}
