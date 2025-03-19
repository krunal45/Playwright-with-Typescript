import{test,expect} from '@playwright/test';

test('Verify Page Title', async ({page}) => {
await page.goto('https://www.saucedemo.com/');//open the url
console.log(await page.title());
await expect(page).toHaveTitle('Swag Labs');//verify the title
})

test('Verify Login ', async ({page}) => {
await page.goto('https://www.saucedemo.com/');//open the url
await page.fill('#user-name','standard_user');//fill the username
await page.fill('#password','secret_sauce');
await page.click('#login-button');
expect(await page.locator('a.shopping_cart_link')).toBeVisible();
}
);

// test.afterAll(async ({page}) => {
// await page.click('button#react-burger-menu-btn');
// await page.click('a#logout_sidebar_link');
// expect(await page.locator('input#user-name')).toBeVisible();
// })