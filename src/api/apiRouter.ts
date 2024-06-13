import { json, urlencoded, Router } from "express";
import usersRouter from "./routes/users/usersRouter";

const apiRouter: Router = Router();

apiRouter.use(json());
apiRouter.use(urlencoded({ extended: false }));

apiRouter.use("/users", usersRouter);

export default apiRouter;
