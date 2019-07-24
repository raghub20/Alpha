@regression
Feature: Login as a client contact to the application

#########################################
#        Desktop version testcases
#########################################

Scenario: Verify the login page fields visiblity in web browser
When User will open login page in "web" mode
Then User will see username input field
And User will see password input field
And User will see remember me checkbox
And User will see login button
And User will see forgot password link


Scenario: Verify successful login in web browser
When User will open login page in "web" mode
When User will enter username as "admin"
And User will enter password as "admin"
And User will click on login button
Then User will verify login is success

#########################################
#        Mobile version testcases
#########################################

Scenario: Verify the login page fields visiblity in mobile version
When User will open login page in "mobile" mode
Then User will see username input field
And User will see password input field
And User will see remember me checkbox
And User will see login button
And User will see forgot password link

Scenario: Verify successful login in mobile version browser
When User will open login page in "mobile" mode
When User will enter username as "admin"
And User will enter password as "admin"
And User will click on login button
Then User will verify login is success