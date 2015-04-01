/**
 * Created by sdukes on 3/27/15.
 */

module.exports = CreateIssuePage;

var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

function CreateIssuePage() {
  //  var self = this;
   // this.driver = driver;
 //   this.webdriver = webdriver;
}

CreateIssuePage.CreateNewItem = function () {
        var self = this;
        driver.findElement(webdriver.By.id('create_link')).click();

}

//Function to provide item details when creating an item in JIRA
//This only references a subset of fields available
CreateIssuePage.ItemDetails = function (ItmType,ItmSmry,ItmDscrp) {
    driver.sleep(3000);
    driver.findElement(webdriver.By.id('issuetype-field')).click();
    driver.findElement(webdriver.By.linkText(ItmType)).click();
    driver.sleep(3000);
    driver.findElement(webdriver.By.id('summary')).sendKeys(ItmSmry);
    driver.findElement(webdriver.By.id('description')).sendKeys(ItmDscrp);
    driver.findElement(webdriver.By.id('create-issue-submit')).click();
}


