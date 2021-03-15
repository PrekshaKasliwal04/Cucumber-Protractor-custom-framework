Feature: Search for a Star Wars Planets
    
    Scenario: Search by valid planet name
        Given I navigate to "localhost"
        When I search for "Alderaan" planet
        Then I see "Alderaan" planet details

    Scenario: Search by Invalid planet name
        Given I navigate to "localhost"
        When I search for "Invalid" planet
        Then I should see Not Found