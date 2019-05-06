let homePage = require('../pages/home.page.js');
var EC = protractor.ExpectedConditions;

describe('Homepage test', function() {

    let home = new homePage();

    it('Verify that correct page is opened', async function() {
        browser.get(browser.baseUrl);
        await browser.wait(EC.elementToBeClickable(home.policyButton), 5000);
        await home.policyButton.click();
        await browser.wait(EC.urlIs('https://www.shownieuws.nl/'),5000);
        expect(await browser.getCurrentUrl()).toEqual(browser.baseUrl);
    });

    it('Veryfy that registration form is opened', async function(){
        await browser.wait(EC.elementToBeClickable(home.loginButton), 5000);
        await home.loginButton.click();
        await browser.wait(EC.elementToBeClickable(home.registrationLink), 5000);
        await home.registrationLink.click();
        expect(await home.registrationForm.isDisplayed()).toBe(true);
    });

});
