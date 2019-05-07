let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
let Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var chrome = [  './divers/ChromeDriver 74.0.3729.6/chromedriver.exe',
                './divers/ChromeDriver 73.0.3683.68/chromedriver.exe',
                './divers/ChromeDriver 2.46/chromedriver.exe'];
var firefox = [ './divers/GeckoDriver v0.24.0/geckodriver.exe',
                './divers/GeckoDriver v0.23.0/geckodriver.exe',
                './divers/GeckoDriver v0.22.0/geckodriver.exe'];
exports.config = {
    
    //seleniumAddress: 'http://localhost:4444/wd/hub',

    directConnect: true,

    multiCapabilities: [{
        browserName: 'chrome'
    },
    {
        browserName: 'firefox'
    }],

    chromeDriver:chrome[0],

    geckoDriver:firefox[0],

    params:{
        reg:{
            email:"aleksandar.perisic@outlook.com",
            name:"Aleksandar",
            lastname:"Perisic",
            password:"nbaca1108"
        }
    },
    
    baseUrl: 'https://www.shownieuws.nl/',

    specs: ['./tests/home.spec.js',
            './tests/registration.spec.js',
            './tests/registration.facebook.happy.flow.spec.js',
            //'./tests/registration.email.happy.flow.spec.js',
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

