exports.config = {

    runner: 'local',

    specs: ["./../test/specs/**/*.tests.js"],

    specFileRetries: 1,

    maxInstances: 6,

    capabilities: [
        {
            maxInstances: 2,
            browserName: "chrome",
            "goog:chromeOptions": {
                args: [
                  // "--headless",
                    "--start-maximized"],
            },
            acceptInsecureCerts: true,
        },
        // {
        //     maxInstances: 2,
        //     browserName: "MicrosoftEdge",
        //     "ms:edgeOptions": {
        //         args: [
        //           // "--headless",
        //             "--start-maximized"],
        //     },
        //     acceptInsecureCerts: true,
        // },
        // {
        //     maxInstances: 2,
        //     browserName: "safari",
        //     acceptInsecureCerts: true,
        // }
    ],


    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'warn',

    bail: 0,

    // baseUrl: 'http://localhost:8080',

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,


    framework: 'mocha',

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },


}
