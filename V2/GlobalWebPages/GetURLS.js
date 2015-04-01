/**
 * Created by sdukes on 3/27/15.
 */

module.exports = GetURLS;

var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

function GetURLS() {
    var self = this;
    //this.driver = driver;
    // this.webdriver = webdriver;
}
//Function to get to main JIRA page
GetURLS.OpenJira = function () {
    var self = this;
    driver.get('https://jira.atlassian.com/secure/Dashboard.jspa');
    driver.manage().window().maximize();
}
