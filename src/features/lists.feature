Feature: Lists management

  Scenario: Create a list

    Given I login with valid credentials
    When I click on 'some' board title
    And I click 'add another list'
    And I insert 'new list' title
    And I click button 'add list'
    Then I can see 'new list' on the 'some' board page