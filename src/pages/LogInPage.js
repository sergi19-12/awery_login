const { expect } = require('@playwright/test');

export class LogInPage {
  constructor(page) {
      this.page = page; 
      this.usernameField = page.getByRole('textbox', { name: 'User Name *' });
      this.passwordField = page.getByRole('textbox', { name: 'Password *' });
      this.LogInButton = page.locator('awr-button').filter({ hasText: 'Log In' });
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
}