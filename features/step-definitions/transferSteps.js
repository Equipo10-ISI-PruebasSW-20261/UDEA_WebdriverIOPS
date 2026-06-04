import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../pageobjects/login.page.js";
import TransferPage from "../pageobjects/transfer.page.js";
import { sleep } from "../pageobjects/page.js";

Given(
  /^I login with username (.*) and password (.*)$/,
  async (username, password) => {
    await LoginPage.open();
    await LoginPage.login(username, password);
  }
);

// TRANSFER
Given(/^I login in my account and go to transfer funds page$/, async () => {
  await TransferPage.open();
});

When(
  /^I transfer (\d+) from the account (\d+) to the account (\d+)$/,
  async (amount, from, to) => {
    await sleep(2000);
    await TransferPage.transfer(amount, from, to);
    await sleep(2000);
  }
);

Then(/^The message should be (.*)$/, async (message) => {
  await expect($('//*[@id="showResult"]/h1')).toBeExisting();
  await expect($('//*[@id="showResult"]/h1')).toHaveTextContaining(message);
});