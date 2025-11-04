const { expect } = require('@playwright/test');

export class HomePage {
  constructor(page) {
    this.page = page;
    this.flightsTab = page.getByText('Flights').first();
  }

  async assertFlightsTabIsVisible() {
    await expect(this.flightsTab).toBeVisible();
  }

  async assertUrl() {
    await expect(this.page).toHaveURL('https://cargobooking.awery.com/apps/beta/');
  }
}


