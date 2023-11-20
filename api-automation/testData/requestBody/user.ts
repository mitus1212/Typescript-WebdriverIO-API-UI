import { faker } from "@faker-js/faker";

class CreateUserRequestData {
  name: string = faker.name.firstName();
  job: string = faker.commerce.department();
}

export const userRequestData = new CreateUserRequestData();
