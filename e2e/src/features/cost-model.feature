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
Scenario: Cost model required field validations
   When User navigate to cost model
   Then User will click the Add cost model button
   Then User will click the level
   And User will select the level from dropdown
   And User will view the total  relocation cost range for single
   And User will view the total  relocation cost range for couple
   And User will view the total  relocation cost range for family
   And User will view the total  relocation cost range for single









   