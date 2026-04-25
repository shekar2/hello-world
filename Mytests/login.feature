Feature: Login Functionality
  As a registered user
  I want to be able to log in to my account
  So that I can access my account features

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter email "varakalashekar2799@gmail.com" and password "Varakala@2799"
    And I click the login button
    Then I should see the home page

  Scenario: Failed login with invalid credentials
    Given I am on the login page
    When I enter email "invalid@example.com" and password "wrongpassword"
    And I click the login button
    Then I should see an error message
