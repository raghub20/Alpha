import { browser, element, by } from 'protractor';

export class NavigationProfile  {

    get() {
        return browser.get("http://localhost:4200/");
       // return browser.get('/#/project-alpha');     
    }

    getCostModelTab() {
        return element(by.css('a[ng-reflect-router-link="cost-models"] span'));
    }

    getCandidateTab() {
        return element(by.css('a[ng-reflect-router-link="candidate-profiles"] span'));
    }

    getApprovedMovesTab() {
        return element(by.css('a[ng-reflect-router-link="approved-moves"] span'));
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
