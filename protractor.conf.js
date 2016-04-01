exports.config = {
    baseUrl: "http://localhost:3000",
    capabilities: { 'browserName': 'chrome' },
    framework: 'jasmine',
    jasmineNodeOpts: {},
    restartBrowserBetweenTests: false,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['app/**/*.e2e.spec.js'],
    // Special option for Angular2, to test against all Angular2 applications
    // on the page. This means that Protractor will wait for every app to be
    // stable before each action, and search within all apps when finding
    // elements.
    useAllAngular2AppRoots: true
};
//# sourceMappingURL=protractor.conf.js.map