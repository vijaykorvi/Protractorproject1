let Homepage = function(){

let EnterFirstNumber=  element(by.model('first'));
let EnterSecondNumber= element(by.model('second'));
let ClickOnGoButton= element(by.css('[ng-click="doAddition()"]'));

this.get = function(url)
{
    browser.get(url);
}

this.EnterFirstNumber = function(first_No)
{
    EnterFirstNumber.sendKeys(first_No);
}

this.EnterSecondNumber = function(second_No)
{
EnterSecondNumber.sendKeys(second_No);

}

this.ClickOnGoButton = function()
{
    ClickOnGoButton.click();

}

this.verifyResult = function(result)
{
    let output= element(by.cssContainingText('.ng-binding',result));
        expect(output.getText()).toEqual('5');
    }
};
module.exports = new Homepage();