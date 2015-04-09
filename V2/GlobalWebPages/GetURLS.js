/**
 * Created by sdukes on 3/27/15.
 */

module.exports = GetURLS;

var Helper = require('../../v2/Helper.js')


function GetURLS() {


}
//Function to get to main JIRA page
GetURLS.OpenJira = function () {
    var driver = Helper.GetDriver();

    driver.get('https://jira.atlassian.com/secure/Dashboard.jspa');
    driver.manage().window().maximize();
}
