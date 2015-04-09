var chrome = require("selenium-webdriver/chrome");
var timeout = 60000;


Utility.InitializeBrowser = function(webdriver, browserType) {
    var self = this;
    if (browserType !== null && browserType !== undefined) {
        switch (browserType.toLowerCase()) {
            case 'chrome':
                /*self.driver = new webdriver.Builder().
                 withCapabilities(webdriver.Capabilities.chrome()).build();*/
                var chromeOptions = new chrome.Options();
                chromeOptions.addArguments("start-maximized");
                self.driver = new webdriver.Builder().
                    withCapabilities(chromeOptions.toCapabilities()).build();

                break;

            case 'ie':
                Utility.StartIEServer();
                break;

            case 'firefox':
                Utility.StartSeleniumStandaloneServer(function(result) {
                    setTimeout(function() {
                        console.log("Waiting for Selenium Server Startup");
                    }, timeout);
                });
                self.driver = new webdriver.Builder().
                    withCapabilities(webdriver.Capabilities.firefox()).
                    build();

                break;

            case 'safari':
                self.driver = new webdriver.Builder().
                    withCapabilities(webdriver.Capabilities.safari()).
                    build();

                break;

            default:
                self.driver = new webdriver.Builder().
                    withCapabilities(webdriver.Capabilities.chrome()).
                    build();

                break;


        }
        self.driver.executeScript("return navigator.userAgent;").then(function(ret) {
            self.m_strUserAgent = ret;
        });
    }

    return self.driver;/**
 * Created by sdukes on 4/9/15.
 */
