import { element, by } from 'protractor';

module.exports = {
    get input() {
        return element(by.id('query'));
    },
    get searchBtn() {
        return element(by.css('button'));
    },
    get firstCharacterName() {
        return element(by.css('app-character h6'));
    },
    get notFound() {
        return element(by.xpath('/html/body/app-root/div/div/div/div[1]'));
    },
    get planet() {
        return element(by.id('planets'));
    },
    get firstPlanetName() {
        return element(by.css('app-planet h6'));
    },
    get people() {
        return element(by.id('people'));
    }
};
