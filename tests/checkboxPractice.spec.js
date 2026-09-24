const { test } = require('@playwright/test');
const { CheckboxPage } = require('../utils/commonActions');

// Task 1
// Open URL
// Select Checkbox 1
// Verify Checkbox 1 is checked

test('Validate Checkbox one Selection', async ({ page }) => {
    const checkboxPage = new CheckboxPage(page);

    await checkboxPage.openCheckboxPage();
    await checkboxPage.check(0);

    await checkboxPage.verifyChecked(0);
});

// Task 2
// Uncheck Checkbox 2
// Verify Checkbox 2 is unchecked

test('Validate Checkbox two UnSelection', async ({ page }) => {
    const checkboxPage = new CheckboxPage(page);

    await checkboxPage.openCheckboxPage();
    await checkboxPage.uncheck(1);

    await checkboxPage.verifyUnchecked(1);
});

test("Validate Multicheck boxes", async ({ page }) => {
    const checkboxPage = new CheckboxPage(page);

    await checkboxPage.openDemoQaCheckboxPage();
    await checkboxPage.expandHome();

    await checkboxPage.checkByName('Select Desktop');
    await checkboxPage.verifyCheckedByName('Select Desktop');

});