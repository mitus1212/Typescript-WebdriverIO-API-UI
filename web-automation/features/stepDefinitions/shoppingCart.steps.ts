import { When } from "@wdio/cucumber-framework";
import ShoppingCartPage from "../pageObjects/shoppingCart.page";
import { globalData, productList } from "../../test/utils/utils";

let thirdItemName = "";

When(/^Find third item by name, then remove it from the cart$/, async () => {
  thirdItemName = await ShoppingCartPage.thirdItemName.getText();
  const index = productList.indexOf(thirdItemName);
  if (index !== -1) {
    productList.splice(index, 1);
  }
  await ShoppingCartPage.removeThirdItemButton.click();
});

When(/^Shopping cart has been updated$/, async () => {
  expect(await ShoppingCartPage.thirdItemName).toBeUndefined;
  for (let name of productList) {
    globalData.itemName = name;
    const cartItem = await ShoppingCartPage.cartItem;
    await cartItem.waitForExist({ timeout: 5000 });
    expect(await ShoppingCartPage.cartItem.isExisting()).toEqual(true);
  }
  expect(await ShoppingCartPage.cartItems.length).toEqual(5);
});

When(/^User clicks the Checkout button$/, async () => {
  await ShoppingCartPage.checkoutButton.click();
});

When(/^Validate that item was added$/, async () => {
  expect(ShoppingCartPage.firstItemName).toHaveText(globalData.itemName);
});
