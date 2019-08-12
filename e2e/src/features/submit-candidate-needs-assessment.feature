Feature: Validate candidate needs assessment data submission
To validate the candidate needs assessment data is submitted

  Background: 
    Given The candidate has entered needs assessment and is on review page
  
  @Desktop

  Scenario: To validate all input fields for candidate needs assessment
    Then The candidate updates if anyone else is relocating
     And The candidate updates number of relocating members
     And The candidate updates departure address 
     And The candidate updates input Destination State and City
     And The candidate updates Homeowner or Renter information
     And The candidate updates # of Rooms
     And The candidate updates estimated move date
     And The candidate updates preferred contact phone #
     And The candidate sees all the fields updated in review page

  Scenario: To verify departure address is mandatory
    When The candidate clears address field and clicks outside the field
    Then The candidate sees You must enter departure address error message

  Scenario: To verify calendar control for estimated move date
    When The candidate sees a calendar control for estimated move date
    Then The candidate selects a date and sees the date format as yyyy-mm-dd

  Scenario: To verify candidate is able to submit needs assessment data
    When The candidate clicks on submit
    Then The candidate is shown with Thank you for completing the Needs Assessment. We will alert you when your relocation package is ready. success message



@Mobile

    Scenario: To validate all input fields for candidate needs assessment in mobile view
    Then The candidate updates if anyone else is relocating in mobile view
     And The candidate updates number of relocating members in mobile view
     And The candidate updates departure address in mobile view
     And The candidate updates input Destination State and City in mobile view
     And The candidate updates Homeowner or Renter information in mobile view
     And The candidate updates # of Rooms in mobile view
     And The candidate updates estimated move date in mobile view
     And The candidate updates preferred contact phone # in mobile view
     And The candidate sees all the fields updated in review page in mobile view

  Scenario: To verify departure address is mandatory in mobile view
    When The candidate clears address field and clicks outside the field in mobile view
    Then The candidate sees You must enter departure address error message in mobile view

  Scenario: To verify calendar control for estimated move date in mobile view
    When The candidate sees a calendar control for estimated move date in mobile view
    Then The candidate selects a date and sees the date format as yyyy-mm-dd in mobile view

  Scenario: To verify candidate is able to submit needs assessment data in mobile view
    When The candidate clicks on submit in mobile view
    Then The candidate is shown with Thank you for completing the Needs Assessment. We will alert you when your relocation package is ready. success message in mobile view

