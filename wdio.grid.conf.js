var merge = require('deepmerge'),
wdioConf = require('./wdio.conf.js').config;
wdioConf.capabilities=[{
  // maxInstances can get overwritten per capability. So if you have an in-house Selenium
  // grid with only 5 firefox instances available you can make sure that not more than
  // 5 instances get started at a time.
  maxInstances: 5,
  //
  browserName: 'chrome',
  chromeOptions: {
    args: ['window-size=2880,1800']
  }
}]

wdioConf.specs=[
  './test/fileUpload.spec.ts'
]
wdioConf.suites = {
  login: [
      './test/login.spec.ts',
  ],
  otherFeature: [
      // ...
  ]
}
wdioConf.hostname = 'va1-p0-shub-01.ctcolo.dom',
wdioConf.port=4444,
wdioConf.path = '/wd/hub',
wdioConf.maxInstances= 10
exports.config=wdioConf