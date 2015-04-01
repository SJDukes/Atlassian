/**
 * Created by sdukes on 3/26/15.
 */
module.exports = GlobalFunctions;

var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

function GlobalFunctions(driver,webdriver) {
    var self = this;
    this.driver = driver;
    this.webdriver = webdriver;
}

//Function to get to main JIRA page
GlobalFunctions.OpenJira = function () {
    var self = this;
    driver.get('https://jira.atlassian.com/secure/Dashboard.jspa');
    driver.manage().window().maximize();
}

//Function to get JIRA Login button
 GlobalFunctions.GetLoginButton = function () {
    driver.findElement(webdriver.By.id('user-options')).click();
}

//Function to log into JIRA takes user and password parameters
GlobalFunctions.Login = function (email,pwd) {
    driver.findElement(webdriver.By.id('username')).sendKeys(email);
    driver.findElement(webdriver.By.id('password')).sendKeys(pwd);
    driver.findElement(webdriver.By.id('login-submit')).click();
}

//Function to hit the main Create button in JIRA
GlobalFunctions.CreateNewItem = function () {
    driver.findElement(webdriver.By.id('create_link')).click();
}

//Function to provide item details when creating an item in JIRA
//This only references a subset of fields available
GlobalFunctions.ItemDetails = function (ItmType,ItmSmry,ItmDscrp) {
    driver.sleep(3000);
    driver.findElement(webdriver.By.id('issuetype-field')).click();
    driver.findElement(webdriver.By.linkText(ItmType)).click();
    driver.sleep(3000);
    driver.findElement(webdriver.By.id('summary')).sendKeys(ItmSmry);
    driver.findElement(webdriver.By.id('description')).sendKeys(ItmDscrp);
    driver.findElement(webdriver.By.id('create-issue-submit')).click();
}

//Function to search for a bug using a test_case provided parameter
GlobalFunctions.SearchForBug = function (findNum) {
    driver.sleep(5000);
    driver.findElement(webdriver.By.id('quickSearchInput')).sendKeys(findNum);
    driver.findElement(webdriver.By.id('quickSearchInput')).sendKeys(webdriver.Key.RETURN);
}

//Function to logout of JIRA
 GlobalFunctions.Logout = function () {
     driver.sleep(3000);
     driver.findElement(webdriver.By.id('user-options')).click();
     driver.sleep(5000);
     driver.findElement(webdriver.By.linkText("Log Out")).click();
    // console.log('Success!');
}
GlobalFunctions.CloseBrowser = function () {
    driver.close();
}
