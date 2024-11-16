Feature: Login functionality

  Scenario: Login with valid credentials
    Given I am on the login page
    When I click the login button
    And I see the modal
    And I insert email
    And I click 'continue' button
    And I insert the password
    And I click 'submit' button
    Then logo 'Trello' is displayed