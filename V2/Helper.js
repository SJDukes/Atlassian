/**
 * Created by sdukes on 3/26/15.
 */


module.exports = Helper;

function Helper(driver, webdriver) {
   // var self = this;
   // self.driver = driver;
  //  self.webdriver = webdriver;

    //self.userSetupPage = new UserSetupPage(self.driver, self.webdriver);

}

    Helper.chromeOptions =  function () {
        var webdriver = require('selenium-webdriver');
        var driver = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.chrome()).
            build();

    }

