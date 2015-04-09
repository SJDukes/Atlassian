
var GetURLS = require('../V2/GlobalWebPages/GetURLS');
var Helper = require('../V2/Helper.js');
//var LoginPage = require('../V2/GlobalWebPages/LoginPage');
//var CreateIssuePage = require('../V2/GlobalWebPages/CreateIssuePage');
//var SearchBar = require('../V2/GlobalWebPages/SearchBar');


function TC_CreateNewBugInJIRA () {
    var num = Math.floor((Math.random() * 1000) + 1);
    var findNum = num+'test';


  Helper.call ();
    self = this;
        self.driver = self.GetDriver();
        self.webdriver = self.GetWebDriver();


   GetURLS.OpenJira();

//   LoginPage.GetLoginButton();
//   LoginPage.GetUsernameField('sfsteph82@gmail.com');
//   LoginPage.GetPasswordField('32974282sc');
//   LoginPage.GetSubmitButton();
//
//   CreateIssuePage.CreateNewItem();
//   CreateIssuePage.ItemDetails('Bug','I found a very bad bug! '+ num+'test', 'This bug is very bad, it makes JIRA crash!! Please fix ASAP')
//
//   SearchBar.SearchForBug(findNum);
//   LoginPage.Logout();

}

//Run the test
TC_CreateNewBugInJIRA();


