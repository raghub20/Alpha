Feature: Search Candidate
    As a client contact, I want to run a candidate search based on certain criteria,
    so that I can work on a specific candidate profile.

    Background: As a client contact I want to visit cost models tab
        # Given I am a user
        Given The user is on the candidate profile summary page

    @desktop
     Scenario Outline: User can perform a search using all available column information
         Then User can perform <columnName> search with <searchText>

         Examples:
             | columnName      | searchText                         |
             | 'Full Name'     | 'Maturity, Matthew'                |
             | 'Level'         | 'Level 2 (100,001 to 250,000 USD)' |
             | 'Departure'     | 'NJ, Nutley'                       |
             | 'Destination'   | 'TX, Austin'                       |
             | 'Status'        | 'Invitation Not Sent'              |
             | 'Email Address' | 'mathew.maturity@gmail.com'        |
             | 'Business Unit' | 'Human Resources'                  |
             | 'Created By'    | 'Matthew, Maturity'                |

     @desktop
     Scenario Outline: User can perform Partial search using search text begins with, contains
         Then User can perform Partial <columnName> search with <searchText>

         Examples:
             | columnName               | searchText    |
             | 'Full Name - Ends With'  | 'Matthew'     |
             | 'Level - Contains'       | '250,000 USD' |
             | 'Departure - Begin With' | 'NJ'          |
             | 'Destination - Contains' | 'Aust'        |

     @desktop
     Scenario: User can reset search criteria and return to default view of the page
         Then User exepct reset search return to default view of the page

     @Mobile
     Scenario Outline: User can perform a search using all available column information
         Then User can perform <columnName> search with <searchText> in mobile view

         Examples:
             | columnName      | searchText                         |
             | 'Full Name'     | 'Maturity, Matthew'                |
             | 'Level'         | 'Level 2 (100,001 to 250,000 USD)' |
             | 'Departure'     | 'NJ, Nutley'                       |
             | 'Destination'   | 'TX, Austin'                       |
             | 'Status'        | 'Invitation Not Sent'              |
             | 'Email Address' | 'mathew.maturity@gmail.com'        |
             | 'Business Unit' | 'Human Resources'                  |
             | 'Created By'    | 'Matthew, Maturity'                |

  @Mobile
     Scenario Outline: User can perform Partial search using search text begins with, contains
         Then User can perform Partial <columnName> search with <searchText> in mobile view

         Examples:
             | columnName               | searchText    |
             | 'Full Name - Ends With'  | 'Matthew'     |
             | 'Level - Contains'       | '250,000 USD' |
             | 'Departure - Begin With' | 'NJ'          |
             | 'Destination - Contains' | 'Aust'        |

 @Mobile
    Scenario: User can reset search criteria and return to default view of the page
        Then User exepct reset search return to default view of the page in mobile view
