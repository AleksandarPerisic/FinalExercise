let homePage = function () {
    this.policyButton=element(by.css('button[class="button button--primary"]'));
    this.loginButton=element(by.css('a[class="login-button js-gigya-socialize"]'));
    //this.bizar=element.all(by.css('a[data-label="Bizar"]')).first();
    this.registrationLink=element.all(by.css('span[class="link"]')).first();
    this.registrationForm=element(by.css('div[class="gigya-screen-dialog-main"]'));
    this.agreeAndContinue=element.all(by.css('input[value="Akkoord en doorgaan"]')).first();
};
module.exports = homePage;