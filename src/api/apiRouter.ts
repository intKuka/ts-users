import { json, urlencoded, Router } from "express";
import usersController from "./controllers/usersController";

const apiRouter: Router = Router();

apiRouter.use(json());
apiRouter.use(urlencoded({ extended: false }));

apiRouter.use("/users", usersController);

export default apiRouter;
