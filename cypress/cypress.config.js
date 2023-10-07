import { defineConfig } from "cypress";
import fs from 'fs-extra'
import path from 'path'

export default defineConfig({
  e2e: {
    experimentalStudio: true,
    viewportWidth: 1440,
    viewportHeight: 1024,
    defaultCommandTimeout: 4000,
    // baseUrl: 'https://www.cypress.io/',
    retries: {
      openMode: 1,
      runMode: 1
    },
    // specPattern: 'cypress/e2e/myTests/*.cy.js',
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message)
          return null
        },
        saveUrls({ urls, filename }) {
          const filePath = path.join(config.fixturesFolder, `${filename}.json`)
          fs.outputJsonSync(filePath, { urls })
          return null
        }
      })

      const newUrl = config.env.ENV_URL || "https://www.guru99.com/"
      config.baseUrl = newUrl

      on("before:browser:launch", (browser, launchOptions) => {
        console.log(launchOptions.args)
        if (browser.name === "chrome") {
          launchOptions.args.push("--incognito")
        }
        return launchOptions
      });
      
      return config
    }
  },
})


