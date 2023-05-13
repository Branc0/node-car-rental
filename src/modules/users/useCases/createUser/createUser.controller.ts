import { Request, Response } from "express";
import CreateUserService from "./createUser.service";

export default class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  handle(req: Request, res: Response) {
    const newUser = this.createUserService.execute(req.body);
    res.status(201).send(newUser);
  }
}
