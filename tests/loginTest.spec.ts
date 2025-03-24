import test from '../tests/lib/basePage';
import { expect } from '@playwright/test';
import data from '../tests/testData/mockData.json'

test('Verify Page Title', async ({ loginPage }) => {
  
    await loginPage.navigateTo('https://www.saucedemo.com');
    const pageTitle = await loginPage.getPageTitle();
    expect(pageTitle).toEqual('Swag Labs');
})

test('Verify Login ', async ({ loginPage }) => {
    await loginPage.navigateTo('https://www.saucedemo.com');
    await loginPage.login(data.validLoginCredentials.userName,data.validLoginCredentials.password);
    expect(await loginPage.isElementVisible('a.shopping_cart_link')).toBe(true);
}
);

// test.afterAll(async ({page}) => {
// await page.click('button#react-burger-menu-btn');
// await page.click('a#logout_sidebar_link');
// expect(await page.locator('input#user-name')).toBeVisible();
// })