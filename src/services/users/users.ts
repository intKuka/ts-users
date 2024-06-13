import { Request, Response } from "express";
import UsersData from "../../db/postgres/users-data";

const usersData = new UsersData();

async function getAllUsers(req: Request, res: Response) {
  const data = await usersData.listUsers();
  return data;
}

export default { getAllUsers };
