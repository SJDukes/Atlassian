/**
 * Created by sdukes on 3/26/15.
 */


module.exports = Helper;

function Helper() {

    var webdriver = require('selenium-webdriver');
    var driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    GetDriver = function() {
        return driver;
    };
    GetWebDriver = function() {
        return webdriver;
    }}



