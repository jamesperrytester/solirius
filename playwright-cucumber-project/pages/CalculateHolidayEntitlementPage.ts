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


  constructor(page: Page) {
    this.page = page;
    //
    this.startNowButton = page.getByRole('button', { name: /Start now/i });
    // Does the employee work irregular hours or for part of the year?
    this.irregularHoursHeading = page.getByRole('heading', { name: 'Does the employee work irregular hours or for part of the year?' });
    this.irregularHoursText = page.getByText('‘Irregular hours’ means the number of hours an employee works in a pay period often or always changes. ‘Part of the year’ means there are periods of at least a week in a leave year where the employee does not need to work and is not paid.');
    this.errorProblemText = page.getByText('There is a problem');
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
  }

  async goto() {
    await this.page.goto('https://www.gov.uk/calculate-your-holiday-entitlement');
  }

  async getTitle() {
    return this.page.title();
  }

  async enterDetails(details: { [key: string]: string }) {
    if (details['Start Date']) {
      await this.startDateInput.fill(details['Start Date']);
    }
    if (details['End Date']) {
      await this.endDateInput.fill(details['End Date']);
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
    if (details['Start Date']) {
      await this.dayTextbox.fill(details['Start Date'].split('/')[0]); // Day
      await this.monthTextbox.fill(details['Start Date'].split('/')[1]); // Month
      await this.yearTextbox.fill(details['Start Date'].split('/')[2]); // Year
    }
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

}