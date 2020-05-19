let Homepage = require('../Pages/Homepage')


describe('Demo calculator tests',function()
{


    it('Addition test',function()
    {
        //browser.get('https://juliemr.github.io/protractor-demo/');
      Homepage.get('https://juliemr.github.io/protractor-demo/');
       browser.sleep(4000);
        browser.manage().window().maximize();
        Homepage.EnterFirstNumber(5);
        Homepage.EnterSecondNumber(1);
        Homepage.ClickOnGoButton();
        Homepage.verifyResult(6);

       
        //element(by.model('first')).sendKeys('12');
        //element(by.model('second')).sendKeys('1');
        //element(by.css('[ng-click="doAddition()"]')).click();
        //browser.sleep(4000);
        //let result= element(by.cssContainingText('.ng-binding','5'));
        //expect(result.getText()).toEqual('5');

    });

    it('Subtraction test',function()
    {
        //browser.get('https://juliemr.github.io/protractor-demo/');
      Homepage.get('https://juliemr.github.io/protractor-demo/');
       //browser.sleep(4000);
        browser.manage().window().maximize();
        Homepage.EnterFirstNumber(1);
        Homepage.EnterSecondNumber(1);
        Homepage.ClickOnGoButton();
        Homepage.verifyResult(2);
    });


});