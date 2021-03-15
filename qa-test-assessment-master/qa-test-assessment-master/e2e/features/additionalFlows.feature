Feature: Additional flows for Star wars person and planets
    
    Scenario: Search by person name and search for planet by same name
        Given I navigate to "localhost"
        And I search for "Luke Skywalker" name
        When I search for same name on planet
        Then I should see Not Found

    Scenario: Search by planet name and search for person by same name
        Given I navigate to "localhost"
        And I search for "Alderaan" planet
        When I search for same name on person
        Then I should see Not Found

    Scenario: Search by person name and search for planet by same name
        Given I navigate to "localhost"
        And I search for "hil" name
        When I search for same name on planet
        Then I see "hil" planet details

