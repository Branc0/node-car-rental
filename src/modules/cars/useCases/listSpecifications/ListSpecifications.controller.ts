import { Request, Response } from "express";
import container from "../../../../shared/container/inversify.config";
import ListSpecificationsService from "./ListSpecifications.service";

export default class ListSpecificationsController {
  async handle(req: Request, res: Response) {
    const service = container.resolve(ListSpecificationsService);
    const specifications = await service.execute();
    res.status(200).send(specifications);
  }
}
