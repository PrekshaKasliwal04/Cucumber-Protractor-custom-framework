const { Given, When, Then } = require('cucumber');
const { browser } = require('protractor');
const chai = require('chai');
chai.use(require('chai-as-promised'));

const searchFormPO = require('../page-objects/search-form.po');

Given('I navigate to {string}', { timeout: 60 * 1000 }, async (string) => {
    await browser.get('http://' + string + ':4200/');
    await browser.sleep(2000);
});

When('I search for {string} name', { timeout: 60 * 1000 }, async (string) => {
    await searchFormPO.input.sendKeys(string);
    await searchFormPO.searchBtn.click();
    await browser.sleep(2000);
});

When('I search for {string} planet', { timeout: 60 * 1000 }, async (string) => {
    await searchFormPO.planet.click();
    await searchFormPO.input.sendKeys(string);
    await searchFormPO.searchBtn.click();
    await browser.sleep(2000);
});

Then('I see {string} details', { timeout: 60 * 1000 }, async (string) => {
    await chai.expect(searchFormPO.firstCharacterName.getAttribute('innerText'))
        .to.eventually.contain(string);
});

Then('I should not see any details of {string}', { timeout: 60 * 1000 }, async (string) => {
    await chai.expect(searchFormPO.notFound.getAttribute('innerText'))
        .to.eventually.contain('Not found');
});

Then('I see {string} planet details', { timeout: 60 * 1000 }, async (string) => {
    await chai.expect(searchFormPO.firstPlanetName.getAttribute('innerText'))
        .to.eventually.contain(string);
});
Then('I should see Not Found', { timeout: 60 * 1000 }, async () => {

    await chai.expect(searchFormPO.notFound.getAttribute('innerText'))
        .to.eventually.contain('Not found');
}); 

When('I search for same name on planet', { timeout: 60 * 1000 }, async () => {
    await searchFormPO.planet.click();
    await searchFormPO.searchBtn.click();     
});
When('I search for same name on person', { timeout: 60 * 1000 }, async () => {
    await searchFormPO.people.click();
    await searchFormPO.searchBtn.click();     
});