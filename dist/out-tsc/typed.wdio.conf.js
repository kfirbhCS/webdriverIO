"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const allure_reporter_1 = __importDefault(require("@wdio/allure-reporter"));
const fs_1 = __importDefault(require("fs"));
const kill_port_1 = __importDefault(require("kill-port"));
const rimraf_1 = __importDefault(require("rimraf"));
const wdio_video_reporter_1 = __importDefault(require("wdio-video-reporter"));
const debugPort = 5859;
const path_1 = __importDefault(require("path"));
const downloadDir = path_1.default.join(process.cwd(), 'tempDownload');
const globlBugArray = [];
/**
 * will return the number of current browsers based
 * on the env.GRID environment variables
 */
function getNumOfBrowsers() {
    // we wish to execute on the grid
    if (process.env.GRID === '1') {
        if (process.env.NBROWSERS !== undefined) {
            TestLogger.getGeneralLogger().info('#Browsers :' + process.env.NBROWSERS);
            return Number(process.env.NBROWSERS);
        }
        return 4;
    }
    else {
        // local execution single browsers
        return 1;
    }
}
function createDistFolder() {
    if (!fs_1.default.existsSync('dist')) {
        fs_1.default.mkdirSync('dist');
    }
}
function createLogsFolder() {
    if (!fs_1.default.existsSync('logs')) {
        fs_1.default.mkdirSync('logs');
    }
}
function createScreenshotsFolder() {
    if (!fs_1.default.existsSync('Screenshots')) {
        fs_1.default.mkdirSync('Screenshots');
    }
}
const config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    //
    // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
    // on a remote machine).
    debug: process.env.DEBUG === '1',
    execArgv: process.env.DEBUG === '1' ? [`--inspect-brk=127.0.0.1:${debugPort}`] : [],
    runner: 'local',
    specs: [
        './tests/**/*.spec.ts',
    ],
    suites: {},
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called. Notice that, if you are calling `wdio` from an
    // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
    // directory is where your package.json resides, so `wdio` will be called from there.
    //
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    // tslint:disable-next-line: no-object-literal-type-assertion
    capabilities: [{
            // maxInstances can get overwritten per capability. So if you have an in-house Selenium
            // grid with only 5 firefox instances available you can make sure that not more than
            // 5 instances get started at a time.
            'maxInstances': getNumOfBrowsers(),
            'browserName': 'chrome',
            'browserVersion': '79.0.3945.117',
            'goog:chromeOptions': {
                w3c: false,
                args: [
                    '--use-gpu-in-tests',
                    '--window-size=1920,1080',
                    '--allow-http-background-page',
                    '--allow-running-insecure-content',
                    '--allow-insecure-localhost',
                    '--no-sandbox',
                    '--disable-web-security',
                    '--disable-popup-blocking',
                    '--disable-features=EnableEphemeralFlashPermission'
                ],
                prefs: {
                    'download': {
                        prompt_for_download: false,
                        default_directory: downloadDir,
                    },
                    'profile.managed_default_content_settings.popups': 2,
                    'profile.managed_default_content_settings.notifications': 2,
                    'profile': {
                        content_settings: {
                            'popups': 2,
                            'exceptions.plugins.*,*.setting': 1
                        }
                    },
                    'loggingPrefs': {
                        driver: 'TRACE',
                        browser: 'TRACE'
                    },
                }
            }
        }],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error
    logLevel: 'info',
    outputDir: 'logs_wdio',
    //
    // Warns when a deprecated command is used
    deprecationWarnings: true,
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    // baseUrl: '',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 30000,
    //
    // Default timeout in milliseconds for request
    // if Selenium Grid doesn't send response
    connectionRetryTimeout: 90000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    services: process.env.DOCKER === '1' ? ['docker', 'intercept'] : ['selenium-standalone', 'intercept'],
    dockerOptions: process.env.DOCKER === '1' ? {
        image: 'selenium/standalone-chrome',
        healthCheck: 'http://localhost:4444',
        options: {
            p: ['4444:4444'],
            e: ['TEST_ENV=staging', 'DEBUG=0'],
            v: [],
        }
    } : undefined,
    /// drivers you wish to install
    seleniumInstallArgs: {
        drivers: {
            chrome: { version: '83.0.4103.39' }
        }
    },
    // drivers you wish to use
    seleniumArgs: {
        drivers: {
            chrome: { version: '2.43' },
        }
    },
    hostname: process.env.GRID === '1' ? '' : undefined,
    port: process.env.GRID === '1' ? 443 : undefined,
    path: process.env.GRID === '1' ? '/wd/hub' : undefined,
    protocol: process.env.GRID === '1' ? 'https' : 'http',
    maxInstances: 10,
    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: https://webdriver.io/docs/frameworks.html
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'mocha',
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter.html
    /* reporters: ["spec", ["allure", {
       disableWebdriverStepsReporting: true,
       outputDir: "allure-results",
     }],
     ],*/
    reporters: [
        ['junit', {
                outputDir: 'logs/junit',
                outputFileFormat(options) {
                    return `results-${options.cid}.xml`;
                }
            }],
        [wdio_video_reporter_1.default, {
                saveAllVideos: false,
                videoSlowdownMultiplier: 5,
                videoRenderTimeout: 60,
            }],
        ['allure', {
                outputDir: 'allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: true,
            }],
    ],
    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        compilers: [
            'tsconfig-paths/register'
        ],
        timeout,
        ui: 'bdd',
    },
    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    // onPrepare: function (config, capabilities) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    beforeSession() {
        try {
            process.env.DEBUG === '1' ? beforeLogger.info('DEBUG ON') : beforeLogger.info('DEBUG OFF');
            // buildBugsCollection().then(()=> {TestLogger.getGeneralLogger().info('OK')});
            createScreenshotsFolder();
            createDistFolder();
        }
        catch (err) {
            beforeLogger.error(` failure in before session phase ${err}`);
        }
    },
    onPrepare() {
        try {
            if (process.env.GRID === undefined || process.env.GRID !== '1') {
                const folders = ['_results_', 'ScreenShots', 'allure-report', 'allure-results', 'logs', 'logs_wdio', 'dist'];
                folders.forEach((folder) => {
                    prepareLogger.info(`checking ${folder}`);
                    if (fs_1.default.existsSync(folder)) {
                        try {
                            rimraf_1.default(`${folder}/*`, function () {
                                prepareLogger.info(`${folder} was cleared`);
                            });
                        }
                        catch (err) {
                            prepareLogger.error(`${folder} was failed ${err}`);
                        }
                    }
                });
                if (process.env.DEBUG === '1') {
                    beforeLogger.info(`kill process on port : ${debugPort}`);
                    kill_port_1.default(debugPort).then(() => {
                        beforeLogger.info(`port ${debugPort} should be cleared`);
                    });
                }
            }
        }
        catch (err) {
        }
    },
    /**
     * Hook that gets executed before the suite starts
     * @param {Object} suite suite details
     */
    beforeSuite(suite) {
        suite.testLogger = new TestLogger(suite.title);
        ThreadLocalStorage.set(async_hooks.executionAsyncId(), suite);
        suite.testLogger.info('----SUITE STARTS: ' + suite.title + '-----------');
    },
    /**
     * Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
     * @param {Object} test test details
     */
    beforeTest(test) {
        try {
            const folders = test.file.split('/');
            // the folder of executed file will represent the feature
            const feature = folders[folders.length - 2];
            // the spec file will represent the story
            const story = folders[folders.length - 1].replace('.spec.ts', '');
            // Add environment variables to report
            allure_reporter_1.default.addEnvironment('Tested environment', process.env.TEST_ENV);
            allure_reporter_1.default.addEnvironment('Tested Remotely ?', process.env.GRID === '1');
            allure_reporter_1.default.addFeature(feature);
            allure_reporter_1.default.addStory(story);
            allure_reporter_1.default.addEnvironment('Application base url', this.baseUrl);
            test.testLogger.info('----METHOD STARTS: ' + test.title + '-----------');
            test.testLogger.info('--- SESSION ID: ---- ' + browser.sessionId + '-----------');
            if (this.hostname) {
                test.testLogger.info('Grid node Address ' + browser.gridTestSession(browser.sessionId).proxyId);
            }
        }
        catch (err) {
            test.testLogger.error(`failure on before mothod pahse ${err}`);
        }
    },
    /**
     * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
     * beforeEach in Mocha)
     */
    beforeHook() {
    },
    /**
        * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
        * afterEach in Mocha)
        */
    afterHook() {
    },
    /**
     * Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
     * @param {Object} test test details
     */
    afterTest() {
    },
    /**
     * Hook that gets executed after the suite has ended
     * @param {Object} suite suite details
     */
    afterSuite(suite) {
    },
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    afterCommand(commandName, args, result, error) {
    },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    after() {
    },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    afterSession() {
    },
    /**
     * Gets executed after all workers got shut down and the process is about to exit.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} cfg wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
    onComplete(exitCode, cfg, capabilities, results) {
    }
};
exports.config = config;
//# sourceMappingURL=typed.wdio.conf.js.map