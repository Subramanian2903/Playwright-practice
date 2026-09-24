const { expect } = require('@playwright/test');

const URLS = {
    CHECKBOX: 'https://the-internet.herokuapp.com/checkboxes',
    DROPDOWN: 'https://the-internet.herokuapp.com/dropdown',
    EXPANDTESTING_DROPDOWN: 'https://practice.expandtesting.com/dropdown',
    GITHUB: 'https://github.com',
    GOOGLE: 'https://www.google.com',
    PLAYWRIGHT: 'https://playwright.dev',
    DEMOQA_CHECKBOX: 'https://demoqa.com/checkbox'
};

class CommonPage {
    constructor(page) {
        this.page = page;
    }

    async open(url) {
        await this.page.goto(url);
    }

    async verifyTitle(titleText) {
        await expect(this.page).toHaveTitle(new RegExp(titleText));
    }

    async verifyExactTitle(title) {
        await expect(this.page).toHaveTitle(title);
    }

    async printTitle() {
        console.log(await this.page.title());
    }
}

class DropdownPage extends CommonPage {
    async selectOption(dropdownLocator, optionValue) {
        const dropdown = this.page.locator(dropdownLocator);
        await dropdown.selectOption(optionValue);
        await expect(dropdown).toHaveValue(optionValue);
    }

    async getSelectedValue(dropdownLocator) {
        return this.page.locator(dropdownLocator).inputValue();
    }
}

class PlaywrightPage extends CommonPage {
    constructor(page) {
        super(page);
        this.getStartedLink = page.getByRole('link', { name: 'Get started' });
        this.searchButton = page.getByRole('button', { name: 'Search' }).first();
        this.installationHeading = page.getByRole('heading', { name: 'Installation' });
    }

    async openHomePage() {
        await this.open(URLS.PLAYWRIGHT);
    }

    async openDocs() {
        await this.getStartedLink.click();
    }

    async verifyUrl(urlText) {
        await expect(this.page).toHaveURL(new RegExp(urlText));
    }

    async verifyGetStartedVisible() {
        await expect(this.getStartedLink).toBeVisible();
    }

    async verifyInstallationVisible() {
        await expect(this.installationHeading).toBeVisible();
    }

    async verifyInstallationText(text) {
        await expect(this.installationHeading).toHaveText(text);
    }

    async verifyInstallationContainsText(text) {
        await expect(this.installationHeading).toContainText(text);
    }

    async openSearch() {
        await this.searchButton.click();
    }

    async verifyLinkLocators() {
        const links = this.page.getByRole('link');
        await expect(links.first()).toBeVisible();
        await expect(links.last()).toBeVisible();
        await expect(links.nth(2)).toBeVisible();
    }
}

class CheckboxPage extends CommonPage {
    constructor(page) {
        super(page);
        this.page = page;
        this.checkboxInputs = page.locator('input[type="checkbox"]');
    }

    async openCheckboxPage() {
        await this.open(URLS.CHECKBOX);
    }

    async check(index) {
        await this.checkboxInputs.nth(index).check();
    }

    async uncheck(index) {
        await this.checkboxInputs.nth(index).uncheck();
    }

    async verifyChecked(index) {
        await expect(this.checkboxInputs.nth(index)).toBeChecked();
    }

    async verifyUnchecked(index) {
        await expect(this.checkboxInputs.nth(index)).not.toBeChecked();
    }

    async openDemoQaCheckboxPage() {
        await this.open(URLS.DEMOQA_CHECKBOX);
    }

    async expandHome() {
        await this.page.locator('.rc-tree-switcher').first().click();
    }

    checkboxByName(name) {
        return this.page.getByRole('checkbox', { name });
    }

    async checkByName(name) {
        await this.checkboxByName(name).check();
    }

    async verifyCheckedByName(name) {
        await expect(this.checkboxByName(name)).toBeChecked();
    }
}

module.exports = { CheckboxPage, CommonPage, DropdownPage, PlaywrightPage, URLS };