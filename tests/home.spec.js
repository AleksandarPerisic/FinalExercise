let homePage = require('../pages/home.page.js');
let basePage = require('../pages/base.page.js');

describe('Homepage test', function() {

    let home = new homePage();
    let base = new basePage();

    it('Verify that correct page is opened', async () =>{
        browser.get(browser.baseUrl);
        await base.waitElementToBeClickable(home.policyButton);
        await home.policyButton.click();
        await base.urlCheck('https://www.shownieuws.nl/');
        expect(await browser.getCurrentUrl()).toEqual(browser.baseUrl);
    });

    it('Veryfy that registration form is opened', async () =>{
        await base.waitElementToBeClickable(home.loginButton);
        await home.loginButton.click();
        await base.waitElementToBeClickable(home.registrationLink);
        await home.registrationLink.click();
        expect(await home.registrationForm.isDisplayed()).toBe(true);
    });

});
