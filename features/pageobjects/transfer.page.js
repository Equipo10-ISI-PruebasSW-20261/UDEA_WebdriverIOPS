import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TransferPage extends Page {

    /**
     * define selectors using getter methods
     */
    get inputAmount() {
      return $("//input[@id='amount']");
    }

    get inputFrom () {
        return $("//select[@id='fromAccountId']");
    }

    get inputTo () {
        return $("//select[@id='toAccountId']");
    }

    get btnSubmit () {
        return $("//input[@value='Transfer']");
    }

    async waitForPage() {
        await this.inputAmount.waitForDisplayed({ timeout: 10000 });
    } 

  async transfer(amount, from, to) {
    await this.inputAmount.setValue(amount);
    await this.inputFrom.selectByVisibleText(from);
    await this.inputTo.selectByVisibleText(to);
    await this.btnSubmit.click();
  }

  open() {
    return super.open("transfer");
  }

  get successfulTransferTitle() {
    return $("#rightPanel > div > div > h1");
  }
}

export default new TransferPage();
