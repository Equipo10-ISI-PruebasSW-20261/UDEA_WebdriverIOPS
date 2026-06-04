Feature: Account Overview Features

    Background:
        Given I login with username john and password demo

    Scenario: Authenticated user consults account status
        And I am on the Accounts Overview page
        Then I should see all my accounts listed

        When I select account 12345
        Then I should see account 12345
        And I should see its current balance
        And I should see recent transactions

        When I select account 54321
        Then I should see account 54321
        And I should see its current balance
        And I should see recent transactions
        And the displayed information should be updated