import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CalculateHolidayEntitlementPage } from '../pages/CalculateHolidayEntitlementPage';

let holidayPage: CalculateHolidayEntitlementPage;

Given('I am on the {string} page', async function (url: string) {
  holidayPage = new CalculateHolidayEntitlementPage(this.page);
  await holidayPage.goto();
  await expect(await holidayPage.getTitle()).toContain('Calculate holiday entitlement - GOV.UK');
});

When('I proceed to answer does the employee work irregular hours or for part of the year', async function () {
  await holidayPage.clickStartNowButton();
  await holidayPage.doesTheEmployeeWorkIrregularHoursOrForPartOfTheYearElementsVisible();
  await holidayPage.continueAndErrorValidation();
  await holidayPage.clickYesButton();
  await holidayPage.clickContinueButton();
});

When('I proceed to answer when does the leave year start', async function (dataTable) {
  const details = dataTable.rowsHash();
  await holidayPage.whenDoesTheLeaveTearStartElementsVisible();
  await holidayPage.continueAndErrorValidation();
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

});

// Then('I proceed to answer what was the employment end date', async function (dataTable) {
//   const details = dataTable.rowsHash();
//   await holidayPage.whatWasTheEmploymentEndDateElementsVisible();
//   await holidayPage.continueAndErrorValidation();
//   await holidayPage.fillEmploymentEndDateData(details);
//   await holidayPage.clickContinueButton();
// });

// Then('I proceed to answer number of hours worked per week', async function () {

// });

// Then('I proceed to answer number of days worked per week', async function () {

// });

// Then('the system should display the correct holiday entitlement', async function () {
// // the result should match the expected entitlement for the given dates
// });


