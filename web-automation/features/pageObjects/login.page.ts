import { ChainablePromiseElement } from "webdriverio";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
  /**
   * define selectors using getter methods
   */

  public get inputUsername(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("#user-name");
  }

  public get inputPassword(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("#password");
  }

  public get submitButton(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("#login-button");
  }

  public get loginError(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $('//h3[@data-test="error"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  public async login(username: string, password: string): Promise<void> {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.submitButton.click();
  }

  public async provideLogin(username: string): Promise<void> {
    await this.inputUsername.setValue(username);
  }
  /**
   * overwrite specific options to adapt it to page object
   */
}

export default new LoginPage();
