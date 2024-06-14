import { Router } from "express";
import usersController from "./controllers/usersController";

const apiRouter: Router = Router();

apiRouter.use("/users", usersController);

export default apiRouter;
