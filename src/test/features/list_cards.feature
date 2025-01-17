@Lists/cards_management
Feature: Lists/cards management


  Scenario: Create a list

    Given I login with valid credentials
    When I click on 'new' board title
    And I click 'add another list'
    And I insert 'new list' title
    And I click button 'add list'
    But I click 'close' button for creating new list
    Then I can see 'new list' on the 'new' board page

  Scenario: Create a card

    Given I open boards page
    When I click on 'new' board title
    When I click 'add a card' button
    When  I insert new card in the title form
    And I click 'add card' button
    But I click 'close' button for creating new card
    Then I can see 'new card' card in the 'new list'

  @delete_list
  Scenario: Card filtering

    Given I open boards page
    When I click on 'new' board title
    And I click 'add a card' button
    And I insert second one in the title form
    And I click 'add card' button
    But I click 'close' button for creating new card
    And I click 'filter cards' icon
    And I enter 'second one' into keyword input
    Then I can see number of founded cards
