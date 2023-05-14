import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import UserRepository from "../repositories/implementations/UserRepository";

const TOKEN_SECRET = process.env.TOKEN_SECRET as string;

interface IDecodedToken {
  sub: string;
}

export async function authGuard(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authString = req.headers.authorization;

  if (!authString) {
    res.status(401).send();
  }

  const [, token] = authString!.split(" ");

  if (!token) {
    res.status(401).send();
  }

  try {
    const { sub } = verify(token, TOKEN_SECRET) as IDecodedToken;
    const user = await new UserRepository().findById(sub);
    if (!user) {
      throw Error("User does not exist");
    }
    next();
  } catch {
    res.status(401).send();
  }
}
