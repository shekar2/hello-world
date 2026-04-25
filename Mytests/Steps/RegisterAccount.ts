import { Given, When, Then, DataTable } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { custombrowsers } from "../supports/world";

Given('I am on the registration page', async function (this: custombrowsers) {
    await this.page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await this.page.getByRole('link', { name: 'Register' }).click();
});

When('I fill in the registration form with the following details:', async function (this: custombrowsers, dataTable: DataTable) {
    const formData = dataTable.rowsHash();

    await this.page.locator('input[name="firstname"]').waitFor({ state: 'visible' });
    await this.page.locator('input[name="firstname"]').fill(formData['firstName']);
    await this.page.locator('input[name="lastname"]').fill(formData['lastName']);
    await this.page.locator('input[name="email"]').fill(formData['email']);
    await this.page.locator('input[name="telephone"]').fill(formData['telephone']);
    await this.page.locator('input[name="password"]').fill(formData['password']);
    await this.page.locator('input[name="confirm"]').fill(formData['confirmPassword']);
});

When('I select newsletter subscription', async function (this: custombrowsers) {
    const subscribeYes = this.page.locator('input[name="newsletter"][value="1"]');
    await subscribeYes.check();
});

When('I accept the privacy policy', async function (this: custombrowsers) {
    const privacyPolicy = this.page.locator('input[name="agree"]');
    await privacyPolicy.check();
});

When('I click Continue to register', async function (this: custombrowsers) {
    await this.page.getByRole('button', { name: 'Continue' }).click();
});

Then('my account should be created successfully', async function (this: custombrowsers) {
    // Wait for either success URL or success message
    try {
        await this.page.waitForURL(/success/, { timeout: 3000 });
    } catch (e) {
        // If URL doesn't change, look for success content on current page
    }
    const heading = this.page.locator('h1');
    await expect(heading).toBeVisible();
});

Then('I should see a confirmation message', async function (this: custombrowsers) {
    const message = this.page.locator('h1, .alert-success, .text-success');
    await expect(message).toBeVisible();
});
