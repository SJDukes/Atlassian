/**
 * Created by sdukes on 3/27/15.
 */

module.exports = SearchBar;

var Helper = require('../../v2/Helper.js')
var driver = Helper.GetDriver();
var webdriver = Helper.GetWebDriver();

function SearchBar() {
   // var self = this;
    //this.driver = driver;
   // this.webdriver = webdriver;
}

//Function to search in the global search bar
SearchBar.SearchForBug = function (findNum) {
    driver.sleep(5000);
    driver.findElement(webdriver.By.id('quickSearchInput')).sendKeys(findNum);
    driver.findElement(webdriver.By.id('quickSearchInput')).sendKeys(webdriver.Key.RETURN);

}

