import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import express, { Express } from "express";
import apiRouter from "./api/apiRouter";
import { expressMiddleware } from "cls-rtracer";
import errorHandler from "./middleware/errorHandler";
import NotFoundError from "./errors/NotFoundError";
import logRequest from "./middleware/logRequest";

const app: Express = express();
const port: string | number = process.env.PORT || 3000;

app.use(expressMiddleware());

app.use(logRequest);

app.use("/api", apiRouter);

app.all("*", () => {
  throw new NotFoundError("Resourse not found");
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
