let basePage = require('../pages/base.page.js');
let regPage = require('../pages/registration.form.js');
let homePage = require('../pages/home.page.js');


describe('Registration by email test', function(){
    let base = new basePage();
    let reg = new regPage();
    let home = new homePage();
    

    beforeAll( async () => {
        await home.suitesOnOrOff();
    });

    it('Verify that email input aria is visible on the form',async () => {
        await base.waitElementToBeVisible(reg.email);
        expect(reg.email.isDisplayed()).toEqual(true); 
    });

    it('Verify that errors will be seen if mandatory fileds are empty after submission',async () => {
        let error = 'Dit veld is vereist';
        await reg.submit.click();
        await base.waitElementToBeVisible(reg.emailError);
        await base.textToBePresentInElement(reg.emailError,error);
        await base.waitElementToBeVisible(reg.passwordError);
        await base.textToBePresentInElement(reg.passwordError,error);
        await base.waitElementToBeVisible(reg.passwordRetypeError);
        expect(reg.passwordRetypeError.getText()).toEqual(error); 
    });

    it('Verify that error will be seen if email input is wrong',async () => {
        let error = 'E-mailadres is ongeldig.';
        await reg.email.sendKeys('Al12');
        await base.waitElementToBeVisible(reg.emailError);
        await base.textToBePresentInElement(reg.emailError,error);
        await reg.email.clear();
        await reg.email.sendKeys('@something');
        await base.waitElementToBeVisible(reg.emailError);
        await base.textToBePresentInElement(reg.emailError,error);
        await reg.email.clear();
        await reg.email.sendKeys('Al12@');
        await base.waitElementToBeVisible(reg.emailError);
        await base.textToBePresentInElement(reg.emailError,error);
        await reg.email.clear();
        await reg.email.sendKeys('Al12@@something.com');
        await base.waitElementToBeVisible(reg.emailError);
        await base.textToBePresentInElement(reg.emailError,error);
        await reg.email.clear();
        await reg.email.sendKeys('Al12s*#%!*&^.com');
        await base.waitElementToBeVisible(reg.emailError);
        expect(reg.emailError.getText()).toEqual(error); 
    });

    it('Verify that error will be seen if password is shorter than six characters but isnt empty',async () => {
        let error = 'Wachtwoord voldoet niet aan de vereisten voor complexiteit';
        await reg.password.sendKeys('Al12');
        await base.waitElementToBeVisible(reg.passwordError);
        expect(reg.passwordError.getText()).toEqual(error); 
    });

    it('Verify that error will be seen if password does not match with confirm password',async () => {
        let error = 'Wachtwoorden komen niet overeen';
        await reg.password.sendKeys('Al12');
        await base.waitElementToBeVisible(reg.passwordRetypeError);
        expect(reg.passwordRetypeError.getText()).toEqual(error); 
    });

    it('Verify that error will be seen if password does not match with confirm password',async () => {
        let error = 'Wachtwoorden komen niet overeen';
        await reg.password.sendKeys('Al12');
        await base.waitElementToBeVisible(reg.passwordRetypeError);
        expect(reg.passwordRetypeError.getText()).toEqual(error); 
    });

    it('Verify that error will be seen if CookiePolicyLink isnt checked',async () => {
        await reg.submit.click();
        expect(reg.checkbox.getAttribute('class')).toEqual('gigya-metadata gigya-empty');
    });

    it('Verify that E-mail registration is successful', async () =>{
        await reg.email.clear();
        await reg.name.clear();
        await reg.lastname.clear();
        await reg.password.clear();
        await reg.passwordConf.clear();
        await reg.email.sendKeys(base.enterRandomMail());
        await reg.name.sendKeys(browser.params.regmail.name);
        await reg.lastname.sendKeys(browser.params.regmail.lastname);
        await reg.password.sendKeys(browser.params.regmail.password);
        await reg.passwordConf.sendKeys(browser.params.regmail.password);
        await reg.manRadio.click();
        await reg.checkbox.click();
        await reg.submit.click();
        await browser.sleep(2000);
        expect(await home.loginButtonTxt.getText()).toEqual(browser.params.regmail.name + " " + browser.params.regmail.lastname);
    });

    it('Verify that E-mail registered user is logout ',async ()=>{
        await home.loginButton.click();
        await base.waitElementToBeClickable(home.logout);
        await home.logout.click();
        await base.waitElementToBeClickable(home.loginButton);
        expect(await home.loginButtonTxt.getText()).toEqual("Inloggen");
    });

});