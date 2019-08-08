Feature: Cost model page related testcases feature file

@Desktop
Scenario:Add cost model client side validation for manditory fields
    When User will navigate to cost model page
    And User will click the Add Cost Model Button
    Then User will verify model name error message displayed as "You must enter cost model name"
    And User will verify level error message displayed as "You must select level"
    And User will verify departure error message displayed as "You must select departure"
    And User will verify destination error message displayed as "You must select destination"


@Mobile
Scenario: Add cost model client side validation for manditory fields in mobile view
    When User will navigate to cost model page in mobile view
    And User will click the Add Cost Model Button
    Then User will verify model name error message displayed as "You must enter cost model name"
    And User will verify level error message displayed as "You must select level"
    And User will verify departure error message displayed as "You must select departure"
    And User will verify destination error message displayed as "You must select destination"

@142
Scenario: Desktop :: Cost model expansion section data displaying verification in desktop version
   When User navigate to cost model
   And User will click the Add Cost Model Button
   And User will enter model name as "Software Engineer"
   Then User will click the level
   And User will select the "Level 2" level from dropdown
   And User will select Departure as "TX, Dallas"
   And User will select Destination as "NJ, Newark"
   #The below step is just to activate the cost related section.
   And User will enter model name as ""
   And User will view the total  relocation cost range for single
   And User will view the total  relocation cost range for couple
   And User will view the total  relocation cost range for family

@142
Scenario: Mobile :: Cost model expansion section data displaying verification in mobile version
   When User will navigate to cost model page in mobile view
   And User will click the Add Cost Model Button
   And User will enter model name as "Sales Manager"
   Then User will click the level
   And User will select the "Level 3" level from dropdown
   And User will select Departure as "NY, Fushing"
   And User will select Destination as "NJ, Edison"
   #The below step is just to activate the cost related section.
   And User will enter model name as ""
   And User will view the total  relocation cost range for single
   And User will view the total  relocation cost range for couple
   And User will view the total  relocation cost range for family