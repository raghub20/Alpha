
const config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'), 
    directConnect : true,
    specs: ['../e2e/src/features/**/*.feature'],
    capabilities: {
        // Chrome
        browserName: 'chrome',
        chromeOptions: {
          args: [
            //'--headless',
            '--no-sandbox',
            '--disable-dev-shm-usage',
            '--disable-gpu',
            '--disable-extensions'
          ]
        }
    },
    cucumberOpts: {
        require: ['../e2e/src/support/setup.ts', '../e2e/src/step_definitions/**/*.steps.ts'],  // require setup and step definition files before executing features
        tags: ['@test'],                           // <string[]> (expression) only execute the features or scenarios with tags matching the expression
        strict: true,                       // <boolean> fail if there are any undefined or pending steps
        'dry-run': false,                   // <boolean> invoke formatters without executing steps
        compiler: [ 'ts:ts-node/register' ] // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    },
    onPrepare: async() => {
        require('ts-node').register({ project: 'e2e/src/tsconfig.json'});
        browser.manage().window().maximize();
    }
}

exports.config = config;