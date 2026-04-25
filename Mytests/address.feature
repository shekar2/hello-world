Feature: Add Address
  As a registered user
  I want to add a new address to my address book
  So that I can use it for future orders

  Scenario: Add a new address with valid details
    Given I am on the add address page
    When I fill in the address form with the following details:
      | firstName | Varakala                               |
      | lastName  | Shekar                                 |
      | address1  | 3-146/2                                |
      | address2  | Nagarjuna Hills,Almasguda,BN Reddy     |
      | city      | Hyderabad                              |
      | postcode  | 500097                                 |
      | country   | India                                  |
      | zone      | Telangana                              |
    And I click Continue to save address
    Then my address should be created successfully
    And I should see an address success message
