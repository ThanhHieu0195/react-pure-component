import { IEmployee } from "./../models/interfaces";
import faker from "@faker-js/faker";

const MAX_ITEM: number = 97;
class Api {
  async getEmployees(): Promise<IEmployee[]> {
    let data: IEmployee[] = [];
    for (let i = 1; i < MAX_ITEM; i++) {
      data.push({
        id: i,
        name: faker.name.firstName(),
        email: faker.internet.email(),
        position: faker.name.title(),
      });
    }
    return data;
  }
}

export default new Api();
