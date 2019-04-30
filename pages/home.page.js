let homePage = function () {
    this.login=element(by.css('a[class="login-button js-gigya-socialize"]'));
    this.bizar=elemet.all(by.css('a[data-label="Bizar"]')).first();
    this.registration=element.all(by.css(' span[class="link"]')).first();

};
module.exports = homePage;