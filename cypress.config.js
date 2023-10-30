import { defineConfig } from "cypress";
import fs from "fs-extra";
import { configurePlugin } from "cypress-mongodb";

export default defineConfig({
  env: {
    mongodb: {
      uri: 'mongodb://127.0.0.1:27017',
      database: 'test'
    }
  },
  e2e: {
    experimentalStudio: true,
    viewportHeight: 900,
    viewportWidth: 1400,
    defaultCommandTimeout: 4000,
    baseUrl: 'http://5.189.186.217/',
    retries: {
      openMode: 1,
      runMode: 1
    },
    // specPattern: 'cypress/e2e/myTests/*.cy.js',
    setupNodeEvents(on, config) {
      on('task', {log(message) {console.log(message); return null }})
      on('task', {saveUrl(url) {fs.writeFileSync('url.json', JSON.stringify(url)); return null }})
      const newUrl = config.env.urlFromCli || 'http://5.189.186.217/'
      config.baseUrl = newUrl

      on("before:browser:launch", (browser, launchOptions) => {
        console.log(launchOptions.args);
        if (browser.name === "chrome") {
          launchOptions.args.push("--incognito");
        }
        return launchOptions;
      });

      configurePlugin(on)
   
      return config
    },
  },
});