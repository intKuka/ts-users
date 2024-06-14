import { Router, Request, Response, NextFunction } from "express";
import { default as users } from "../../services/usersService";

const usersController = Router();

usersController.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    users
      .getAll()
      .then((result): void => {
        res.status(200).json(result);
      })
      .catch(next);
  }
);

usersController.post(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;

    users
      .createOne(body)
      .then((result): void => {
        res.status(201).json(result);
      })
      .catch(next);
  }
);

usersController.get(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.id);
    if (Number.isNaN(id)) {
      return next("router");
    }

    users
      .getOneById(id)
      .then((result): void => {
        res.status(200).json(result);
      })
      .catch(next);
  }
);

usersController.patch(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    const id = parseInt(req.params.id);
    if (Number.isNaN(id)) {
      return next("router");
    }

    users
      .updateOneById(id, body)
      .then((result): void => {
        res.status(200).json(result);
      })
      .catch(next);
  }
);

usersController.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.id);
    if (Number.isNaN(id)) {
      return next("router");
    }

    users
      .deleteOneById(id)
      .then((): void => {
        res.status(200).json();
      })
      .catch(next);
  }
);
export default usersController;
