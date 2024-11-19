exports.config = {
  runner: "local",

  specs: [
    // "./../test/specs/login.test.js",
    //"./../test/specs/boards.test.js",
    //"./../test/specs/list_cards.test.js",
    "./../test/specs/user_profile_edit.js",
    "./../test/specs/workspace_edit.js",


  ],

  //specFileRetries: 2,

  maxInstances: 10,

  capabilities: [
    {
      maxInstances: 2,
      browserName: "chrome",
      "goog:chromeOptions": {
        args: [
          //"--headless",
          "--start-maximized",
          "--disable-gpu",
          "--disable-dev-shm-usage",
        ],
      },
      acceptInsecureCerts: true,
    },
    // {
    //   maxInstances: 2,
    //   browserName: "firefox",
    //   "moz:firefoxOptions": {
    //     args: [
    //       //"--headless",
    //     ],
    //   },
    //   acceptInsecureCerts: true,
    // },

    // {
    //     maxInstances: 2,
    //     browserName: "safari",
    //     acceptInsecureCerts: true,
    // }
  ],

  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: "warn",

  bail: 0,

  // baseUrl: 'http://localhost:8080',

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  framework: "mocha",

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
