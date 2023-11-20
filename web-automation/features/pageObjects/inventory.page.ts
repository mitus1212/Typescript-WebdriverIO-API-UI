import { ChainablePromiseElement } from "webdriverio";
import { globalData } from "../../test/utils/utils";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InventoryPage {
  /**
   * define selectors using getter methods
   */

  public get addToCartBackpackButton(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("#add-to-cart-sauce-labs-backpack");
  }

  public get addToCartLightButton(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("#add-to-cart-sauce-labs-bike-light");
  }
  public get addToCartBlackTshirtButton(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("#add-to-cart-sauce-labs-bolt-t-shirt");
  }

  public get addToCartJacketButton(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("#add-to-cart-sauce-labs-fleece-jacket");
  }
  public get addToCartOnesieButton(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("#add-to-cart-sauce-labs-onesie");
  }
  public get addToCartRedTshirtButton(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $(
      '//button[@data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]'
    );
  }

  public get shoppingCartButton(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $('//a[@class="shopping_cart_link"]');
  }

  public get sortingDropdown(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $('//select[@data-test="product_sort_container"]');
  }

  public get dropdownValue(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $('//option[text()="Name (Z to A)"]');
  }

  public get addItemByNameToCartButton(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $(
      `//div[@class="inventory_item_name " and contains(text(), "${globalData.itemName}")]`
    );
  }

  public get addToCartButton(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $('//button[contains(@data-test, "add-to-cart")]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */

  /**
   * overwrite specific options to adapt it to page object
   */
}

export default new InventoryPage();
