const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    showPassed: true,
    showFailed: true,
    showSkipped: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    reportPageTitle: 'Cypress Automation Report',
    reportFilename: 'Automation-Report',
    consoleLogs: true,
    code: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: "https://www.saucedemo.com/",
  },
});
