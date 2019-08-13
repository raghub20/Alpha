@regression
Feature: Verify criteria used to determine the predicted budget range
To verify the presence of all the criteria to determine predicted budget range

  Background: 
    Given The user clicks on a candidate record having ready for review status
  
     @Mobile

    Scenario: To verify the working of tax assistance check box in mobile view
     When client sees tax assistance check box the client sees the checkbox is checked true by default in mobile view
     Then The client checks the tax assistance check box as false in mobile view
      And The client sees the checkbox is checked false in mobile view

    Scenario: To verify presence of buttons and icons in budget prediction in mobile view
     When The client contact sees the candidate information in mobile view
     Then The client sees "Show Budget Details" page in mobile view
      And The client sees "Approve" relocation budget in mobile view
      And The client sees share relocation budget icon in mobile view
      And The client sees "CANCEL" button in mobile view


   Scenario: To verify all the criteria to determine predicted budget range in mobile view
     When The client contact sees the candidate information in mobile view
     Then The client sees list of services in core services factored in calculation of the recommended budget in mobile view
      And The client sees total cost of core services in mobile view
      And The client sees total cost of flex services in mobile view
      And The client sees total recommended budget in mobile view
      And The client sees tax assistance and cost associated to tax assistance in mobile view
  

@Desktop
  
  Scenario: To verify the working of tax assistance check box
     When client sees tax assistance check box the client sees the checkbox is checked true by default
     Then The client checks the tax assistance check box as false
      And The client sees the checkbox is checked false
  
  Scenario: To verify presence of buttons and icons in budget prediction
     When The client contact sees the candidate information
     Then The client sees "Show Budget Details" page
      And The client sees "Approve" relocation budget
      And The client sees share relocation budget icon
      And The client sees "CANCEL" button

        Scenario: To verify all the criteria to determine predicted budget range
     When The client contact sees the candidate information
     Then The client sees list of services in core services factored in calculation of the recommended budget
      And The client sees total cost of core services
      And The client sees total cost of flex services
      And The client sees total recommended budget
      And The client sees tax assistance and cost associated to tax assistance


  
  
