Feature: Lists/cards management

  Background:
    Given I login with valid credentials

  Scenario: Create a list

    When I click on 'new' board title
    And I click 'add another list'
    And I insert 'new list' title
    And I click button 'add list'
    But I click 'close' button for creating new list
    Then I can see 'new list' on the 'new' board page

  Scenario: Create a card

    When I click 'add a card' button
    And I insert 'new card' in the title form
    And I click 'add card' button
    But I click 'close' button for creating new card
    Then I can see 'new card' card in the 'new list'

  Scenario: Card filtering

    When I click 'add a card' button
    And I insert 'second one' in the title form
    And I click 'add card' button
    But I click 'close' button for creating new card
    And I click 'filter cards' icon
    And I enter 'new card' into keyword input
    Then I can see number of founded cards
