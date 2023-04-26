import { test, expect } from '@playwright/test';
import { Role } from '../pages/role';
import { LoginPage } from '../pages/login-page';
import { RecordBookGoalsPage } from '../pages/record-book-goals-page';

test('Record book and goals for US', async ({ page }) => {
  await page.goto('https://global-prestg.renaissance-golabs.com/welcomeportal/prestgourots1');
  
  const loginPage = new LoginPage(page);
  await loginPage.selectRole(Role.Student);
  await loginPage.login('oadmin1', 'Pass123$456')

  const recordBookPage = new RecordBookGoalsPage(page);
  await recordBookPage.navigateToRecordBookAndGoals("US");

  //matches screenshot saved under snapshots
  await expect(page).toHaveScreenshot('RecordBookGoals.png');

  //matches text
  expect(await page.textContent('.goals-page-header')).toMatchSnapshot('Goals.txt');

});

test('Record book and targets for UK', async ({ page }) => {
  await page.goto('https://global-prestg.renaissance-golabs.com/welcomeportal/prestgourouk1');
  
  const loginPage = new LoginPage(page);
  await loginPage.selectRole(Role.Student);
  await loginPage.login('oadmin1', 'Pass123$456')

  const recordBookPage = new RecordBookGoalsPage(page);
  await recordBookPage.navigateToRecordBookAndGoals("UK");

  await recordBookPage.selectClass("Freckle & AR Class")
  

  //matches screenshot saved under snapshots
  await expect(page).toHaveScreenshot('RecordBookGoals.png');

  //matches text
  expect(await page.textContent('.goals-page-header')).toMatchSnapshot('Goals.txt');


});