import { Request, Response } from "express";
import container from "../../../../shared/container/inversify.config";
import CreateCarSpecificationService from "./createCarSpecification.service";

export default class CreateCarSpecificationController {
  async handle(req: Request, res: Response) {
    const car_id = req.params.id;
    const specification_id = req.body.specification;
    const service = container.resolve(CreateCarSpecificationService);
    await service.execute({ car_id, specification_id });
    res.status(201).send();
  }
}
