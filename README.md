# 🧪 Test automation task

## Overview

This automation task was completed within a strict 3-hour timebox 

- ✅ Full test logic for **1 scenario - Calculate Holiday Entitlement** using Playwright with Cucumber
- ✅ Enhanced `package.json` scripts to support targeted test execution

> **Note:** You can run these tests locally using PowerShell commands detailed below


## Test Scenarios Overview

### Scenario 1 – Calculate Holiday Entitlement
This scenario automates the calculation of holiday entitlement for an employee using the UK government website. The test covers:

- Navigating to the holiday entitlement calculator page.
- Answering whether the employee works irregular hours or part of the year.
- Entering the leave year start date (01/02/2024).
- Selecting the basis for holiday entitlement (e.g., hours worked per week).
- Specifying the type of holiday calculation (full leave year).
- Entering the number of hours and days worked per week.
- Verifying that the system displays the correct holiday entitlement summary.

---

## 🧰 Prerequisites

- **Node.js** v20 or higher
- **npm** (bundled with Node.js)
- Run `npm install` to install dependencies
- No need to manually install browsers — Playwright handles this automatically

---

## 🧪 Running Tests via PowerShell

- Ensure the path to run tests against is >> C:\Users\userName\solirius\playwright-cucumber-project

### Run All Tests (All Browsers, Headed Mode)
```bash
npm run test:all       
```

### Running Tests headless

- Change headless mode in `support/hooks.ts` file to 'false':
```typescript

`  switch (browserType) {
    case 'firefox':
      browser = await firefox.launch({ headless: true });
      break;
    case 'webkit':
      browser = await webkit.launch({ headless: true });
      break;
    default:
      browser = await chromium.launch({ headless: true });
  }``

```

### Run All Tests on a Specific Browser
```bash
npm run test:chromium   # Chromium    ------ I recommend to run tests with this command
npm run test:firefox    # Firefox
npm run test:webkit     # WebKit
```

## 🥒 Cucumber, Page Object Model (POM), and Reusable Functions

**Cucumber** is used for Behavior-Driven Development (BDD), allowing you to write human-readable feature files that describe test scenarios in plain English. Each step in a scenario maps to a step definition in code, making tests easy to understand and maintain.

**Page Object Model (POM)** is a design pattern that encapsulates page interactions and locators in dedicated classes (e.g., `CalculateHolidayEntitlementPage`). This abstraction:
- Keeps test logic separate from UI details.
- Makes tests more maintainable and less brittle to UI changes.
- Allows you to reuse page actions across multiple scenarios.

**Reusable Functions** are implemented in the POM to avoid code duplication and improve reliability. For example:
- Methods like `validateSummaryAnswers`, and `errorValidationConfirmDayMonthYear` centralize common actions and assertions.
- Step definitions call these POM methods, ensuring consistent and DRY test logic.

**Benefits:**
- Easy to update tests when the UI changes (just update the POM).
- Cleaner, more readable step definitions.
- Robust, maintainable, and scalable test automation.

---
