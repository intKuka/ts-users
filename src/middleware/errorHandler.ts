import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import CustomHttpError from "../utils/CustomHttpError";

const errorHandler: ErrorRequestHandler = (
  error: CustomHttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof CustomHttpError) {
    res.status(error.statusCode).json(error.serialize());
  } else {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export default errorHandler;
