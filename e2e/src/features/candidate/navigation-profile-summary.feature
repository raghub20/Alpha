Feature: Navigation Tabs in Profile Summary Page
   To verify client able to navigate to Cost Models, Candidates Then Authorized Moves

Background:
   Given User will open the alpha project in desktop mode

#@Desktop
@sprint_1
Scenario: To verify the mechanism to navigate to Cost Models
   When User will see the Cost Models tab
   And User will click on Cost Models tab
   And User will see Create Cost Model button in Cost Model page

@sprint_1
Scenario: To verify the mechanism to navigate to Candidates
When User will see the Candidate tab
Then User will click on Candidate tab 
And User will see Add button in Candidate page

@sprint_1
Scenario: To verify the mechanism to navigate to Approved Moves
When User will see the Approved Moves tab
Then User will click on Approved Moves tab
And User will see Approved Moves header





   