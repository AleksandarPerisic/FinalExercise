let basePage = require('../pages/base.page.js');
let regPage = require('../pages/registration.form.js');
let facePage =  require('../pages/facebook.page.js');
let homePage = require('../pages/home.page.js');
var winHandles;

describe('Registration from facebook test', function(){
    let base = new basePage();
    let reg = new regPage();
    let face = new facePage();
    let home = new homePage();

    it('Verify that Facebook registration bottom is visible and clickable on the form',async () => {
        await base.waitElementToBeClickable(reg.facebook);
        expect(reg.facebook.isDisplayed()).toEqual(true);
    });

    it('Verify that Facebook registration window is opened',async () => {
        await reg.facebook.click();
        winHandles= await browser.getAllWindowHandles();
        await browser.switchTo().window(winHandles[1]);
        await base.waitElementToBeVisible(face.email);
        expect(face.email.isDisplayed()).toEqual(true);
    });

    it('Verify that Facebook registration is successful',async ()=>{
        await face.email.sendKeys(browser.params.reg.email);
        await face.password.sendKeys(browser.params.reg.password);
        await face.login.click();
        await base.waitElementToBeClickable(face.continue);
        expect(face.continue.isDisplayed()).toEqual(true);
    });

    it('Verify that Facebook registration window is closed',async ()=>{
        await browser.switchTo().window(winHandles[0]);
        expect(await home.registrationForm.isDisplayed()).toBe(true);
    });
    
});