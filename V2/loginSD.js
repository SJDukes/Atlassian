
var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();



function TC_Login () {
 //   var self = this;
    driver.get('https://jira.atlassian.com/secure/Dashboard.jspa');
    driver.manage().window().maximize();
    driver.findElement(webdriver.By.id('user-options')).click();
    driver.findElement(webdriver.By.id('username')).sendKeys('sfsteph82@gmail.com');
    driver.findElement(webdriver.By.id('password')).sendKeys('32974282sc');
    driver.findElement(webdriver.By.id('login-submit')).click();

}

function TC_Create () {

   // var num = Math.random()* 100;

    driver.findElement(webdriver.By.id('create_link')).click();
    driver.sleep(3000);
    driver.findElement(webdriver.By.id('issuetype-field')).click();
    driver.findElement(webdriver.By.linkText("Bug")).click();
    driver.sleep(3000);
        driver.findElement(webdriver.By.id('summary')).sendKeys('I found a bug!');
    //driver.sleep(5000);
    driver.findElement(webdriver.By.id('description')).sendKeys('This bug is really bad and we need to fix this ASAP');
    driver.findElement(webdriver.By.id('create-issue-submit')).click();
}


function TC_FindBug () {

    driver.findElement(webdriver.By.id('find_link')).click();
    driver.findElement(webdriver.By.id('Reported by Me ')).click();

};


TC_Login();
TC_Create();

//TC_FindBug();