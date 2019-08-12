Feature: Validate fields available for candidate needs assessment
To validate the fields available for candidate needs assessment

  Background: 
    Given The candidate is on the needs assessment home page
  
  @Desktop

  Scenario: To validate all input fields for candidate needs assessment
    Then The candidate sees a mean to indicate if anyone else is relocating
     And The candidate sees a mean to indicate number of relocating members
     And The candidate sees a mean to input departure address 
     And The candidate sees a mean to input Destination State and City
     And The candidate sees a mean to input Homeowner or Renter information
     And The candidate sees a mean to indicate type of home
     And The candidate sees a mean to input # of Rooms
      

  Scenario: To verify destination state and city is prepopulated
    When The candidate clicks on the Destination State and City
    Then The candidate sees prepopulated list of State and City

#   Scenario: To verify departure address is mandatory
#     When The candidate clears address field and clicks outside the field
#     Then The candidate sees You must enter departure address error message

  Scenario: To verify back arrow displays previous page and displays previously selected values 
    When The candidate answers if anyone else is relocating
     And The candidate moves to next and clicks back button
    Then The candidate sees the previously selected values in if anyone else is relocating
     And The candidate answers number of relocating members
     And The candidate moves to next and clicks back button
    Then The candidate sees the previously selected values in number of relocating members
     And The candidate answers departure address
     And The candidate moves to next and clicks back button
    Then The candidate sees the previously selected values in departure address
     And The candidate answers Destination State and City
     And The candidate moves to next and clicks back button
    Then The candidate sees the previously selected values in Destination State and City
     And The candidate answers Homeowner or Renter information
     And The candidate moves to next and clicks back button
    Then The candidate sees the previously selected values in Homeowner or Renter information
     And The candidate answers type of home
     And The candidate moves to next and clicks back button
    Then The candidate sees the previously selected values in type of home




 @Mobile

    Scenario: To validate all input fields for candidate needs assessment in mobile view
    Then The candidate sees a mean to indicate if anyone else is relocating in mobile view
     And The candidate sees a mean to indicate number of relocating members in mobile view
     And The candidate sees a mean to input departure address in mobile view
     And The candidate sees a mean to input Destination State and City in mobile view
     And The candidate sees a mean to input Homeowner or Renter information in mobile view
     And The candidate sees a mean to indicate type of home in mobile view
     And The candidate sees a mean to input # of Rooms in mobile view
   


  Scenario: To verify destination state and city is prepopulated in mobile view
    When The candidate clicks on the Destination State and City in mobile view
    Then The candidate sees prepopulated list of State and City in mobile view

#   Scenario: To verify departure address is mandatory in mobile view
#     When The candidate clears address field and clicks outside the field in mobile view
#     Then The candidate sees You must enter departure address error message in mobile view

  Scenario: To verify back arrow displays previous page and displays previously selected values  in mobile view
    When The candidate answers if anyone else is relocating in mobile view
     And The candidate moves to next and clicks back button in mobile view
    Then The candidate sees the previously selected values in if anyone else is relocating in mobile view
     And The candidate answers number of relocating members in mobile view
     And The candidate moves to next and clicks back button in mobile view
    Then The candidate sees the previously selected values in number of relocating members in mobile view
     And The candidate answers departure address in mobile view
     And The candidate moves to next and clicks back button in mobile view
    Then The candidate sees the previously selected values in departure address in mobile view
     And The candidate answers Destination State and City in mobile view
     And The candidate moves to next and clicks back button in mobile view
    Then The candidate sees the previously selected values in Destination State and City in mobile view
     And The candidate answers Homeowner or Renter information in mobile view
     And The candidate moves to next and clicks back button in mobile view
    Then The candidate sees the previously selected values in Homeowner or Renter information in mobile view
     And The candidate answers type of home in mobile view
     And The candidate moves to next and clicks back button in mobile view
    Then The candidate sees the previously selected values in type of home in mobile view