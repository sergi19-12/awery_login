import { test } from '@playwright/test';
import { LogInPage } from '../../src/pages/LogInPage';

test('LogIn with empty username', async ({ page }) => {
  const loginPage = new LogInPage(page);
  const username = '';
  const password = 'serhiiO1234!';

  await loginPage.openLoginPage();
  await loginPage.fillUsernameField(username); 
  await loginPage.fillPasswordField(password);
  await loginPage.clickLogInButton();
});
