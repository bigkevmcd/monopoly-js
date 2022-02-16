Feature: Monopoly Game
  Scenario: Player Movement
    Given player "A" on "The Angel Islington"
    When the player rolls a 2 and 1
    Then they land on "Pentonville Road"
