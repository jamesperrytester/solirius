
import { Before, After, AfterAll } from '@cucumber/cucumber';
import { chromium, firefox, webkit, Browser, Page } from 'playwright';
import fs from 'fs';

let browser: Browser;
let page: Page;

Before(async function () {
  const browserType = process.env.BROWSER || 'chromium';

  switch (browserType) {
    case 'firefox':
      browser = await firefox.launch({ headless: true });
      break;
    case 'webkit':
      browser = await webkit.launch({ headless: true });
      break;
    default:
      browser = await chromium.launch({ headless: false });
  }

  const context = await browser.newContext();
  page = await context.newPage();
  this.page = page;
});

After(async function () {
  await browser.close();
});


AfterAll(async function () {
  // Ensure reports folder exists
  if (!fs.existsSync('reports')) {
    fs.mkdirSync('reports');
  }
  // JSON reports should be configured via cucumber.json or CLI arguments
  // Example: --format json:reports/cucumber-report.json
});
