import { NextFunction, Request, Response } from "express";
import AppError from "../../errors/appError";

export function adminGuard(req: Request, res: Response, next: NextFunction) {
  if (!req.user.isAdmin) {
    throw new AppError("User does not have permission", 403);
  }

  next();
}
