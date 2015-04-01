#Requirements for running this automation

##PreReqs:
1. Node.js must be installed
    * https://nodejs.org/download/
2. Selenium Webdriver 2.0 must be installed
    * Selenium Can be founder here:
        * http://chromedriver.storage.googleapis.com/index.html?path=2.0/
    * Or you can use this to install it:
		* https://www.npmjs.com/package/selenium-webdriver
3. To use WebDriverJS for Node, you  need to ensure it can be found on your system PATH
    * More information can be found here:
        * https://code.google.com/p/selenium/wiki/WebDriverJs#WebDriverJS_User’s_Guide
4. You need to use an IDE to run the js file, I used WebStorm 7.0.3

##To run the test case to create a new issue in JIRA you just need to run the TC_LogBug.js file.
* All parameters are already provided in TC_Logbug.js
* TC_LogBug will use the GlobalFunctions.js file to complete the test

##TC_LogBug.js Steps:

1. Navigate to JIRA
2. Log into JIRA
3. Create a new JIRA issue, specifically a bug
4. Search for the bug VIA the Search Bar
5. Logout