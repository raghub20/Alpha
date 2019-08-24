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

@test
Scenario: Update the candidate first name and last name 
    When User will click on Candidate tab to update the candidate
    Then User will click on "Maturity, Matthew" candidate to update the candidate first and last names
    And User will enter first name as "David" for candidate page
    And User will enter last name as "Warner" for candidate page
    And User will click on update button
    Then User will search for "Warner, David"
    And User will verify "Warner, David" is showing in the candidate table
    
#@Desktop
#Scenario: To verify The update user can update fields in the candidate update page
#    When The update user clears First Name field and The update user moves to Next Field
#    Then The update user shown with error message You must enter first name
#    Then The update user enters special characters in the firstname
#    Then The update user shown with error message Special characters not allowed
#    Then The update user enters valid username

#Scenario: To verify the Last Name field in the candidate update page is required
#    When The update user clears Last Name field and The update user moves to Next Field
#    Then The update user shown with error message You must enter last name
#    Then The update user enters special characters in the lastname
#    Then The update user shown with error message Special characters not allowed
#    Then The update user enters valid Last Name

#Scenario: To verify the email field in the candidate update page is required
#    When The update user clears email field and The update user moves to Next Field
#    Then The update user shown with error message You must enter email
#    Then The update user enters Invalid Email
#    Then The update user shown with error messageenter valid email
#    Then The update user enters Valid Email

#Scenario: To verify The update user can update level field in the candidate update page
#    When The update user updates level field
#    Then The update user selects a new value

#Scenario: To verify The update user can update Bussiness unit in the candidate update page
#    When The update user clears Bussiness Unit
#    Then The update user can enter a new value in Bussiness Unit

#Scenario: To verify The update user able to update Departure
#    When The update user clears departure field
#    Then The update user is able to enter or select departure field

#Scenario: To verify The update user able to update Destination
#    When The update user clears destination field and The update user moves to Next Field
#    Then The update user shown with error message You must enter destinaiton
#    Then The update user is able to enter or select destination field