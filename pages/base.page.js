let basePage = function () {
    let EC = protractor.ExpectedConditions;

    this.waitElementToBeVisible = async (elm) => {
        await browser.wait(EC.visibilityOf(elm), 30000);
    };

    this.waitElementToBeClickable = async (elm) => {
        await browser.wait(EC.elementToBeClickable(elm), 30000);
    };

    this.urlCheck = async (elm) => {
        await browser.wait(EC.urlIs(elm), 30000);
    };

    this.waitToElementToBeSelected = async (elm) => {
        await browser.wait(EC.elementToBeSelected(elm), 30000);
    };

    this.textToBePresentInElement = async (elm,elm1) => {
        await browser.wait(EC.textToBePresentInElement(elm,elm1), 30000);
    };

    this.numberOfDisplayedElements = async (elm) => {
        let br=0;
        for(let i=0;i<await elm.count();i++)
        {
            if(await elm.get(i).isDisplayed()==true)
            {
                br++;
            }
        }
        return br;
    };

    this.enterRandomMail = async () => {
        return 'aleksnadar.perisic25+' + Math.random().toString(36).substring(2, 10) + '@gmail.com';
    }

};

module.exports = basePage;