const { test } = require('@playwright/test');
const { CommonPage, URLS } = require('../utils/commonActions');

//Task1
// Open Google
// Verify title contains Google

test('Verify Google website', async ({ page }) => {
    const commonPage = new CommonPage(page);

    await commonPage.open(URLS.GOOGLE);
    await commonPage.verifyTitle('Google');
});

//Task2
// Open Playwright website
// Verify title contains Playwright

test('Verify Playwright website', async ({ page }) => {
    const commonPage = new CommonPage(page);

    await commonPage.open(URLS.PLAYWRIGHT);
    await commonPage.verifyTitle('Playwright');
});

// Task3
// Open GitHub
// Print page title

test('Verify Github website', async ({ page }) => {
    const commonPage = new CommonPage(page);

    await commonPage.open(URLS.GITHUB);
    await commonPage.printTitle();
});

