
const reporter = require('cucumber-html-reporter');

function generateReport(browser) {
  const options = {
    theme: 'bootstrap',
    jsonFile: `reports/${browser}-cucumber-report.json`,
    output: `reports/${browser}-cucumber-report.html`,
    reportSuiteAsScenarios: true,
    launchReport: false,
    metadata: {
      "Browser": browser,
      "Platform": process.platform,
      "Executed": "Local"
    }
  };
  reporter.generate(options);
}

module.exports = generateReport;
