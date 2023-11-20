import { Given } from "@wdio/cucumber-framework";

require("dotenv").config();

Given(/^User is on the login page$/, async () => {
  await browser.url(process.env.BASE_URL);
});
