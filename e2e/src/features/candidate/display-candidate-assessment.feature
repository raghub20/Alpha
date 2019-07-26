Feature: Display candidate assessment feature
###########################################
#     Desktop testcases
###########################################

@43
Scenario: Verify the candidate assessment section fields accessability
When User will click on candidate tab
And User will open candidate assessment window whose status is "Pending Vanline Quote" and name as "Beal, Christopher"
And User will wait for candidate assessment grid to load
Then User will view firstname
And User will view lastname
And User will view email
And User will view level
And User will view business unit
And User will view departure
And User will view destination
And User will view no of rooms
And User will view no of childrens

@43
Scenario: Verify by default update button is disabled
When User will click on candidate tab
And User will open candidate assessment window whose status is "Pending Vanline Quote" and name as "Beal, Christopher"
Then User will verify update button is "disabled"

@43
Scenario: Verify the updated data is displaying in the candidate table
When User will click on candidate tab
And User will open table column section of candidates page
And User will wait until the table columns to load
And User will select the "Business Unit" from select column view for candidate page
And User will click on "OK" button of candidate page
And User will open candidate assessment window whose status is "Pending Vanline Quote" and name as "Beal, Christopher"
And User will update the business unit as "Loan"
And User will click on Update button
Then User will verify business unit column value is updated to "Loan"
Then User will wait for "5" seconds

