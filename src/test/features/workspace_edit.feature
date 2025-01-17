@Workspace_management
Feature: Workspace management

  @visibility_private
  Scenario: Edit Workspace

    Given I login with valid credentials
    When I click 'settings' button
    And I click workspace visibility 'change' button
    And I click 'public' option
    And I click 'close popover' button
    Then I can see 'public' appeared in workspace visibility