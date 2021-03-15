Feature: Search for a Star Wars character
    
    Scenario: Search by valid person name
        Given I navigate to "localhost"
        When I search for "Luke Skywalker" name
        Then I see "Luke" details

    Scenario: Search by Invalid person name
        Given I navigate to "localhost"
        When I search for "Invalid" name
        Then I should see Not Found

