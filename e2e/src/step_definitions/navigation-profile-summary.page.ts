import { browser, element, by, ExpectedConditions as EC } from 'protractor';

export class NavigationProfile  {

    get() {
        browser.manage().window().maximize();
       return browser.get('/#/project-alpha/approved-moves');   
       //return browser.get('http://localhost:4200/#/project-alpha');   
    }

    getCostModelTab() {
        let el = element(by.css('a[ng-reflect-router-link="cost-models"] span'));
        return browser.wait(EC.elementToBeClickable(el), 12000).then(() => {
            return el;
        });
        //return element(by.css('a[ng-reflect-router-link="cost-models"] span'));
    }

    getCandidateTab() {
        //return element(by.css('a[ng-reflect-router-link="candidate-profiles"] span'));
        let el = element(by.css('a[ng-reflect-router-link="candidate-profiles"] span'));
        return browser.wait(EC.elementToBeClickable(el), 12000).then(() => {
            return el;
        });
    }

    getApprovedMovesTab() {
        //return element(by.css('a[ng-reflect-router-link="approved-moves"] span'));
        let el = element(by.css('a[ng-reflect-router-link="approved-moves"] span'));
        return browser.wait(EC.elementToBeClickable(el), 12000).then(() => {
            return el;
        });
    }

    getCreateCostModelButton() {
        return element(by.partialButtonText('Create Cost Model'));
    }

    getCandidateAddButton() {
        return element(by.tagName('app-candidate-profile')).element(by.partialButtonText('Add'));   
    }

    getApprovedMovesSectionHeader() {
        return element(by.css('app-authorized-move section h2'));
    }
}
