/**
 * Created by sdukes on 3/26/15.
 */
module.exports = LoginPage;

var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

function LoginPage() {
    var self = this;
    this.driver = driver;
   this.webdriver = webdriver;
    }

//Function to get JIRA Login button
LoginPage.GetLoginButton = function () {
    driver.findElement(webdriver.By.id('user-options')).click();
}
//Function to get Email field
LoginPage.GetUsernameField = function (email) {
    driver.findElement(webdriver.By.id('username')).sendKeys(email);
}
//Function to get Password field
LoginPage.GetPasswordField = function (pwd) {
    driver.findElement(webdriver.By.id('password')).sendKeys(pwd);
}
//Function to submit login
LoginPage.GetSubmitButton = function () {
    driver.findElement(webdriver.By.id('login-submit')).click();
}

//Function to logout
LoginPage.Logout = function () {
    driver.sleep(3000);
    driver.findElement(webdriver.By.id('user-options')).click();
    driver.sleep(5000);
    driver.findElement(webdriver.By.linkText("Log Out")).click();
}



/*

LoginPage.LoginJIRA = function (email,pwd) {
    var self = this;

    var flow = webdriver.promise.controlFlow();

    flow.execute(function() {
        LoginPage.GetLoginButton()

    });
    flow.execute(function () {
        LoginPage.GetUsernameField(email)
    });
    flow.execute(function () {
        LoginPage.GetPasswordField(pwd)
    });
    flow.execute(function () {
        LoginPage.GetSubmitButton()
    });
}
*/
