import request from "supertest";
import chai from "chai";
import jsonSchema from "chai-json-schema";
import dotenv from "dotenv";
import { sleep } from "../utils/sleep";
import { createUserResponseSchema } from "../testData/jsonSchema/createUserSchema";
chai.use(jsonSchema);
dotenv.config();
const app = `${process.env.BASE_API_URL}`;

export const getUsers = async () => {
  const getUsers = await request(app).get("/api/users?page=2").set({
    "User-Agent": "AutomationTests",
    "Content-Type": "application/json",
  });

  return getUsers;
};

export const createUser = async (body: string) => {
  const createUser = await request(app)
    .post(`/api/users`)
    .set({
      "User-Agent": "AutomationTests",
      "Content-Type": "application/json",
    })
    .send(body);

  chai.expect(createUser.body).to.be.jsonSchema(createUserResponseSchema);

  return createUser;
};

export const updateUser = async (body: string, id: string) => {
  const updateUser = await request(app)
    .put(`/api/users/${id}`)
    .set({
      "User-Agent": "AutomationTests",
      "Content-Type": "application/json",
    })
    .send(body);

  return updateUser;
};

export const getUsersWithDelay = async (delay) => {
  await sleep(delay * 1000);

  const getUsers = await request(app).get("/api/users?page=2").set({
    "User-Agent": "AutomationTests",
    "Content-Type": "application/json",
  });

  return getUsers;
};
