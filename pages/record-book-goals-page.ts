import { expect, Locator, Page } from '@playwright/test';

export class RecordBookGoalsPage {
  readonly page: Page;
  readonly arReaderLink: Locator;
  readonly recordBookUSLink: Locator;
  readonly recordBookUKLink: Locator;
  readonly appClassPicker: Locator;
  readonly classDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.arReaderLink = page.locator('[data-component="Accelerated Reader"]');
    this.recordBookUSLink = page.locator('a', { hasText: " Record Book & Goals " }); //[data-component="Record Book & Goals"]
    this.recordBookUKLink = page.locator('a', { hasText: " Record Book & Targets " }); //[data-component="Record Book & Targets"]
    this.appClassPicker = page.locator('app-class-picker');
    this.classDropdown = page.locator('.mat-select-arrow');
  }

  async navigateToRecordBookAndGoals(region: string) {
    await this.arReaderLink.click();
    if (region === "US") {
      await this.recordBookUSLink.click();
    }
    else {
      await this.recordBookUKLink.click();
    }
    
    await expect(this.appClassPicker).toBeVisible();
  }

  async selectClass(Class: string) {
    await this.classDropdown.click()
    await this.page.locator('.mat-option-text', { hasText: Class }).click();

  }

}