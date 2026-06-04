Feature: Para Bank transfer Feature

  Background:
    Given I login with john and password demo

  Scenario Outline: As a user, I want to transfer funds between accounts
    When I go to transfer funds page
    When I transfer <amount> from the account <fromAccountId> to the account <toAccountId>
    Then The message should be <message>

    Examples:
      | fromAccountId | toAccountId | amount | message            |
      |         17229 |       17340 |    100 | Transfer Complete! |