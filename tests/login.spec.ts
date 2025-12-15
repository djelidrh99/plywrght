import { test, expect } from '@playwright/test';
import LoginPage  from '../pages/LoginPage';

let loginPage : LoginPage

test.describe('Login Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goTo();
  });

  test("invalid login", async ({ page }) => {
    await loginPage.login("invalidUser", "invalidPass");
    await loginPage.expectErrorMessage("Your username is invalid!");
  })
})
