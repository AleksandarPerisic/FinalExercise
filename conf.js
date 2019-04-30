let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
let Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    
    seleniumAddress: 'http://localhost:4444/wd/hub',

    directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    multiCapabilities: [{
        browserName: 'chrome'
    },
    {
        browserName: 'firefox'
    }],

    /*capabilities:{
        browserName: 'chrome'
    },*/

    chromeDriver:'./divers/ChromeDriver 74.0.3729.6/chromedriver.exe',

    geckoDriver:'./divers/GeckoDriver v0.24.0/geckodriver.exe',

    params:{
        login:{
            user:"aleksandar.perisic@outlook.com",
            password:"nbaca1108"
        }
    },
    
    baseUrl: 'https://www.shownieuws.nl/',

    specs: ['./newtests/homepage.spec.js',
            './newtests/signin.happy.flow.spec.js'
    ],

    SELENIUM_PROMISE_MANAGER: false,
    
    jasmineNodeOpts: {
        print: function() {}, 
        showColors: true, 
    },
    
    onPrepare: () => {
        
        browser.ignoreSynchronization = true;

        browser.manage().window().maximize();

        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            }
        }));

        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
              savePath: '\screenshots'
            })
          );
    }
};

