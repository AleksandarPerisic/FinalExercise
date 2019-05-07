let facePage = function () {
    this.email=element(by.css('input[id="email"]'));
    this.password=element(by.css('input[id="pass"]'));
    this.login=element(by.css('input[id="u_0_0"]'));
    this.continue=element.all(by.css('button[type="submit"]')).first();
};
module.exports = facePage;