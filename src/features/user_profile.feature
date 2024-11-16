Feature: User profile management

  Scenario: Edit user profile

    Given I login with valid credentials
    When I click 'account' icon
    And I click 'manage account'
    And I click 'your job title' item
    And I insert 'trainee AQA'
    And I click 'your organization' item
    And I insert 'EPAM'
    Then I see 'trainee AQA' and 'EPAM' is displayed