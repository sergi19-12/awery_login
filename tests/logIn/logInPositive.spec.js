import { test } from '@playwright/test';
import { LogInPage } from '../../src/pages/LogInPage';
import { HomePage } from '../../src/pages/HomePage';
import dotenv from 'dotenv';

dotenv.config();

test('Successful `Log in` flow test', async ({ page }) => {
  const loginPage = new LogInPage(page);
  const homePage = new HomePage(page);
  const username = process.env.AWERY_USERNAME;
  const password = process.env.AWERY_PASSWORD;

  await loginPage.openLoginPage();
  await loginPage.fillUsernameField(username);
  await loginPage.fillPasswordField(password);
  await loginPage.clickLogInButton();
  await homePage.assertFlightsTabIsVisible();
  await homePage.assertUrl();
});
