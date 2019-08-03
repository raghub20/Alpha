import { browser, element, by, promise, ElementFinder } from 'protractor';
export class Budgetcriteria {
    
    get(): promise.Promise<any> {
        return browser.get('/#/project-alpha/candidate-profiles');
    }

    getCoreServices():ElementFinder{
        return element.all(by.css("div.corebenefit-section")).get(0).element(by.tagName("p"));
    }

    getCoreServicesbudget():ElementFinder{
        return element.all(by.css("div.corebenefit-section")).get(0).element(by.css("div.budget"));
    }

    getFlexservicebudget():ElementFinder{
        return element.all(by.css("div.corebenefit-section")).get(1).element(by.css("div.budget"));
    }

    getTotalRecommendedBudget():ElementFinder{
        return element.all(by.css("div.corebenefit-section")).get(2).element(by.css("div.total-budget"));
    }
    getTaxassistance():ElementFinder{
        return element(by.cssContainingText("span.mat-content","Include tax assistance"))
    }
    getTaxassistancebudget():ElementFinder{
        return element.all(by.css("mat-checkbox-label")).last().element(by.tagName("span"));
    }
    getTaxassistancecheckboxclick():ElementFinder{
        return element.all(by.css("div.mat-checkbox-inner-container")).last();
    }
    getTaxassistancecheckbox():ElementFinder{
        return element.all(by.css("input.mat-checkbox-input")).last();
    }
}