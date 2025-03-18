import{test,expect} from '@playwright/test';

test('login test', async ({page}) => {
await page.goto('https://www.saucedemo.com/');
console.log(await page.title());
await expect(page).toHaveTitle('Swag Labs');
})