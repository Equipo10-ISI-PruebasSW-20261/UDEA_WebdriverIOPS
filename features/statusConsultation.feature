Feature: Account Overview Features
    Scenario Outline: As an authenticated user, I can view account details
        Given I am logged into my bank account
        And I am on the Accounts Overview page
        When I select account <accountId>
        Then I should see account <accountId>
        And I should see its current balance

    ```
    Examples:
    | accountId |
    | 12345     |
    | 54321     |
    ```
