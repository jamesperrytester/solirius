import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CalculateHolidayEntitlementPage } from '../pages/CalculateHolidayEntitlementPage';

let holidayPage: CalculateHolidayEntitlementPage;

Given('I am on the {string} page', async function (url: string) {
  holidayPage = new CalculateHolidayEntitlementPage(this.page);
  await holidayPage.goto();
  await expect(await holidayPage.getTitle()).toContain('Calculate holiday entitlement - GOV.UK');
  await holidayPage.clickStartNowButton();
});

When('I proceed to answer does the employee work irregular hours or for part of the year', async function () {
  await holidayPage.doesTheEmployeeWorkIrregularHoursOrForPartOfTheYearElementsVisible();
  await holidayPage.continueAndErrorValidation();
  await holidayPage.clickYesButton();
  await holidayPage.clickContinueButton();
});

When('I proceed to answer when does the leave year start', async function (dataTable) {
  const details = dataTable.rowsHash();
  await holidayPage.whenDoesTheLeaveTearStartElementsVisible();
  await holidayPage.continueAndErrorValidation();
  await holidayPage.errorValidationConfirmDayMonthYear();
  await holidayPage.fillLeaveYearStartData(details);
  await holidayPage.clickContinueButton();
});

Then('I proceed to answer is the holiday entitlement based on', async function () {
  await holidayPage.isTheHolidayEntitlementBasedOnElementsVisible();
  await holidayPage.continueAndErrorValidation();
  await holidayPage.clickHoursWorkedPerWeekButton(); // would cover other radio buttons with similar functions / unique scenario's
  await holidayPage.clickContinueButton();
});

Then('I proceed to answer do you want to work out holiday', async function () {
  await holidayPage.doYouWantToWorkOutHolidayElementsVisible();
  await holidayPage.continueAndErrorValidation();
  await holidayPage.clickForAFullLeaveYearButton(); // would cover other radio buttons with similar functions / unique scenario's
  await holidayPage.clickContinueButton();
});

Then('I proceed to answer number of hours worked per week', async function () {
  await holidayPage.numberOFHoursWorkedPerWeekElementsVisible();
  await holidayPage.continueAndErrorValidation();
 await holidayPage.errorValidationHoursPerWeekConfirm();
  await holidayPage.fillNumberOFHoursWorkedPerWeek(); // would cover other radio buttons with similar functions / unique scenario's
  await holidayPage.clickContinueButton();
});

Then('I proceed to answer number of days worked per week', async function () {
  await holidayPage.numberOFDaysWorkedPerWeekElementsVisible();
  await holidayPage.continueAndErrorValidation();
  await holidayPage.errorValidationDaysPerWeekConfirm();
  await holidayPage.fillNumberOFDaysWorkedPerWeek(); // would cover other radio buttons with similar functions / unique scenario's
  await holidayPage.clickContinueButton();

});

Then('the system should display the correct holiday entitlement', async function () {
  await holidayPage.informationBasedOnYourAnswersElementsVisible();
  // Native Playwright summary answer checks
  const expectedSummary = {
    'Does the employee work irregular hours or for part of the year?': 'Yes',
    'When does the leave year start?': '1 February 2024', 
    'Is the holiday entitlement based on:': 'hours worked per week',
    'Do you want to work out holiday:': 'for a full leave year',
    'Number of hours worked per week?': '40.5',
    'Number of days worked per week?': '5.0',
  };
  for (const [question, answer] of Object.entries(expectedSummary)) {
    const row = this.page.locator('.govuk-summary-list__row').filter({
      has: this.page.locator('.govuk-summary-list__key', { hasText: question })
    });
    await expect(row.locator('.govuk-summary-list__value')).toHaveText(answer);
  }
});



