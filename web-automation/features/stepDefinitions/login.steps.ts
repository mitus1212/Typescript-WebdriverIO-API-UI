import { Given } from "@wdio/cucumber-framework";
import LoginPage from "../pageObjects/login.page";
require("dotenv").config();

Given(/^Log in as a `([^"]*)`$/, async (user) => {
  switch (user) {
    case "standard user":
      user = `${process.env.STANDARD_USER}`;
      break;
    case "problem_user":
      user = `${process.env.PROBLEM_USER}`;
      break;
    case "locked_out_use":
      user = `${process.env.LOCKED_OUT_USER}`;
      break;
  }
  await LoginPage.login(user, process.env.PASSWORD);
});
