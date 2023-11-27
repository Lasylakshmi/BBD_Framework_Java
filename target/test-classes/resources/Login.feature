Feature: Login 
Login with correct credentials
Scenario: Login with correct credentials
Given Browser is opened
When user is navigated to URL
And user entered their username "Tester" and password "Test@123"
Then user successfully login into system

Scenario: Login with incorrect credentials
Given Browser is opened
When user is navigated to URL
And user entered their username "mercury" and password "mercury1"
Then user should not login into system