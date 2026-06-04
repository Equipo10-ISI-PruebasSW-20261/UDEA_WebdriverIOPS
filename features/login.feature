Feature: Para Bank Login Features

  Scenario Outline: As a user, I can log into the Parabank Accounts Service Page
    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a text saying <message>

    Examples: 
      | username          | password | message           |
      | invalidUsername   | password | Error!            |
      | john1             | demo     | Accounts Overview |

  Scenario: Login button is disabled when fields are empty
    Given I am on the login page
    And the username and password fields are empty
    Then the Login button should be disabled