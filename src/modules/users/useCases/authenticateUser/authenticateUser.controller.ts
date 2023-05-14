import { Request, Response } from "express";
import container from "../../../../shared/container/inversify.config";
import AuthenticateUserService from "./authenticateUser.service";

export default class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const authenticateUserService = container.resolve(AuthenticateUserService);

    const token = await authenticateUserService.execute(req.body);
    res.status(200).send(token);
  }
}
