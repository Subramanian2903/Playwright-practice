const { test } = require('@playwright/test');
const { PlaywrightPage } = require('../utils/commonActions');


test('Validate Playwright Home Page', async ({ page }) => {
    const playwrightPage = new PlaywrightPage(page);

    await playwrightPage.openHomePage();

    await playwrightPage.verifyTitle('Playwright');
    await playwrightPage.verifyUrl('playwright.dev');
    await playwrightPage.verifyGetStartedVisible();

});

test('Validate Playwright Home Page two', async ({ page }) => {
    const playwrightPage = new PlaywrightPage(page);

    await playwrightPage.openHomePage();

    await playwrightPage.openDocs();

    await playwrightPage.verifyUrl('/docs/');
    await playwrightPage.verifyInstallationVisible();

});

test('Validate Playwright Home Page three', async ({ page }) => {
    const playwrightPage = new PlaywrightPage(page);

    await playwrightPage.openHomePage();

    await playwrightPage.openDocs();

    await playwrightPage.verifyUrl('/docs/');
    await playwrightPage.verifyInstallationVisible();
    await playwrightPage.verifyInstallationText('Installation');
    await playwrightPage.verifyInstallationContainsText('Install');
});

