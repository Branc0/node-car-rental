import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import UserRepository from "../repositories/implementations/UserRepository";
import AppError from "../errors/appError";

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
    throw new AppError("You must login", 401);
  }

  const [, token] = authString!.split(" ");

  if (!token) {
    throw new AppError("You must login", 401);
  }

  try {
    const { sub } = verify(token, TOKEN_SECRET) as IDecodedToken;
    const user = await new UserRepository().findById(sub);
    if (!user) {
      throw new AppError("User does not exist", 400);
    }
  } catch (err) {
    throw new AppError("invalid token", 400);
  }
  next();
}
