import chai from "chai";
import jsonSchema from "chai-json-schema";
import dotenv from "dotenv";
import { credentialsRequestData } from "../testData/requestBody/credentials";
import { loginUser } from "../services/loginRequests";
chai.use(jsonSchema);
dotenv.config();

it("[Login][POST] 400 error when login without password", async () => {
  const loginUserJson = JSON.stringify(credentialsRequestData);
  const failedLogin = await loginUser(loginUserJson);
  expect(failedLogin.statusCode).toBe(400);

  expect(failedLogin.body.error).toBe("Missing password");
  expect(failedLogin.body.token).toBeUndefined;
});
