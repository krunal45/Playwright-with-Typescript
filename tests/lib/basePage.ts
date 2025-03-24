import { test as baseTest } from '@playwright/test';
import { loginPage } from '../../pages/loginPage';


const test = baseTest.extend<{
    loginPage: loginPage;
}>(
    {
        loginPage: async ({ page }, use) => {
            await use(new loginPage(page))
        }
    });
export default test;    