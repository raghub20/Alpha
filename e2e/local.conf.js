
let tags = process.env.CUCUMBER_TAGS || '';

exports.config = {
  framework: 'custom',
  directConnect: true,
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: [ '../e2e/src/features/**/*.feature'],
  SELENIUM_PROMISE_MANAGER: false,
  cucumberOpts: {
    require: ['../e2e/src/support/setup.ts', '../e2e/src/step_definitions/**/*.steps.ts'],
    tags: ['@regression'],
    strict: true,
    'dry-run': false,
    compiler: [ 'ts:ts-node/register' ]
  },
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
  onPrepare: async() => {
    require('ts-node').register({ project: 'e2e/src/tsconfig.json'});
    browser.ignoreSynchronization=true;
    browser.manage().window().maximize();
    browser.get('http://localhost:4200/');

  }

}