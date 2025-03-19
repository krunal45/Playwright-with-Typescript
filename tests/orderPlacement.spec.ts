//https://magento.softwaretestingboard.com/ - Magento
//https://www.saucedemo.com/ - SauceDemo

import { test, expect } from '@playwright/test';

test.beforeEach('Login to application', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');//open the url
    await page.locator("//input[@id='user-name']").fill('standard_user');//fill the username
    await page.locator("//input[@id='password']").fill('secret_sauce');
    await page.locator('//input[@id="login-button"]').click();
    await expect(page.locator("//button[@id='add-to-cart-sauce-labs-backpack']")).toBeVisible();
})

test('Verify Item added to cart', async ({ page }) => {
    // Add one item to cart
    await page.locator("//button[@id='add-to-cart-sauce-labs-backpack']").click();
    // click on shopping cart link
    await page.locator("//a[@class='shopping_cart_link']").click();
    await expect(page.locator("//div[@class='inventory_item_name']")).toContainText("Sauce Labs Backpack")
}
);

test.afterEach('Logout Of Application', async ({ page }) => {
    // Reset application state
    // Open side menu
    await page.locator('button#react-burger-menu-btn').click();
    await page.locator('#reset_sidebar_link').click();
    await page.locator('#logout_sidebar_link').click();
})