import { ChainablePromiseElement } from "webdriverio";
import { globalData } from "../../test/utils/utils";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ShoppingCartPage {
  /**
   * define selectors using getter methods
   */
  public get thirdItemName(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $('(//div[@class="inventory_item_name"])[3]');
  }

  public get removeThirdItemButton(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $('(//button[contains(@data-test, "remove-sauce-labs")])[3]');
  }

  public get checkoutButton(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("#checkout");
  }

  public get firstItemName(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $('(//div[@class="inventory_item_name"])[1]');
  }

  public get cartItems(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $$('//div[@class="cart_item_label"]');
  }

  public get cartItem(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(
      `//div[@class="inventory_item_name" and contains(text(), "${globalData.itemName}")]`
    );
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */

  /**
   * overwrite specific options to adapt it to page object
   */
}

export default new ShoppingCartPage();
