Feature: View cost models created
    As a client contact, I want to view cost models created by me, so that I can manage the cost models.

Background: As a client contact I want to visit cost models tab
    Given I am a user who wants to add a cost model
    When I visit cost models tab

@desktop @wip
Scenario: View all column related to cost models
    Then I expect cost models table with below table headings
    | Table Headings    |
    | Cost Model Name   |
    | Level             |
    | Departure         |
    | Destination       |
    | Last Updated Date |
    | Expiration Date   |
    | Status            |

@wip
Scenario: Create a cost model user can not save until all data field are input
    Then I expect save button is only enabled after all below input
    | Input                | value                            |
    | Model Name  :        | Test Model Name                  |
    | Level       :        | Level 2 (100,001 to 250,000 USD) |
    | Departure   :        | NY, New York City                |
    | Destination :        | TX, Houston                      |
    | Generate Cost Mode : | click                            |

@wip
Scenario: Create a cost model user can save and view the summary
    Then I can create a cost model with below infomration
    | Input         | value                            |
    | Model Name  : | Test Model Name                  |
    | Level       : | Level 2 (100,001 to 250,000 USD) |
    | Departure   : | NY, New York City                |
    | Destination : | TX, Houston                      |

@wip
Scenario: Create a cost model user see the snack bar notification on save
    And I expect to see a snack bar notification after saving

@wip
Scenario: Create a cost model user can cancel the data entry
    And I expect to be able to cancel the data entry

@wip
Scenario: User can navigate to a cost model
    Then I can navigate to model name "Mid-Level Manager"


@mobile  @wip
Scenario: View all column related to cost models
    And I switch To Mobile View
    Then I expect cost models table with below table headings
    | Table Headings    |
    | Cost Model Name   |
    | Level             |
    | Departure         |
    | Destination       |
    | Last Updated Date |
    | Expiration Date   |
    | Status            |

@wip
Scenario: Create a cost model user can not save until all data field are input
    And I switch To Mobile View
    Then I expect save button is only enabled after all below input
    | Input                | value                            |
    | Model Name  :        | Test Model Name                  |
    | Level       :        | Level 2 (100,001 to 250,000 USD) |
    | Departure   :        | NY, New York City                |
    | Destination :        | TX, Houston                      |
    | Generate Cost Mode : | click                            |

@wip
Scenario: Create a cost model user can save and view the summary
    And I switch To Mobile View
    Then I can create a cost model with below infomration
        | Input         | value                            |
        | Model Name  : | Test Model Name                  |
        | Level       : | Level 2 (100,001 to 250,000 USD) |
        | Departure   : | NY, New York City                |
        | Destination : | TX, Houston                      |

@wip
Scenario: Create a cost model user see the snack bar notification on save
    And I switch To Mobile View
    And I expect to see a snack bar notification after saving

@wip
Scenario: Create a cost model user can cancel the data entry
    And I switch To Mobile View
    And I expect to be able to cancel the data entry

@wip
Scenario: User can navigate to a cost model
    And I switch To Mobile View
    Then I can navigate to model name "Mid-Level Manager"