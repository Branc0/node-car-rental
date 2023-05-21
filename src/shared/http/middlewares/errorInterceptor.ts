import { NextFunction, Request, Response } from "express";
import AppError from "../../errors/appError";

function errorInterceptor(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  } else {
    return res.status(500).json({
      status: "error",
      message: `internal server error - ${err.message}`,
    });
  }
}

export default errorInterceptor;
