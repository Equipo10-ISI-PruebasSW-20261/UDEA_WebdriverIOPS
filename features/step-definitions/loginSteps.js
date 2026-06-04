import { Given, When, Then } from "@wdio/cucumber-framework";

import LoginPage from '../pageobjects/login.page.js';

const pages = {
  login: LoginPage,
};

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open();
});

//LOGIN
When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

Then(/^I should see a text saying (.*)$/, async (message) => {
  await expect($('.title')).toBeExisting();
  await expect($('.title')).toHaveTextContaining(message);
});

Given(/^the username and password fields are empty$/, async () => {
  await LoginPage.usernameInput.clearValue();
  await LoginPage.passwordInput.clearValue();

  await expect(LoginPage.usernameInput).toHaveValue('');
  await expect(LoginPage.passwordInput).toHaveValue('');
});

Then(/^the Login button should be disabled$/, async () => {
  await expect(LoginPage.loginButton).toBeDisabled();
});