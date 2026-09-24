const { test } = require('@playwright/test');
const { DropdownPage, URLS } = require('../utils/commonActions');

//Task 1

test('Verify Dropdown first Selection', async ({ page }) => {
    const dropdownPage = new DropdownPage(page);

    await dropdownPage.open(URLS.DROPDOWN);
    await dropdownPage.selectOption('#dropdown', '1');
    
});

//Task 2

test('Verify Dropdown second Selection', async ({ page }) => {
    const dropdownPage = new DropdownPage(page);

    await dropdownPage.open(URLS.DROPDOWN);
    await dropdownPage.selectOption('#dropdown', '2');

});

//Task 3 
// Print selected value

test('Print selected value', async ({ page }) => {
    const dropdownPage = new DropdownPage(page);

    await dropdownPage.open(URLS.DROPDOWN);
    await dropdownPage.selectOption('#dropdown', '1');
    const firstValue = await dropdownPage.getSelectedValue('#dropdown');

    console.log('First selected value is: ' + firstValue); 

    await dropdownPage.selectOption('#dropdown', '2');
    const secondValue = await dropdownPage.getSelectedValue('#dropdown');

    console.log('Second selected value is: ' + secondValue); 

});