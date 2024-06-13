import { Router, Request, Response, NextFunction } from "express";
import { default as users } from "../../services/users/users";

const usersController = Router();

usersController.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    const usersData = "hellow"; // FIXME: remove this line
    users
      .getAllUsers(req, res)
      .then((result): void => {
        res.status(200).json(result);
      })
      .catch(next);
  }
);

export default usersController;
