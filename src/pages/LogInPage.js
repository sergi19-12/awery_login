const { expect } = require('@playwright/test');

export class LogInPage {
  constructor(page) {
      this.page = page; 
      this.usernameField = page.getByRole('textbox', { name: 'User Name *' });
      this.passwordField = page.getByRole('textbox', { name: 'Password *' });
      this.LogInButton = page.locator('awr-button').filter({ hasText: 'Log In' });
      this.welcomeMessage = page.getByText('Welcome to Awery Log in to');
      this.forgotPasswordLink = page.getByText('Forgot password?');
      this.contactSupportLink = page.locator('awr-button').filter({ hasText: 'Contact Support' });
      this.googleLoginButton = page.locator('awr-button').nth(1);
      this.microsoftLoginButton = page.locator('awr-button').nth(2);
  }

  async openLoginPage() {
    await this.page.goto(`${process.env.BASE_URL}/login`);
}

  async fillUsernameField(username) {
    await this.usernameField.fill(username);
  }

  async fillPasswordField(password) {
    await this.passwordField.fill(password);
  }

  async clickLogInButton() {
    await this.LogInButton.click();
  }

  async assertWelcomeMessageIsVisible() {
    await expect(this.welcomeMessage).toBeVisible();
  }

  async assertForgotPasswordLinkIsVisible() {
    await expect(this.forgotPasswordLink).toBeVisible();
  }

  async assertContactSupportLinkIsVisible() {
    await expect(this.contactSupportLink).toBeVisible();
  }

  async assertGoogleLoginButtonIsVisible() {
    await expect(this.googleLoginButton).toBeVisible();
  }

  async assertMicrosoftLoginButtonIsVisible() {
    await expect(this.microsoftLoginButton).toBeVisible();
  }
}