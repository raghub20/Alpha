 @regression
Feature: Monitor relocation journey from transferee profiles view
   As a client’s contact, I can view the all the transferee profiles created by me or assigned to my client #

Background: 
    Given User will navigate to approved moves tab
    
@Desktop
Scenario: Verify Full Name, Departure, Destination, Authorized, Status Date,Status headers are displayed
    Then User will verify "Full Name" header is displayed
    And User will verify "Departure" header is displayed
    And User will verify "Destination" header is displayed
    And User will verify "Status" header is displayed
    And User will verify "Authorized Amount" header is displayed
    And User will verify "Status Date" header is displayed
    And User will verify search box is displayed
    And User will click the Next Pages
 
Scenario Outline: Verify sorting of the data present in summary
   When User will do "<Sort Type>" sort of approved moves table by clicking on "<Header Name>" header
   Then User will verify the "<Sort Type>" sorted data for the header "<Header Name>"
   Examples:
   | Header Name               | Sort Type     |
   | Destination               | asceding      |
   | Destination               | descending    |
   | Departure                 | asceding      |
   | Departure                 | descending    |
   | Status                    | asceding      |
   | Status                    | descending    |
   |Authorized Amount          | asceding      |
   |Authorized Amount          | descending    |
   | Full Name                 | asceding      |
   | Full Name                 | descending    |
   |Status Date                |asceding       |   
   |Status Date                |descending     |

Scenario Outline: Verify Search functionality of approved moves
   When User will enter "<Search Item>" in search box
   Then User will verify "<Search Item>" is showing in approved moves table
   Examples:
   | Search Item |
   | 20,000      |


Scenario: Verify the Items per page functionality
   When User will select Item per page "5" for pagination 
   Then User will verify "5" items are displayed per page


@SR_157
Scenario: Verify the configuration of transferre profile summary view and default selected headers.
   When User will open table column section of approved moves page
   Then User will check columns are enabled as "false"
   | Column Name         |
   | Full Name           |
   | Status              |
   And User will check columns are enabled as "true"
   | Column Name         |
   |Authorized Amount    |
   | Departure           |
   | Destination         |
   | Status Date         |
   | Email               |
   | Level               |
   | Business Unit       |
   | Created By          |
   | Authorized By       |
And User will click on "OK" button
And User will verify "7" headers are displayed in the approved moves table

@SR_157
Scenario Outline: Verify the approved moves table headers based on the column section
   Given User will navigate to approved moves tab
   When User will open table column section of approved moves page
   And User will "<SelectOrNot>" the "<Columns>" from select column view
   And User will click on "OK" button
   Then User will verify "<Expected Header Count>" headers are displayed in the approved moves table
   Examples:
   | Columns                                                                                                       | Expected Header Count     | SelectOrNot |

   |                                                                                                                | 7                        | Select      |
   | Authorized Amount, Departure, Destination, Status Date                                                         | 3                        | Unselect    |
   | Status Date, Email, Level, Business Unit, Created By, Authorized By, Authorized Amount, Departure, Destination | 12                       | Select      |

@SR_157 
Scenario: Verify the approved moves default columns are checked after click on reset button
   When User will open table column section of approved moves page
   And User will "Select" the "Authorized Amount, Departure, Destination, Status Date" from select column view
   And User will click on RESET button
   Then User will check columns are "checked"
   |Column Name       |
   |Authorized Amount |
   | Departure        |
   | Destination      |
   |Status Date       |
   And User will click on "OK" button
   Then User will verify "7" headers are displayed in the approved moves table

@196
Scenario: Verify the Status Date format
   When User will open table column section of approved moves page
   And User will "Unselect" the "Authorized Amount, Departure, Destination" from select column view
   And User will click on "OK" button
   Then User will verify status date is in "YYYY-MM-DD" format

##################################################################
# Mobile testcases
##################################################################

Scenario: Mobile :: Verify the approved moves default headers are displaying or not
   Given User will navigate to approved moves tab in mobile mode
   Then User will verify "Full Name" header is displayed
   And User will verify "Departure" header is displayed
   And User will verify "Destination" header is displayed
   And User will verify "Status" header is displayed
   And User will verify "Authorized Amount" header is displayed
   And User will verify "Status Date" header is displayed
   And User will verify search box is displayed
   And User will click the Next Pages

Scenario Outline: Mobile :: Verify the approved moves table headers based on the column section
   Given User will navigate to approved moves tab in mobile mode
   When User will open table column section of approved moves page
   And User will "<SelectOrNot>" the "<Columns>" from select column view
   And User will click on "OK" button
   Then User will verify "<Expected Header Count>" headers are displayed in the approved moves table
   Examples:
   | Columns                                                                                                        | Expected Header Count |SelectOrNot |

   |                                                                                                                | 7                     | Select     |
   | Authorized Amount, Departure, Destination, Status Date                                                         | 3                     | Unselect   |
   | Status Date, Email, Level, Business Unit, Created By, Authorized By, Authorized Amount, Departure, Destination | 12                    | Select     |

Scenario: Verify the approved moves default columns are checked after click on reset button
   Given User will navigate to approved moves tab in mobile mode
   When User will open table column section of approved moves page
   And User will "Select" the "Authorized Amount, Departure, Destination, Status Date" from select column view
   And User will click on RESET button
   Then User will check columns are "checked"
   |Column Name       |
   |Authorized Amount |
   | Departure        |
   | Destination      |
   | Status Date      |
   And User will click on "OK" button
   Then User will verify "7" headers are displayed in the approved moves table

@196
Scenario: Mobile :: Verify the Status Date format
   Given User will navigate to approved moves tab in mobile mode
   When User will open table column section of approved moves page
   And User will "Unselect" the "Authorized Amount, Departure, Destination" from select column view
   And User will click on "OK" button
   Then User will verify status date is in "YYYY-MM-DD" format