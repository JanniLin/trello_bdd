@Boards_management
Feature: Boards management

  Scenario: Create a board

    Given I login with valid credentials
    When I click on the 'create new board' area
    And I insert board title 'board'
    And I click 'create' button
    Then I can see title 'board' in the list of boards


  @board_delete
  Scenario: Search for a board

    Given I open search page
    When I insert 'board' board title
    And I click found board 'board'
    Then I can see the title of the board 'board'