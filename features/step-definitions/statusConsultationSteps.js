import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page.js';
import StatusConsultationPage from '../pageobjects/status-consultation.page.js';

let selectedAccountNumber;

Given(
    /^I login with username (.*) and password (.*)$/,
    async (username, password) => {
        await LoginPage.open();
        await LoginPage.login(username, password);
    }
);

Given('I am on the Accounts Overview page', async () => {
    await StatusConsultationPage.open();
    await StatusConsultationPage.waitForAccountsToLoad();
});

Then('I should see all my accounts listed', async () => {
    const accountCount = await StatusConsultationPage.getAccountsCount();

    await expect(accountCount).toBeGreaterThan(0);
});

When(/^I select account (\d+)$/, async (accountId) => {
    const accountLink = await $(`=${accountId}`);

    await accountLink.waitForDisplayed({
        timeout: 10000
    });

    selectedAccountNumber = accountId;

    await accountLink.click();
});

Then(/^I should see account (\d+)$/, async (accountId) => {
    await expect(browser).toHaveUrl(
        expect.stringContaining(`id=${accountId}`)
    );
});

Then('I should see its current balance', async () => {
    const balance = await $('#balance');

    await balance.waitForDisplayed({
        timeout: 10000
    });

    await expect(balance).toBeDisplayed();
});

Then('I should see recent transactions', async () => {
    const transactionTable = await $('#transactionTable');

    await transactionTable.waitForDisplayed({
        timeout: 10000
    });

    await expect(transactionTable).toBeDisplayed();
});
