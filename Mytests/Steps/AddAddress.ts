import { Given, When, Then, DataTable } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { custombrowsers } from "../supports/world";

// Navigate to the add address page (requires login first)
Given('I am on the add address page', async function (this: custombrowsers) {
    // First login with existing credentials
    await this.page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await this.page.locator('input[name="email"]').fill('chepuripriyanka08@gmail.com');
    await this.page.locator('input[name="password"]').fill('Pallavi@123');
    await this.page.getByRole('button', { name: 'Login' }).click();
    await this.page.waitForURL(/route=account\/account/);

    // Navigate to add address page
    await this.page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/address/add');
});

// Fill in the address form with specific test data
When('I fill in the address form with the following details:', async function (this: custombrowsers, dataTable: DataTable) {
    const formData = dataTable.rowsHash();

    console.log('Page URL:', this.page.url());

    // Fill text fields
    await this.page.locator('input[name="firstname"]').fill(formData['firstName'] || 'Varakala');
    await this.page.locator('input[name="lastname"]').fill(formData['lastName'] || 'Shekar');
    await this.page.locator('input[name="address_1"]').fill(formData['address1'] || '3-146/2');
    await this.page.locator('input[name="address_2"]').fill(formData['address2'] || 'Nagarjuna Hills,Almasguda,BN Reddy');
    await this.page.locator('input[name="city"]').fill(formData['city'] || 'Hyderabad');
    await this.page.locator('input[name="postcode"]').fill(formData['postcode'] || '500097');

    // Select country - find exact "India" option
    const countrySelect = this.page.locator('select[name="country_id"]');
    const countryCount = await countrySelect.locator('option').count();
    console.log('Country options count:', countryCount);

    let indiaIndex = -1;
    for (let i = 0; i < countryCount; i++) {
        const optionText = await countrySelect.locator('option').nth(i).textContent();
        console.log('Country option', i, ':', optionText);
        if (optionText?.trim() === 'India') {
            indiaIndex = i;
            break;
        }
    }
    if (indiaIndex >= 0) {
        await countrySelect.selectOption({ index: indiaIndex });
    }

    // Wait for zone options to load after country selection
    await this.page.waitForTimeout(1500);

    // Select zone - find exact "Telangana" option
    const zoneSelect = this.page.locator('select[name="zone_id"]');
    const zoneCount = await zoneSelect.locator('option').count();
    console.log('Zone options count:', zoneCount);

    let telanganaIndex = -1;
    for (let i = 0; i < zoneCount; i++) {
        const optionText = await zoneSelect.locator('option').nth(i).textContent();
        console.log('Zone option', i, ':', optionText);
        if (optionText?.trim() === 'Telangana') {
            telanganaIndex = i;
            break;
        }
    }
    if (telanganaIndex >= 0) {
        await zoneSelect.selectOption({ index: telanganaIndex });
    }
});

// Click Continue button
When('I click Continue to save address', async function (this: custombrowsers) {
    await this.page.getByRole('button', { name: 'Continue' }).click();
});

// Verify address was created
Then('my address should be created successfully', async function (this: custombrowsers) {
    // Wait for address list page to load after successful creation
    await this.page.waitForURL(/route=account\/address/, { timeout: 10000 });
    await this.page.waitForTimeout(2000);

    // Check for success message
    const successMessage = this.page.locator('.alert-success, .alert-dismissible');
    await expect(successMessage).toBeVisible();
});

// Verify success message
Then('I should see an address success message', async function (this: custombrowsers) {
    const message = this.page.locator('.alert-success, .text-success');
    await expect(message).toBeVisible();
});
