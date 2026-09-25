const { test } = require('@playwright/test');
const { PlaywrightPage, URLS } = require('../utils/commonActions');

test('Verify wait functionality', async ({ page }) => {
    const playwrightPage = new PlaywrightPage(page);
    await playwrightPage.openHomePage();
    await playwrightPage.verifyGetStartedVisible();
    await playwrightPage.openDocs();
    await playwrightPage.verifyUrl('docs');
    
});