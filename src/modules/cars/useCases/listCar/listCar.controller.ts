import { Request, Response } from "express";
import container from "../../../../shared/container/inversify.config";
import ListCarService from "./listCar.service";

export default class ListCarController {
  async handle(req: Request, res: Response) {
    const service = container.resolve(ListCarService);
    const cars = await service.execute(req.query);
    res.status(200).send(cars);
  }
}
