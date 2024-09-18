const { defineConfig } = require('cypress');
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const mochawesome = require('cypress-mochawesome-reporter/plugin');

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await preprocessor.addCucumberPreprocessorPlugin(on, config);
      mochawesome(on); // Ensure this matches the correct export
      on("file:preprocessor", browserify.default(config));
      return config;
    },
    specPattern: 'cypress/integration/**/*.feature',
    baseUrl: 'https://magento.softwaretestingboard.com/',
  },
});
