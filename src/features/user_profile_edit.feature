Feature: User profile management

  Scenario: Edit user profile

    Given I login with valid credentials
    When I click 'account' icon
    And I click 'Profile and visibility'
    And I change username with 'yana_rusakova'
    And I click save button
    Then I see page url is changed