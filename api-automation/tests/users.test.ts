import chai from "chai";
import jsonSchema from "chai-json-schema";
import { userRequestData } from "../testData/requestBody/user";
import {
  getUsers,
  createUser,
  updateUser,
  getUsersWithDelay,
} from "../services/usersRequests";
chai.use(jsonSchema);

let userId = "";
function isOdd(number: number): boolean {
  return number % 2 !== 0;
}

it("[Users][GET] 200 response and odd numbers", async () => {
  const usersList = await getUsers();

  expect(usersList.statusCode).toBe(200);
  for (let i = 1; i < 6; i++) {
    if (isOdd(usersList.body.data[i].id)) {
      console.log(usersList.body.data[i]);
    } else {
      true;
    }
  }
});

it("[Users][POST] 200 response when create user", async () => {
  const createUserJson = JSON.stringify(userRequestData);
  const newUser = await createUser(createUserJson);
  expect(newUser.statusCode).toBe(201);
  const myDate: Date = new Date();
  expect(newUser.body.createdAt.slice(0, 10)).toEqual(
    myDate.toJSON().slice(0, 10)
  );
  userId = newUser.body.id;
});

it("[Users][PUT] 200 response when update user", async () => {
  const updateUserJson = JSON.stringify(userRequestData);
  const updatedUser = await updateUser(updateUserJson, userId);
  expect(updatedUser.statusCode).toBe(200);
  expect(userRequestData.name).toEqual(updatedUser.body.name);
  expect(userRequestData.job).toEqual(updatedUser.body.job);
});

it("[Users][GET] 200 response with delay", async () => {
  const delayValues = [0, 3];
  for (const delay of delayValues) {
    const start = new Date().getTime();
    const usersList = await getUsersWithDelay(delay);
    const end = new Date().getTime();
    const responseTime = end - start;
    expect(responseTime).toBeLessThanOrEqual(1000);
    expect(usersList.statusCode).toBe(200);
  }
});
