import UsersData from "../db/postgres/users-data";
import User from "../entities/User";
import { validate } from "class-validator";
import BodyValidationError from "../errors/BodyValidationError";
import NotFoundError from "../errors/NotFoundError";

const usersData = new UsersData();

async function getAll() {
  const data = await usersData.listUsers();
  return data;
}

async function createOne(body: User) {
  const user = new User();
  user.name = body.name;
  user.age = body.age;

  const validationOptions = {
    stopAtFirstError: true,
  };
  const errors = await validate(user, validationOptions);
  if (errors.length > 0) {
    throw new BodyValidationError(errors);
  }

  const data = await usersData.insertUser(user);
  return data;
}

async function getOneById(id: number) {
  const data = await usersData.findUserById(id);
  if (!data) {
    throw new NotFoundError("User not found");
  }

  return data;
}

async function updateOneById(id: number, body: User) {
  const user = new User();
  user.name = body.name;
  user.age = body.age;

  const validationOptions = {
    stopAtFirstError: true,
    skipMissingProperties: true,
  };
  const errors = await validate(user, validationOptions);
  if (errors.length > 0) {
    throw new BodyValidationError(errors);
  }

  const data = await usersData.updateUser(id, user);
  if (data === null) {
    throw new NotFoundError("User not found");
  }

  return data;
}

async function deleteOneById(id: number) {
  const data = await usersData.removeUser(id);
  if (data === null) {
    throw new NotFoundError("User not found");
  }
}

export default {
  getAll,
  createOne,
  getOneById,
  updateOneById,
  deleteOneById,
};
