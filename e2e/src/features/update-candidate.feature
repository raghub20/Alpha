@regression
Feature: Candidate profile updation by client

Background:
   Given User will open the alpha project to update the candidate

@Desktop
Scenario: Verify the inline validations for candidate update section
   When User will click on Candidate tab to validate error messages
   Then User will click on "Maturity, Matthew" candidate to validate error messages
   And User will clear first name
   And User will verify the first name error message as "You must enter first name"
   Then User will clear last name
   And User will verify the last name error message as "You must enter last name"
   Then User will enter first name as special characters for candidate page
   Then User will enter last name as special characters for candidate page
   And User will verify the first name error message as "Special characters are not allowed"
   And User will verify the last name error message as "Special characters are not allowed"

Scenario: Update the candidate first name and last name 
   When User will click on Candidate tab to update the candidate
   Then User will click on "Maturity, Matthew" candidate to update the candidate first and last names
   And User will enter first name as "David" for candidate page
   And User will enter last name as "Warner" for candidate page
   And User will click on update button
   Then User will search for "Warner, David"
   And User will verify "Warner, David" is showing in the candidate table
    
