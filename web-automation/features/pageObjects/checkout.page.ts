import { ChainablePromiseElement } from "webdriverio";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutPage {
  /**
   * define selectors using getter methods
   */
  public get firstNameInput(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("#first-name");
  }

  public get lastNameInput(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("#last-name");
  }

  public get postalCodeInput(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("#postal-code");
  }

  public get continueButton(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("#continue");
  }

  public get finishButton(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("#finish");
  }

  public get checkoutCompleteTitle(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $('//span[text()="Checkout: Complete!"]');
  }

  public get thankYouForOrderHeader(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $('//h2[text()="Thank you for your order!"]');
  }

  public get oderDispatchedText(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $(
      '//div[text()="Your order has been dispatched, and will arrive just as fast as the pony can get there!"]'
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

export default new CheckoutPage();
