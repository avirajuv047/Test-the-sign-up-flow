Feature: Signup page functionality

  Scenario Outline: Signup and Login
    Given I am on the signup page
    When I fill out the signup form with valid details
      | key        | value              |
      | email      | <email>            |
      | password   | <password>         |
      | firstName  | Manu               |
      | lastName   | Varma              |
    And I submit the form
    Then I should see a success message
    And Logout 
    And I am on the signin page
    Then I should be able to sign in with the new account
      | key        | value              |
      | email      | <email>            |
      | password   | <password>         |
    Examples:
      | email                | password      |
      | manuvarma14@gmail.com | TestPassword123 |
