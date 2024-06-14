import User from "../../entities/User";

interface IUsersData {
  listUsers(): Promise<User[]>;

  findUserById(id: number): Promise<User | null>;

  insertUser(user: User): Promise<User>;

  updateUser(id: number, newUser: User): Promise<void | null>;

  removeUser(id: number): Promise<void | null>;
}

export default IUsersData;
