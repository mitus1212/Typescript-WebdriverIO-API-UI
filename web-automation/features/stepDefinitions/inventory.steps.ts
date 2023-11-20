import { When } from '@wdio/cucumber-framework';
import InventoryPage from '../pageObjects/inventory.page';
import {globalData} from "../../test/utils/utils";

When(/^User adds all items to the cart$/, async () => {
  await InventoryPage.addToCartBackpackButton.click()
  await InventoryPage.addToCartBlackTshirtButton.click()
  await InventoryPage.addToCartJacketButton.click()
  await InventoryPage.addToCartLightButton.click()
  await InventoryPage.addToCartOnesieButton.click()
  await InventoryPage.addToCartRedTshirtButton.click()
});

When(/^User adds `([^"]*)` item to the cart$/, async (itemName) => {
  globalData.itemName = itemName
  await InventoryPage.addItemByNameToCartButton.click()
});

When(/^User navigates to the cart$/, async () => {
  await InventoryPage.shoppingCartButton.click()
});

When(/^User adds item to the cart$/, async () => {
  await InventoryPage.addToCartButton.click()
});

When(/^User choose the sorting option Z to A$/, async () => {
  await InventoryPage.sortingDropdown.click()
  const dropdownValue = await InventoryPage.dropdownValue;
  await dropdownValue.waitForExist({ timeout: 10000 });
  await InventoryPage.dropdownValue.click()
});

When(/^User sees a shoping cart icon$/, async () => {
  const allProducts = await InventoryPage.addToCartButton;
  await allProducts.waitForExist({ timeout: 5000 });
  expect(allProducts.isExisting()).toEqual(true);
});
