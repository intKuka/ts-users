import { id } from "cls-rtracer";
import { Request, Response, NextFunction } from "express";

const logRequest = (req: Request, res: Response, next: NextFunction) => {
  const options = { hour12: false };
  const time = new Date().toLocaleTimeString([], options);
  const requestId = id();

  const log = `${time} -- ${req.method} ${req.protocol}://${req.get("host")}${
    req.originalUrl
  }
  request-id: ${requestId}
  body: ${JSON.stringify(req.body) || "{}"}`;

  console.log(log);
  next();
};

export default logRequest;
