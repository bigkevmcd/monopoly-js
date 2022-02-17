Feature: Monopoly Game
  Scenario: Player Movement
    Given player "A" on "The Angel Islington"
    When the player rolls a 2 and 1
    Then they land on "Pentonville Road"

  Scenario: Player Movement
    Given player "B" on "The Angel Islington"
    When the player rolls a 6 and 3
    Then they land on "Pall Mall"

  Scenario: Passing through GO!
    Given player "B" on "Park Lane"
    And player "B" has a balance of £1000
    When the player rolls a 1 and 3
    Then they land on "Old Kent Road"
    And their balance is now £1200
    

  Scenario: Passing through GO!
    Given player "B" on "Park Lane"
    And player "B" has a balance of £1000
    When the player rolls a 1 and 2
    Then they land on "Go"
    And their balance is now £1200

  Scenario: Passing through GO!
    Given player "B" on "Go"
    And player "B" has a balance of £1000
    When the player rolls a 4 and 2
    Then they land on "The Angel Islington"
    And their balance is now £1000

  Scenario: Go to Jail
    Given player "C" on "Leicester Square"
    When the player rolls a 3 and 1
    Then they are moved immediately to "In Jail"
    And they do not pass through Go