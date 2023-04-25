import { expect, Locator, Page } from '@playwright/test';
import { Role } from '../pages/role';

export class LoginPage {
  readonly page: Page;
  readonly studentLink: Locator;
  readonly teacherLink: Locator;
  readonly roleSelector: Locator;
  readonly username: Locator;
  readonly password: Locator;
  readonly btnLogIn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.roleSelector = page.locator('role-selector');
    this.studentLink = page.locator('a', { hasText: "I'm a Student" });
    this.teacherLink = page.locator('a', { hasText: "I'm a Teacher/Administrator" });
    this.username = page.locator('input[id="Username"]')
    this.password = page.locator('input[id="Password"]')
    this.btnLogIn = page.locator('id=btnLogIn');

  }

  async goto() {
    await this.page.goto('https://global-prestg.renaissance-golabs.com/welcomeportal/prestgourots1');
  }

  async selectRole(role: Role) {
    if (role === Role.Student) {
      await this.studentLink.click();
    }
    if (role === Role.Teacher || role === Role.Admin) {
      await this.teacherLink.click();
    }    
    // await expect(this.username).toBeVisible();
  }


  async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.btnLogIn.click();
  }

}