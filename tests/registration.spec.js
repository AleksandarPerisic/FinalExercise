let basePage = require('../pages/base.page.js');
let regPage = require('../pages/registration.form.js');

describe('Registration form test', function(){
    let base = new basePage();
    let reg = new regPage();

    it('Verify that image is visible on top left side of the form', async () => {
        await base.waitElementToBeVisible(reg.leftTopImg);
        expect(reg.leftTopImg.isDisplayed()).toEqual(true);
    });

    it('Verify that text over image is visible on top left side of the form',async () => {
        await base.waitElementToBeVisible(reg.leftTopTxt);
        expect(reg.leftTopTxt.isDisplayed()).toEqual(true); 
    });

    it('Verify that block is visible on middle left side of the form',async () => {
        await base.waitElementToBeVisible(reg.leftMid);
        expect(reg.leftMid.isDisplayed()).toEqual(true); 
    });

    it('Verify that help text is visible on middle left side of the form',async () => {
        await base.waitElementToBeVisible(reg.leftMidBottomTxt);
        expect(reg.leftMidBottomTxt.isDisplayed()).toEqual(true); 
    });

    it('Verify that help link for public service is visible and clickable on middle left side of the form',async () => {
        await base.waitElementToBeClickable(reg.leftMidBottomLink);
        expect(reg.leftMidBottomLink.isDisplayed()).toEqual(true); 
    });

    it('Verify that all icons are visible on bottom left side of the form',async () => {
        expect(await base.numberOfDisplayedElements(reg.leftBottomImg)).toEqual(10); 
    });

    it('Verify that Facebook registration bottom is visible and clickable on the form',async () => {
        await base.waitElementToBeClickable(reg.facebook);
        expect(reg.facebook.isDisplayed()).toEqual(true);
    });

    it('Verify that information text for facebook registration is visible on the form',async () => {
        await base.waitElementToBeVisible(reg.rightTopText);
        expect(reg.rightTopText.isDisplayed()).toEqual(true); 
    });

    it('Verify that line text for dividing facebook and email registration is visible on the form',async () => {
        await base.waitElementToBeVisible(reg.rightLineText);
        expect(reg.rightLineText.isDisplayed()).toEqual(true); 
    });

    it('Verify that email input aria is visible on the form',async () => {
        await base.waitElementToBeVisible(reg.email);
        expect(reg.email.isDisplayed()).toEqual(true); 
    });

    it('Verify that name input aria is visible on the form',async () => {
        await base.waitElementToBeVisible(reg.name);
        expect(reg.name.isDisplayed()).toEqual(true); 
    });

    it('Verify that lastname input aria is visible on the form',async () => {
        await base.waitElementToBeVisible(reg.lastname);
        expect(reg.lastname.isDisplayed()).toEqual(true); 
    });

    it('Verify that password input aria is visible on the form',async () => {
        await base.waitElementToBeVisible(reg.password);
        expect(reg.password.isDisplayed()).toEqual(true); 
    });

    it('Verify that confirm password input aria is visible on the form',async () => {
        await base.waitElementToBeVisible(reg.passwordConf);
        expect(reg.passwordConf.isDisplayed()).toEqual(true); 
    });

    it('Verify that man radio button is visible and clickable on the form',async () => {
        await base.waitElementToBeClickable(reg.manRadio);
        expect(reg.manRadio.isDisplayed()).toEqual(true); 
    });

    it('Verify that woman radio button is visible and clickable on the form',async () => {
        await base.waitElementToBeClickable(reg.womanRadio);
        expect(reg.womanRadio.isDisplayed()).toEqual(true); 
    });

    it('Verify that checkbox is visible and clickable on the form',async () => {
        await base.waitElementToBeClickable(reg.checkbox);
        expect(reg.checkbox.isDisplayed()).toEqual(true); 
    });

    it('Verify that checkbox is visible and clickable on the form',async () => {
        await base.waitElementToBeClickable(reg.checkbox);
        expect(reg.checkbox.isDisplayed()).toEqual(true); 
    });

    it('Verify that terms of use link is visible and clickable on the form',async () => {
        await base.waitElementToBeClickable(reg.cookiePolicyLink.first());
        expect(reg.cookiePolicyLink.first().isDisplayed()).toEqual(true); 
    });

    it('Verify that privacy and cookie policy link is visible and clickable on the form',async () => {
        await base.waitElementToBeClickable(reg.cookiePolicyLink.get(1));
        expect(reg.cookiePolicyLink.get(1).isDisplayed()).toEqual(true); 
    });

    it('Verify that submit button is visible and clickable on the form',async () => {
        await base.waitElementToBeClickable(reg.submit);
        expect(reg.submit.isDisplayed()).toEqual(true); 
    });

    it('Verify that login link is visible and clickable on the form',async () => {
        await base.waitElementToBeClickable(reg.login);
        expect(reg.login.isDisplayed()).toEqual(true); 
    });
});