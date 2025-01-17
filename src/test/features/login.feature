@Login_functionality
Feature: Login functionality

  Scenario: Login with valid credentials

    Given I am on the login page
    When I click the login button
    And I insert email
    And I click continue button
    And I insert password
    And I click submit button
    Then logo 'Trello' is displayed