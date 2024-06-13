import User from "../../entities/User";

interface IUsersData {
  listUsers(): Promise<User[]>;

  findUserById(id: number): Promise<User | null>;

  createUser(user: User): Promise<User>;

  updateUser(id: number, newUser: User): Promise<void>;

  removeUser(id: number): Promise<void>;
}

export default IUsersData;
