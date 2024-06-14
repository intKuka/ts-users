import User from "../../entities/User";
import IUsersData from "../../utils/interfaces/IUsersData";
import PostgresDataSource from "../data-source";

const repository = PostgresDataSource.getRepository(User);

class UsersData implements IUsersData {
  async listUsers() {
    const users = await repository.find();
    return users;
  }

  async findUserById(id: number) {
    const user = await repository.findOneBy({ id: id });
    return user;
  }

  async insertUser(user: User) {
    const createdUser = await repository.save(user);
    return createdUser;
  }

  async updateUser(id: number, newUser: User) {
    const isExists = await repository.existsBy({ id: id });
    if (!isExists) {
      return null;
    }
    await repository.update(id, newUser);
  }

  async removeUser(id: number) {
    const isExists = await repository.existsBy({ id: id });
    if (!isExists) {
      return null;
    }

    await repository.delete(id);
  }
}

export default UsersData;
