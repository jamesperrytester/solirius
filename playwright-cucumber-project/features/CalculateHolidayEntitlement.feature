
Feature: Calculate Holiday Entitlement on the government website

    Scenario: Calculate holiday entitlement for an employee
        Given I am on the "Calculate your holiday entitlement" page
        And I proceed to answer does the employee work irregular hours or for part of the year
        When I proceed to answer when does the leave year start
           | Start Date | 01/02/2024 |
        And I proceed to answer is the holiday entitlement based on
        And I proceed to answer do you want to work out holiday
        # And I proceed to answer what was the employment end date
        #      | End Date | 01/02/2025 |
        # And I proceed to answer number of hours worked per week   
        # And I proceed to answer number of days worked per week   
        # Then the system should display the correct holiday entitlement
    