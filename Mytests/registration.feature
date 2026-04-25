Feature: User Registration
  As a new user
  I want to be able to register for an account
  So that I can access the website features

  Scenario: Successful registration with valid details
    Given I am on the registration page
    When I fill in the registration form with the following details:
      | firstName      | Pallavi            |
      | lastName       | Varakala           |
      | email          | chepuripriyanka08@gmail.com |
      | telephone      | 9620125408         |
      | password       | Pallavi@123        |
      | confirmPassword| Pallavi@123        |
    And I select newsletter subscription
    And I accept the privacy policy
    And I click Continue to register
    Then my account should be created successfully
    And I should see a confirmation message
