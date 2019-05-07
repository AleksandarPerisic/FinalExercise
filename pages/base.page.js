let basePage = function () {
    let EC = protractor.ExpectedConditions;

    this.waitElementToBeVisible = async function (elm) {
        await browser.wait(EC.visibilityOf(elm), 30000);
    };

    this.waitElementToBeClickable = async function (elm){
        await browser.wait(EC.elementToBeClickable(elm), 30000);
    };

    this.urlCheck = async function (elm){
        await browser.wait(EC.urlIs(elm), 30000);
    };

    this.waitToElementToBeSelected = async function (elm){
        await browser.wait(EC.elementToBeSelected(elm), 30000);
    };

    this.numberOfPresentElements = async function (elm){
        let br=0;
        for(let i=0;i<await elm.count();i++)
        {
            if(await elm.get(i).isPresent()==true)
            {
                br++;
            }
        }
        return br;
    };

    this.numberOfDisplayedElements = async function (elm){
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

};

module.exports = basePage;