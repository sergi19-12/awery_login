import { test } from '@playwright/test';
import { LogInPage } from '../../src/pages/LogInPage';
import { HomePage } from '../../src/pages/HomePage';

test('Successful `Log in` flow test with username and password', async ({ page }) => {
  const loginPage = new LogInPage(page);
  const homePage = new HomePage(page);
  const username = process.env.AWERY_USERNAME;
  const password = process.env.AWERY_PASSWORD;

  await loginPage.openLoginPage();
  await loginPage.assertWelcomeMessageIsVisible();
  await loginPage.assertForgotPasswordLinkIsVisible();
  await loginPage.assertContactSupportLinkIsVisible();
  await loginPage.assertGoogleLoginButtonIsVisible();
  await loginPage.assertMicrosoftLoginButtonIsVisible();
  await loginPage.fillUsernameField(username);
  await loginPage.fillPasswordField(password);
  await loginPage.clickLogInButton();
  await homePage.assertFlightsTabIsVisible();
  await homePage.assertUrl();
});
