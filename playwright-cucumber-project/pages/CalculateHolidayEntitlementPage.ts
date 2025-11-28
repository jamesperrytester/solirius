import { Page, expect, Locator } from '@playwright/test';

export class CalculateHolidayEntitlementPage {
  readonly page: Page;
  readonly startDateInput: Locator;
  readonly endDateInput: Locator;
  readonly startNowButton: Locator;
  readonly yesRadio: Locator;
  readonly noRadio: Locator;
  readonly continueButton: Locator;
  readonly irregularHoursHeading: Locator;
  readonly irregularHoursText: Locator;
  readonly errorProblemText: Locator;
  readonly errorAnswerLink: Locator;
  readonly leaveYearHeading: Locator;
  readonly leaveYearHelpText: Locator;
  readonly dayTextbox: Locator;
  readonly monthTextbox: Locator;
  readonly yearTextbox: Locator;
  readonly isHolidayEntitlementBasedOnHeading: Locator;
  readonly isTheHolidayEntitlementBasedOnElementsVisibleHelpText: Locator
  readonly daysWorkedPerWeekRadioBtn: Locator;
  readonly hoursWorkedPerWeekRadioBtn: Locator;
  readonly annualisedHoursRadioBtn: Locator;
  readonly compressedhoursRadioBtn: Locator;
  readonly shiftsRadioBtn: Locator;
  readonly doYouWantToWorkOutHolidayHeading: Locator;
  readonly forAFullLeaveYearRadioBtn: Locator;
  readonly forSomeoneStartingPartWayThroughLeaveYearRadioBtn: Locator;
  readonly forSomeoneLeavingPartWayThroughLeaveYearRadioBtn: Locator;
  readonly forSomeoneStartingAndLeavingPartWayThroughLeaveYearRadioBtn: Locator;
  readonly numberOfHoursWorkedPerWeekHeading: Locator;
  readonly numberOfHoursWorkedPerWeekHelpText: Locator;
  readonly numberOfHoursWorkedPerWeekInputField: Locator;
  readonly numberOfDaysWorkedPerWeekHeading: Locator;
  readonly numberOfDaysWorkedPerWeekHelpText: Locator
  readonly numberOfDaysWorkedPerWeekInputField: Locator;
  readonly informationBasedOnYourAnswersHeading: Locator;
  readonly statutoryEntitlementText: Locator;
  readonly errorProblemDayText: Locator;

  constructor(page: Page) {
    this.page = page;
    //
    this.startNowButton = page.getByRole('button', { name: /Start now/i });
    // Does the employee work irregular hours or for part of the year?
    this.irregularHoursHeading = page.getByRole('heading', { name: 'Does the employee work irregular hours or for part of the year?' });
    this.irregularHoursText = page.getByText('‘Irregular hours’ means the number of hours an employee works in a pay period often or always changes. ‘Part of the year’ means there are periods of at least a week in a leave year where the employee does not need to work and is not paid.');
    this.errorProblemText = page.getByText('There is a problem').first();
    this.errorProblemDayText = page.getByText('There are only 7 days in a week. Please check and enter a correct value.').first();
    this.errorAnswerLink = page.getByRole('link', { name: 'Please answer this question' });
    this.yesRadio = page.getByRole('radio', { name: 'Yes' });
    this.noRadio = page.getByRole('radio', { name: 'No' });
    this.continueButton = page.getByRole('button', { name: 'Continue' });
    // When does the leave year start?
    this.leaveYearHeading = page.getByRole('heading', { name: 'When does the leave year start?' });
    this.leaveYearHelpText = page.getByText('This is usually in the employment contract. If it is not and the job was started after 1 October 1998, the leave year will start on the 1st day of the job. If the job was started on or before 1 October 1998, the leave year will start on 1 October.');
    this.dayTextbox = page.getByRole('textbox', { name: 'Day' });
    this.monthTextbox = page.getByRole('textbox', { name: 'Month' });
    this.yearTextbox = page.getByRole('textbox', { name: 'Year' });
    //
    this.startDateInput = page.locator('input[name="start-date"]');
    this.endDateInput = page.locator('input[name="end-date"]');
    // Is the holiday entitlement based on:
    this.isHolidayEntitlementBasedOnHeading = page.getByRole('heading', { name: 'Is the holiday entitlement based on:' });
    this.isTheHolidayEntitlementBasedOnElementsVisibleHelpText = page.getByText('Check the employment contract if you’re not sure about the holiday entitlement.')
    this.daysWorkedPerWeekRadioBtn = page.getByRole('radio', { name: 'days worked per week' });
    this.hoursWorkedPerWeekRadioBtn = page.getByRole('radio', { name: 'hours worked per week' });
    this.annualisedHoursRadioBtn = page.getByRole('radio', { name: 'annualised hours' });
    this.compressedhoursRadioBtn = page.getByRole('radio', { name: 'compressed hours' });
    this.shiftsRadioBtn = page.getByRole('radio', { name: 'shifts' });
    // Do you want to work out holiday:
    this.doYouWantToWorkOutHolidayHeading = page.getByRole('heading', { name: 'Do you want to work out holiday:' });
    this.forAFullLeaveYearRadioBtn = page.getByRole('radio', { name: 'for a full leave year' });
    this.forSomeoneStartingPartWayThroughLeaveYearRadioBtn = page.getByRole('radio', { name: 'for someone starting part way through a leave year' });
    this.forSomeoneLeavingPartWayThroughLeaveYearRadioBtn = page.getByRole('radio', { name: 'for someone leaving part way through a leave year' });
    this.forSomeoneStartingAndLeavingPartWayThroughLeaveYearRadioBtn = page.getByRole('radio', { name: 'for someone starting and leaving part way through a leave year' });
  // Number of hours worked per week
    this.numberOfHoursWorkedPerWeekHeading = page.getByText('Number of hours worked per')
    this.numberOfHoursWorkedPerWeekHelpText = page.getByText('Include half-hours, for')
    this.numberOfHoursWorkedPerWeekInputField = page.getByRole('textbox', { name: 'Number of hours worked per week?' });
 // Number of days worked per week
    this.numberOfDaysWorkedPerWeekHeading = page.getByText('Number of days worked per')
    this.numberOfDaysWorkedPerWeekHelpText = page.getByText('We need this to calculate how many hours are worked in an average day. Include half-days, for example 3.5.')
    this.numberOfDaysWorkedPerWeekInputField = page.getByRole('textbox', { name: 'Number of days worked per week?' });
 // Information based on your answers
    this.informationBasedOnYourAnswersHeading = page.getByRole('heading', { name: 'Calculate holiday entitlement' });
    this.statutoryEntitlementText = page.getByText('The statutory entitlement is');
  }

  async goto() {
    await this.page.goto('https://www.gov.uk/calculate-your-holiday-entitlement');
  }

  async getTitle() {
    return this.page.title();
  }

  async enterDetails(details: { [key: string]: string }) {
    if (details['DayMonthYear']) {
      await this.startDateInput.fill(details['DayMonthYear']);
    }
  }

  async clickStartNowButton() {
    await this.startNowButton.click();
  }

  async clickYesButton() {
    await this.yesRadio.click();
  }

  async clickNoButton() {
    await this.noRadio.click();
  }

  async clickContinueButton() {
    await this.continueButton.click();
  }

  async clickHoursWorkedPerWeekButton() {
    return this.hoursWorkedPerWeekRadioBtn.click();
  }

   async clickForAFullLeaveYearButton() {
    return this.forAFullLeaveYearRadioBtn.click();
  }

  async fillNumberOFHoursWorkedPerWeek() {
    return this.numberOfHoursWorkedPerWeekInputField.fill('40.5');
  }

    async fillNumberOFDaysWorkedPerWeek() {
    return this.numberOfDaysWorkedPerWeekInputField.fill('5');
  }

  async doesTheEmployeeWorkIrregularHoursOrForPartOfTheYearElementsVisible() {
    const elements = [
      this.irregularHoursHeading,
      this.irregularHoursText,
      this.yesRadio,
      this.noRadio,
      this.continueButton
    ];
    for (const el of elements) {
      await expect(el).toBeVisible();
    }
  }

  async continueAndErrorValidation() {
    await this.continueButton.click();
    await expect(this.errorProblemText).toBeVisible();
    await expect(this.errorAnswerLink).toBeVisible();
  }

  async whenDoesTheLeaveTearStartElementsVisible() {
    const elements = [
      this.leaveYearHeading,
      this.leaveYearHelpText,
      this.dayTextbox,
      this.monthTextbox,
      this.yearTextbox
    ];
    for (const el of elements) {
      await expect(el).toBeVisible();
    }
  }

  async fillLeaveYearStartData(details: { [key: string]: string }) {
    if (details['DayMonthYear']) {
      await this.dayTextbox.fill(details['DayMonthYear'].split('/')[0]); // Day
      await this.monthTextbox.fill(details['DayMonthYear'].split('/')[1]); // Month
      await this.yearTextbox.fill(details['DayMonthYear'].split('/')[2]); // Year
    }
  }

    async errorValidationConfirmDayMonthYear() {
    // Enter random text value in date fields
    await this.dayTextbox.fill('abc');
    await this.monthTextbox.fill('xyz');
    await this.yearTextbox.fill('!@#');
    // Confirm error is shown
    await this.continueButton.click();
    await expect(this.errorProblemText).toBeVisible();
    await expect(this.errorAnswerLink).toBeVisible();
  }

    async errorValidationHoursPerWeekConfirm() {
    //  1st scenario - text not accepted
    await this.numberOfHoursWorkedPerWeekInputField.fill('!@#fdsfsa');
    // Confirm error is shown
    await this.continueButton.click();
    await expect(this.errorProblemText).toBeVisible();
    await expect(this.errorAnswerLink).toBeVisible();
  }

      async errorValidationDaysPerWeekConfirm() {
    await this.numberOfDaysWorkedPerWeekInputField.fill('!@#fdsfsa');
    // Confirm error is shown
    await this.continueButton.click();
    await expect(this.errorProblemText).toBeVisible();
    await expect(this.errorAnswerLink).toBeVisible();
    await this.page.waitForLoadState('domcontentloaded'); 
     // 2nd scenario - boundary analysis - high value not accepted
    await this.numberOfDaysWorkedPerWeekInputField.fill('8');
    // Confirm error is shown
    await this.continueButton.click();
    await expect(this.errorProblemDayText).toBeVisible();
  }


  async isTheHolidayEntitlementBasedOnElementsVisible() {
    const elements = [
      this.isHolidayEntitlementBasedOnHeading,
      this.isTheHolidayEntitlementBasedOnElementsVisibleHelpText,
      this.daysWorkedPerWeekRadioBtn,
      this.hoursWorkedPerWeekRadioBtn,
      this.annualisedHoursRadioBtn,
      this.compressedhoursRadioBtn,
      this.shiftsRadioBtn
    ];
    for (const el of elements) {
      await expect(el).toBeVisible();
    }
  }

   async doYouWantToWorkOutHolidayElementsVisible() {
    const elements = [
      this.doYouWantToWorkOutHolidayHeading,
      this.forAFullLeaveYearRadioBtn,
      this.forSomeoneStartingPartWayThroughLeaveYearRadioBtn,
      this.forSomeoneLeavingPartWayThroughLeaveYearRadioBtn,
      this.forSomeoneStartingAndLeavingPartWayThroughLeaveYearRadioBtn
    ];
    for (const el of elements) {
      await expect(el).toBeVisible();
    }
  }

    async numberOFHoursWorkedPerWeekElementsVisible() {
    const elements = [
      this.numberOfHoursWorkedPerWeekHeading,
      this.numberOfHoursWorkedPerWeekHelpText,
      this.numberOfHoursWorkedPerWeekInputField
    ];
    for (const el of elements) {
      await expect(el).toBeVisible();
    }
  }

    async numberOFDaysWorkedPerWeekElementsVisible() {
    const elements = [
      this.numberOfDaysWorkedPerWeekHeading,
      this.numberOfDaysWorkedPerWeekHelpText,
      this.numberOfDaysWorkedPerWeekInputField
    ];
    for (const el of elements) {
      await expect(el).toBeVisible();
    }
  }

     async informationBasedOnYourAnswersElementsVisible() {
    const elements = [
      this.informationBasedOnYourAnswersHeading,
      this.statutoryEntitlementText
    ];
    for (const el of elements) {
      await expect(el).toBeVisible();
    }
  }
  
    async validateSummaryAnswers(expectedSummary: { [key: string]: string }) {
      for (const [question, answer] of Object.entries(expectedSummary)) {
        const row = this.page.locator('.govuk-summary-list__row').filter({
          has: this.page.locator('.govuk-summary-list__key', { hasText: question })
        });
        await expect(row.locator('.govuk-summary-list__value')).toHaveText(answer);
      }
    }
}