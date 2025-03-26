import { test, expect } from '@playwright/test'

test.beforeEach('Login to Application', async ({ page }) => {
    await page.goto('/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page.locator('div.app_logo'), 'Pass: Login Successful').toBeVisible();
})

test('Verify Item Price', { tag: '@smoke' }, async ({ page }) => {
    let actualItemPrice = await page.locator('#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.pricebar > div').textContent();
    let expectedItemPrice = '$29.99';
    await expect(actualItemPrice, 'Pass: Item price match!').toBe(expectedItemPrice);
})

test.afterEach('Reset Application State & Logout of Application', async ({ page }) => {
    await page.click('#react-burger-menu-btn');
    await page.click('#reset_sidebar_link');
    await page.click('#logout_sidebar_link');
})