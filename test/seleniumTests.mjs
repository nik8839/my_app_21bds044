// const { Builder, By, until } = require('selenium-webdriver');
// const { expect } = require('chai');
// require('chromedriver');


import { Builder, By } from 'selenium-webdriver';
import { expect } from 'chai';
import 'chromedriver';


describe('Node.js Application Tests', function() {
    let driver;

    // Increase the test timeout, as WebDriver may take some time to initialize
    this.timeout(30000);

    before(async () => {
        // Initialize the WebDriver
        driver = new Builder().forBrowser('chrome').build();
    });

    after(async () => {
        // Quit the WebDriver session
        await driver.quit();
    });


    it('should load the homepage and check the text content', async () => {
        await driver.get('http://localhost:3000'); // replace with your app URL
        const bodyText = await driver.findElement(By.tagName('body')).getText();
        expect(bodyText).to.equal('welcomone to my node js application'); // Verify it matches the expected "Hello" output
    });
});
