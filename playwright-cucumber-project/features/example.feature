
Feature: Example Playwright Test
  Scenario: Open Playwright homepage
    Given the user navigates to "https://playwright.dev"
    Then the page title should contain "Playwright"
