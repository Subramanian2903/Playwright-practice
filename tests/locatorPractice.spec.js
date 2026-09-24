const { test } = require('@playwright/test');
const { PlaywrightPage } = require('../utils/commonActions');

// Task1
// Click "Get Started" using getByRole()
// Verify page heading
// Locate search button
// Print page title
// Use .first(), .last(), .nth()

test('Locator practice session', async ({ page }) => {
    const playwrightPage = new PlaywrightPage(page);

    await playwrightPage.openHomePage();

    await playwrightPage.openDocs();

    await playwrightPage.verifyExactTitle('Installation | Playwright');
    
    await playwrightPage.printTitle();
    await playwrightPage.verifyLinkLocators();
 
    await playwrightPage.openSearch();

});

// Task2
// 1. Opens https://playwright.dev
// 2. Clicks Get Started
// 3. Verifies URL contains docs
// 4. Verifies heading is visible

test('Locator practice session two', async ({ page }) => {
    const playwrightPage = new PlaywrightPage(page);

    await playwrightPage.openHomePage();

    await playwrightPage.openDocs();

    await playwrightPage.verifyUrl('/docs/');
    await playwrightPage.verifyInstallationVisible();

});