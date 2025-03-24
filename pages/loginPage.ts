import { Page, expect } from "@playwright/test";
import { loginPageLocator } from "../tests/locators/loginPageLocator";
import { Utils } from "../tests/lib/utils";

let utils: Utils;
export class loginPage {

    readonly page: Page;
    loginPageLocator = new loginPageLocator()

    constructor(page: Page) {
        this.page = page;
        utils = new Utils(this.page);
    }

    async navigateTo(url: string) {
        await utils.navigateToURL(url);
    }

    async getPageTitle() {
        return this.page.title();
    }

    async login(userName: string, password: string) {
        await utils.enterElementText(this.loginPageLocator.userNameTextBox, userName);
        await utils.enterElementText(this.loginPageLocator.passwordTextBox, password);
        await utils.clickElement(this.loginPageLocator.loginButton);
    }

    async isElementVisible(locator) {
        return await this.page.isVisible(locator);
    }
}