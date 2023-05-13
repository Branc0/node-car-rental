import { Request, Response } from "express";
import CreateUserService from "./createUser.service";
import container from "../../../../shared/container/inversify.config";

export default class CreateUserController {
  async handle(req: Request, res: Response): Promise<void> {
    const createUserService = container.resolve(CreateUserService);
    const newUser = await createUserService.execute(req.body);
    res.status(201).send(newUser);
  }
}
