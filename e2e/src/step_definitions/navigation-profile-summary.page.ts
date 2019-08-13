import { browser, element, by, ExpectedConditions as EC } from 'protractor';

export class NavigationProfile  {

    async get() {
        await browser.manage().window().maximize();
       return await browser.get('/#/project-alpha/approved-moves');   
       //return browser.get('http://localhost:4200/#/project-alpha');   
    }

    async getCostModelTab() {
        let el = await element(by.css('a[ng-reflect-router-link="cost-models"] span'));
        return browser.wait(EC.elementToBeClickable(el), 12000).then(() => {
            return el;
        });
    }

    async getCandidateTab() {
        let el = await element(by.css('a[ng-reflect-router-link="candidate-profiles"] span'));
        console.log("Candidate tab =============" + el);
        return browser.wait(EC.elementToBeClickable(el), 12000).then(() => {
            return el;
        });
    }

    async getApprovedMovesTab() {
        let el = await element(by.css('a[ng-reflect-router-link="approved-moves"] span'));
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
