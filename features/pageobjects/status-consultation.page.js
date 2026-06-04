import Page from './page.js';

class StatusConsultationPage extends Page {

    get accountTable() {
        return $('#accountTable');
    }

    get accountRows() {
        return $$('#accountTable tbody tr');
    }

    get accountLinks() {
        return $$('#accountTable tbody tr td:first-child a');
    }

    get balances() {
        return $$('#accountTable tbody tr td:nth-child(2)');
    }

    async waitForAccountsToLoad() {
        await browser.waitUntil(
            async () => (await this.accountRows.length) > 0,
            {
                timeout: 10000,
                timeoutMsg: 'Accounts were not loaded'
            }
        );
    }

    async getAccountsCount() {
        await this.waitForAccountsToLoad();
        return this.accountLinks.length;
    }

    async clickAccount(index = 0) {
        await this.waitForAccountsToLoad();
        await this.accountLinks[index].click();
    }

    async getAccountNumber(index = 0) {
        await this.waitForAccountsToLoad();
        return this.accountLinks[index].getText();
    }

    async getBalance(index = 0) {
        await this.waitForAccountsToLoad();
        return this.balances[index].getText();
    }

    open() {
        return super.open('overview');
    }
}

export default new StatusConsultationPage();