const { execSync } = require('child_process');
const generateReport = require('./generate-report');

const browsers = ['chromium', 'firefox', 'webkit'];

browsers.forEach(browser => {
  console.log(`\nRunning tests in ${browser.toUpperCase()}...\n`);
  process.env.BROWSER = browser;

  // Run tests and generate JSON report
  execSync(
    `npx cucumber-js --format json:reports/${browser}-cucumber-report.json`,
    {
      stdio: 'inherit',
      env: { ...process.env, BROWSER: browser }
    }
  );

  // Generate HTML report for this browser
  generateReport(browser);
});
