import { Request, Response, NextFunction } from "express";

import { AppError } from "../errors/AppError";

function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  console.error(err);

  return res.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`,
  });
}

export { errorHandler };