import { browser, element, by, ExpectedConditions as EC, ElementFinder, promise } from 'protractor';

export class NavigationProfile  {

    get(): promise.Promise<any> {
        return browser.get('/#/project-alpha');
    }

    getCostModelTab(): ElementFinder {
        return element(by.cssContainingText('a.mat-tab-link.ng-star-inserted','Cost Models'));
    }

    getCandidateTab(): ElementFinder {
        return element(by.cssContainingText('a.mat-tab-link.ng-star-inserted','Candidates'));
    }

    getApprovedMovesTab(): ElementFinder {
        return element(by.cssContainingText('a.mat-tab-link.ng-star-inserted','Approved Moves'));
    }

    getCreateCostModelButton(): ElementFinder {
        //return element(by.partialButtonText('Create Cost Model'));
        return element(by.cssContainingText('button','Add Cost Model'));
    }

    getCandidateAddButton(): ElementFinder {
        return element(by.tagName('app-candidate-profile')).element(by.partialButtonText('Add'));   
    }

    getApprovedMovesSectionHeader():ElementFinder {
        return element(by.css('app-authorized-move section h2'));
    }


}
