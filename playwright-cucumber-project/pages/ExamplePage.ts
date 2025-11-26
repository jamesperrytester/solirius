import { Page } from '@playwright/test';

export class ExamplePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://example.com');
  }

  async getTitle() {
    return this.page.title();
  }
}