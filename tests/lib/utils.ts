import { expect, Page } from '@playwright/test';

export class Utils {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToURL(url: string) {
        await this.page.goto(url, { waitUntil: "domcontentloaded" });
    }

    async waitForElementAttached(locator: string) {
        await this.page.waitForSelector(locator);
    }

    async clickElement(locator: string) {
        await this.waitForElementAttached(locator);
        await this.page.click(locator);
    }

    async verifyIfElementIsDisplayed(locator: string, elementName: string) {
        await this.page.waitForSelector(locator, { state: `visible` })
            .catch(() => { throw new Error(`${elementName} is not displayed`); });
    }

    async enterElementText(locator: string, text: any) {
        await this.waitForElementAttached(locator);
        await this.page.fill(locator, text);
    }

    async verifyPageTitle(pageTitle: string) {
        await expect(this.page).toHaveTitle(pageTitle);
    }
}