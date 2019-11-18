var merge = require('deepmerge'),
wdioConf = require('./wdio.conf.js').config;

wdioConf.capabilities=[{
  // maxInstances can get overwritten per capability. So if you have an in-house Selenium
  // grid with only 5 firefox instances available you can make sure that not more than
  // 5 instances get started at a time.

 /* 'chromeOptions': {
    'args': ['--no-sandbox', '--start-maximized', 'use-fake-ui-for-media-stream'],
    'prefs': {
      'profile.managed_default_content_settings.notifications': 1
    }
  },*/
  maxInstances: 5,
  //
  browserName: 'chrome'
}]
wdioConf.specs=[
  './test/CS/*.spec.js'
]
wdioConf.suites = {
  login: [
      './test/login.spec.ts',
  ],
  otherFeature: [
      // ...
  ]
}
wdioConf.maxInstances= 10
exports.config=wdioConf