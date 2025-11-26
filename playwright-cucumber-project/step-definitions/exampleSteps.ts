
import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ExamplePage } from '../pages/ExamplePage';

let examplePage: ExamplePage;

Given('the user navigates to {string}', async function (url: string) {
  examplePage = new ExamplePage(this.page);
  await examplePage.goto();
});

Then('the page title should contain "Playwright"', async function () {
  const title = await examplePage.getTitle();
  expect(title).toContain("Example Domain");
});
