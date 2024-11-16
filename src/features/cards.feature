Feature: Cards management

  Background:
    Given I login with valid credentials
    When I click on 'some' board title

  Scenario: Create a card

    And I click 'add a card' button
    And I insert 'first' in the title form
    And I click 'add card' button
    Then I can see 'first' card in the 'new list'

  Scenario: Card filtering

    And I click 'filter cards' icon
    And I enter 'first' into keyword input
    Then I can see number of founded cards
