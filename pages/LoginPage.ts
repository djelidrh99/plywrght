import { expect, type Locator, type Page } from '@playwright/test';

export default class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.errorMessage = page.locator("#flash");
  }

  async goTo() {
    await this.page.goto("https://the-internet.herokuapp.com/login");
  }

    async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    }

    async expectErrorMessage(message: string) {
    await expect(this.errorMessage).toContainText(message);
    }

}