import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';

Given('I am logged into my bank account', async () => {
    await browser.url('https://parabank.parasoft.com/parabank/index.htm');

    await $('input[name="username"]').setValue('john');
    await $('input[name="password"]').setValue('demo');
    await $('input[value="Log In"]').click();
});

Given('I am on the Accounts Overview page', async () => {
    await expect(browser).toHaveUrlContaining('overview');
});

When(/^I select account (.*)$/, async (accountId) => {
    await $(`=${accountId}`).click();
});

Then(/^I should see account (.*)$/, async (accountId) => {
    await expect($('body')).toHaveTextContaining(accountId);
});

Then('I should see its current balance', async () => {
    await expect($('#balance')).toBeDisplayed();
});