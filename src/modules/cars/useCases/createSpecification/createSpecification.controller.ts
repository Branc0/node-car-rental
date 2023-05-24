import { Request, Response } from "express";
import CreateSpecificationService from "./createSpecification.service";
import container from "../../../../shared/container/inversify.config";

export default class CreateSpecificationController {
  async handle(req: Request, res: Response) {
    const createSpecificationService = container.resolve(
      CreateSpecificationService
    );
    const newSpecification = await createSpecificationService.execute(req.body);
    res.status(201).send(newSpecification);
  }
}
