import { When, Then } from '@wdio/cucumber-framework';
import { faker } from "@faker-js/faker";
import CheckoutPage from '../pageObjects/checkout.page';

When(/^User checks out with valid data provided$/, async () => {
  await CheckoutPage.firstNameInput.setValue(faker.name.firstName())
  await CheckoutPage.lastNameInput.setValue(faker.name.lastName())
  await CheckoutPage.postalCodeInput.setValue(faker.address.zipCode())
  await CheckoutPage.continueButton.click()
});


When(/^User finished the purchase$/, async () => {
  await CheckoutPage.finishButton.click()
});

Then(/^Dispatched order screen is visible$/, async () => {
  const checkoutCompleteTitle = await CheckoutPage.checkoutCompleteTitle;
  await checkoutCompleteTitle.waitForExist({ timeout: 20000 });
  expect(await checkoutCompleteTitle.isExisting()).toEqual(true);
  const thankYouForOrderHeader = await CheckoutPage.thankYouForOrderHeader;
  await thankYouForOrderHeader.waitForExist({ timeout: 20000 });
  expect(await thankYouForOrderHeader.isExisting()).toEqual(true);
  const oderDispatchedText = await CheckoutPage.oderDispatchedText;
  await oderDispatchedText.waitForExist({ timeout: 20000 });
  expect(await oderDispatchedText.isExisting()).toEqual(true);
});

