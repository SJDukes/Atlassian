var GlobalFunctions = require('../Atlassian/GlobalFunctions');

function TC_CreateNewBugInJIRA () {
    var num = Math.floor((Math.random() * 1000) + 1);
    var findNum = num+'test';

    GlobalFunctions.OpenJira();
    GlobalFunctions.GetLoginButton();
    GlobalFunctions.Login('sjfdukes+auto@gmail.com', 'Danger@9');

    GlobalFunctions.CreateNewItem();
    GlobalFunctions.ItemDetails('Bug','I found a very bad bug! '+ num+'test', 'This bug is very bad, it makes JIRA crash!! Please fix ASAP')

    GlobalFunctions.SearchForBug(findNum);
    GlobalFunctions.Logout();
    GlobalFunctions.CloseBrowser();
}

//Run the test
TC_CreateNewBugInJIRA();


