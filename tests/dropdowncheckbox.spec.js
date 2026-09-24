const { test } = require('@playwright/test');
const { DropdownPage, URLS } = require('../utils/commonActions');

// Tasks:

// Select Option 1
// Verify value
// Select Option 2
// Verify value
// Print selected option

test ('Validate Dropdown and assertion selection', async ({page}) => {
    const dropdownPage = new DropdownPage(page);

    await dropdownPage.open(URLS.EXPANDTESTING_DROPDOWN);

    await dropdownPage.selectOption('#dropdown', '1');

    await dropdownPage.selectOption('#dropdown', '2');

    const value = await dropdownPage.getSelectedValue('#dropdown');
    console.log(value);

});