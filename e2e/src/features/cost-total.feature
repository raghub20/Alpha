Feature: Verify total recommended budget
To verify the total recommended budget

  Background: 
    Given The user clicks on a candidate record having ready for review status
  
  @Desktop

  Scenario: To verify total recommended budget
    When The client contact sees the candidate information
    Then The client verifies total recommended budget is sum of total cost and tax assistance cost

  Scenario: To verify total recommended budget when tax is unchecked
    When The client contact sees the candidate information
     And The client checks the tax assistance check box as false
    Then The client does not sees the tax amount 
    Then The client verifies total recommended budget is total cost

@Mobile

  Scenario: To verify total recommended budget in mobile view
    When The client contact sees the candidate information in mobile view
    Then The client verifies total recommended budget is sum of total cost and tax assistance cost in mobile view

  Scenario: To verify total recommended budget when tax is unchecked in mobile view
    When The client contact sees the candidate information in mobile view
     And The client checks the tax assistance check box as false in mobile view
    Then The client does not sees the tax amount in mobile view
    Then The client verifies total recommended budget is total cost in mobile view