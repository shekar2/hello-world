import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { custombrowsers } from "../supports/world";

Given('I am on the login page', async function (this: custombrowsers) {
    await this.page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
});

When('I enter email {string} and password {string}', async function (this: custombrowsers, email: string, password: string) {
    const emailid = this.page.locator('#input-email');
    const passwordField = this.page.locator('#input-password');
    await emailid.fill(email);
    await passwordField.fill(password);
});

When('I click the login button', async function (this: custombrowsers) {
    const loginButton = this.page.locator("input[value='Login']");
    await loginButton.click();
});

Then('I should see the home page', async function (this: custombrowsers) {
    const title = await this.page.title();
    console.log("Home Page title: ", title);
    await expect(this.page).toHaveTitle(/My Account/);
});

Then('I should see an error message', async function (this: custombrowsers) {
    const alertBox = this.page.locator('.alert-dismissible');
    await expect(alertBox).toBeVisible();
});
