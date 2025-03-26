import {expect, test, type Page} from '@playwright/test';

// annotate entire file as serial
test.describe.configure({mode:'serial'});

let page:Page;

test.beforeAll(async ({ browser })=>{
    page = await browser.newPage();
});

test.afterAll(async ()=>{
    await page.close();
});

test('first Test',async ({page}) => {
    await page.goto('/');
})

test('second Test',async ({page}) => {
    await page.goto('/');
    const pageTitle = await page.title();
    await expect(pageTitle).toBe('Swag Labs');
})