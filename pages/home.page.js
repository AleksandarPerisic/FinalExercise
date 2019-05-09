let basePage = require('../pages/base.page.js');

let homePage = function () {
    this.policyButton=element(by.css('button[class="button button--primary"]'));
    this.loginButton=element(by.css('a[class="login-button js-gigya-socialize"]'));
    this.loginButtonTxt=element(by.css('a[class="login-button js-gigya-socialize"] span'));
    this.registrationLink=element.all(by.css('span[class="link"]')).first();
    this.registrationForm=element(by.css('div[class="gigya-screen-dialog-main"]'));
    this.agreeAndContinue=element.all(by.css('input[value="Akkoord en doorgaan"]')).first();
    this.logout=element.all(by.css('a[onclick="gigya.accounts.logout();"]')).first();

    this.suitesOnOrOff = async () => {
        let base = new basePage();
        if(await this.registrationForm.isPresent()==false)
        {
            await base.waitElementToBeClickable(this.loginButton);
            await this.loginButton.click();
            await base.waitElementToBeClickable(this.registrationLink);
            await this.registrationLink.click();
            await base.waitElementToBeVisible(this.registrationForm);
        }
    }
};
module.exports = homePage;