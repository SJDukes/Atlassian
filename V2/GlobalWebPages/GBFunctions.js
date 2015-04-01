/**
 * Created by sdukes on 3/26/15.
 */
module.exports = GBFunctions;

var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

function GBFunctions(driver,webdriver) {
    var self = this;
    this.driver = driver;
    this.webdriver = webdriver;
}

//Function to get to main JIRA page
GBFunctions.OpenJira = function () {
    var self = this;
    driver.get('https://jira.atlassian.com/secure/Dashboard.jspa');
    driver.manage().window().maximize();
}

//Function to get JIRA Login button
 GBFunctions.GetLoginButton = function () {
    driver.findElement(webdriver.By.id('user-options')).click();
}

//Function to log into JIRA takes user and password parameters
GBFunctions.Login = function (email,pwd) {
    driver.findElement(webdriver.By.id('username')).sendKeys(email);
    driver.findElement(webdriver.By.id('password')).sendKeys(pwd);
    driver.findElement(webdriver.By.id('login-submit')).click();
}

//Function to hit the main Create button in JIRA
GBFunctions.CreateNewItem = function () {
    driver.findElement(webdriver.By.id('create_link')).click();
}

//Function to provide item details when creating an item in JIRA
//This only references a subset of fields available
GBFunctions.ItemDetails = function (ItmType,ItmSmry,ItmDscrp) {

    driver.sleep(3000);
    driver.findElement(webdriver.By.id('issuetype-field')).click();
    driver.findElement(webdriver.By.linkText(ItmType)).click();
    driver.sleep(3000);
    driver.findElement(webdriver.By.id('summary')).sendKeys(ItmSmry);
    driver.findElement(webdriver.By.id('description')).sendKeys(ItmDscrp);
    driver.findElement(webdriver.By.id('create-issue-submit')).click();
}

//Function to search for a bug using a test_case provided parameter
GBFunctions.SearchForBug = function (findNum) {
    driver.sleep(5000);
    driver.findElement(webdriver.By.id('quickSearchInput')).sendKeys(findNum);
    driver.findElement(webdriver.By.id('quickSearchInput')).sendKeys(webdriver.Key.RETURN);
}

//Function to logout of JIRA
 GBFunctions.Logout = function () {
     driver.sleep(3000);
     driver.findElement(webdriver.By.id('user-options')).click();
     driver.sleep(5000);
     driver.findElement(webdriver.By.linkText("Log Out")).click();
}
