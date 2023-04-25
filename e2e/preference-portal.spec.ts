import { test, expect } from '@playwright/test';

test('Record book and goals/target', async ({ page }) => {
  await page.goto('https://global-prestg.renaissance-golabs.com/welcomeportal/prestgourots1');

  await page.click("text=I'm a Student");
  await page.fill('input[id="Username"]', 'oadmin1');
  await page.fill('input[id="Password"]', 'Pass123$456');
  await page.click('id=btnLogIn');

  await page.click('[data-component="Independent Reading"]')
  await page.click('[data-component="Record Book & Goals"]')

  await page.waitForSelector('app-class-tabs')

  //matches screenshot saved under snapshots
  await expect(page).toHaveScreenshot('RecordBookGoals.png');

  //matches text
  expect(await page.textContent('.goals-page-header')).toMatchSnapshot('Goals.txt');


});

