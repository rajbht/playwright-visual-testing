import { expect, Locator, Page } from '@playwright/test';

export class RecordBookGoalsPage {
  readonly page: Page;
  readonly arReaderLink: Locator;
  readonly recordBookLink: Locator;
  readonly appClassPicker: Locator;

  constructor(page: Page) {
    this.page = page;
    this.arReaderLink = page.locator('[data-component="Accelerated Reader"]');
    this.recordBookLink = page.locator('a', { hasText: " Record Book & Goals " }); //[data-component="Record Book & Goals"]
    this.appClassPicker = page.locator('app-class-picker')
  }

  async navigateToRecordBookAndGoals() {
    await this.arReaderLink.click();
    await this.recordBookLink.click();
    await expect(this.appClassPicker).toBeVisible();
  }

}