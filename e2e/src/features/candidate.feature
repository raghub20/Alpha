Feature: Candidate page automated testcases features
   This feature file contains automated testcases of functional and validation testcases. 

#################################################################
# Desktop testcases
#################################################################

@197
Scenario: Verify the Status Date and Invitation Sent Date fields date format
   Given User will open the candidate page in desktop mode
   When User will click on Select Column button
   And User will "Unselect" the "Level, Departure, Destination" from select column view
   And User will "Select" the "Status Date, Invitation Sent Date" from select column view
   And User will click on "OK" button
   Then User will verify status date format as "YYYY-MM-DD"
   Then User will verify Invitation Sent Date format as "YYYY-MM-DD"


#################################################################
# Mobile testcases
#################################################################

@197
Scenario: Verify the Status Date and Invitation Sent Date fields date format
   Given User will open the candidate page in mobile mode
   When User will click on Select Column button
   And User will "Unselect" the "Level, Departure, Destination" from select column view
   And User will "Select" the "Status Date, Invitation Sent Date" from select column view
   And User will click on "OK" button
   Then User will verify status date format as "YYYY-MM-DD"
   Then User will verify Invitation Sent Date format as "YYYY-MM-DD"