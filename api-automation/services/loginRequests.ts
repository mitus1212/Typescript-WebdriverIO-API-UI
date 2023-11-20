import request from "supertest";
import chai from "chai";
import jsonSchema from "chai-json-schema";
chai.use(jsonSchema);
import dotenv from "dotenv";

dotenv.config();
const app = `${process.env.BASE_API_URL}`;

export const loginUser = async (body: string) => {
  const loginUser = await request(app)
    .post(`/api/login`)
    .set({
      "User-Agent": "AutomationTests",
      "Content-Type": "application/json",
    })
    .send(body);

  return loginUser;
};
