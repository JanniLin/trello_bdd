Feature: Login functionality

  Background:
    Given I am on the login page

  Scenario: Login with valid credentials
    When I click the login button
    And I see the modal
    And I insert email
    And I click 'continue' button
    And I insert the password
    And I click 'submit' button
    Then I see logo Trello is displayed

  Scenario: Create a board
    When I login with valid credentials
    And I am on the boards page
    And I click on the 'create new board' area
    And I see the modal
    And I insert board title 'some'
    And I click 'create' button
    Then I can see title 'some' in the list of boards

  Scenario: Search for a board
    When I login with valid credentials
    And I am on the boards page
    And I insert board title 'some' into search input
    And I click found board 'some'
    And 'some' board page is opened
    Then I can see the title of the board 'some'


  Scenario: Create a list
    When I login with valid credentials
    And I am on the boards page
    And I click on 'some' board
    And I click 'add another list'
    And I insert 'new list' title
    And I click button 'add list'
    Then I can see 'new list' on the 'some' board page






  Scenario: Create a card
    When I login with valid credentials
    And I am on the boards page
    And I click on 'some' board
    And I click 'add a card' button
    And I insert 'first' in the title form
    And I click 'add card' button
    Then I can see 'first' card in the 'new list'

  Scenario: Card filtering
    When I login with valid credentials
    And I am on the boards page
    And I click on 'some' board
    And I click 'filter cards' icon
    And I can see filters form
    And I enter 'first' into keyword input
    And I can see number of founded cards
    Then I click 'clear all' button

  Scenario: Edit user profile
    When I login with valid credentials
    And I am on the boards page
    And I click 'account' icon
    And I click 'manage account'
    And 'manage profile' page is opened
    And I click 'your job title' item
    And I insert 'trainee AQA'
    And I click 'your organization' item
    And I insert 'EPAM'
    And I click 'your location' item
    Then I insert 'Ukraine, Kharkiv'

  Scenario: Edit Workspace
    When I login with valid credentials
    And I am on the boards page
    And I click 'settings' button
    And 'workspace settings' page is opened
    And I click workspace visibility 'change' button
    And I can see select workspace visibility window
    And I click 'public'
    Then I can see 'public' appeared in workspace visibility