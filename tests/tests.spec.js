const { test, expect } = require('@playwright/test');
const { RegisterPage } = require('../pages/RegisterPage');
const { LoginPage } = require('../pages/LoginPage');
const { faker } = require('@faker-js/faker');

const validUsername = process.env.VALID_USERNAME;
const validPassword = process.env.VALID_PASSWORD;

test.describe('Redmine Testing', () => {
    test('TC_02_1: Successful registration', async ({ page }) => {
        const registerPage = new RegisterPage(page);

        const username = 'user_' + faker.string.alphanumeric(6) + faker.number.int(100);
        const password = faker.internet.password({ length: 12 }) + 'A1!';

        await registerPage.navigateToRegister();
        await registerPage.registerUser(
            username, password, faker.person.firstName(), faker.person.lastName(), faker.internet.email()
        );

        await expect(registerPage.flashSuccess).toBeVisible();
        await expect(registerPage.flashSuccess).toContainText('Account was successfully created');
    });

    test('TC_02_2: Login attempt with an invalid password', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const randomInvalidPassword = faker.internet.password({ length: 15 });

        await loginPage.navigate();
        await loginPage.login(validUsername, randomInvalidPassword);

        await expect(loginPage.flashError).toBeVisible();
        await expect(loginPage.flashError).toContainText('Invalid user or password');
    });


    test('TC_02_3: Login attempt with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.navigate();
        await loginPage.login(validUsername, validPassword);

        await expect(page).not.toHaveURL(/login$/);
    });

    test('TC_02_4: Public global search validation', async ({ page }) => {
        await page.goto('/login'); 

        const searchInput = page.locator('input#q');
        
        await searchInput.fill('Playwright testing');

        await Promise.all([
            page.waitForNavigation({ waitUntil: 'networkidle', timeout: 10000 }).catch(() => {}),
            searchInput.press('Enter')
        ]);

        await expect(page).toHaveURL(/search|q=/);
        await expect(page.locator('body')).toContainText('Search');
    });

    test('TC_02_5: Guest navigation to public Help page', async ({ page }) => {
        await page.goto('/login');

        const helpLink = page.locator('#top-menu a.help');
        await helpLink.click();

        await expect(page).not.toHaveURL(/login/);
    });
});