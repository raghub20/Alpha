import { browser, ExpectedConditions, element, ElementFinder,ElementArrayFinder, by, promise } from 'protractor';

export class CostModelPage {

    get() {
        return browser.get('/#/project-alpha/cost-models');
    }

    getUser() {
        return new promise.Promise((resolve) => resolve('user')); // TODO: Find and return real user
    }

    getTitle() {
        return element(by.tagName('h1'));
    }


    //  #### Locators : Cost Model Page ###
    getCreateCostModelButtonEl(): ElementFinder {
        return element(by.cssContainingText('button','Add Cost Model'));
    }


    // >>> Cost Model Tables Elements -
    getAllCostModelTableHeadings(): ElementArrayFinder {    // Returning a list of elements
        return element.all(by.xpath('//th//button'));
    }

    getFirstCostModelTableRows(): ElementArrayFinder {    // Returning a list of elements
        return element.all(by.xpath('//tr[1]//td'));
    }


    getCostModelTableNameCellFor(value: string): ElementFinder {
        return element(by.xpath(`//td//span[contains(text(),'${value}')]`));
    }


    // >>> Add/Edit Cost Model Form
    getCostModelFormModelNameField(): ElementFinder {
        return element(by.id("mat-input-1"));
    }

    getCostModelFormLevelDropDown(): ElementFinder {
        return element(by.id('level'));
    }

    getCostModelFormDepartureField(): ElementFinder {
        return element(by.id('departure'));
    }
    getCostModelFormDestinationField(): ElementFinder {
        return element(by.id('destination'));
    }
    getCostModelOptionText(value: string): ElementFinder {
        return element(by.cssContainingText('span',value))
    }

    getCostModelFormSaveButtonEl(): ElementFinder {
        return element(by.cssContainingText('button','Save'))
    }

    getCostModelFormCancelButtonEl(): ElementFinder {
        return element(by.cssContainingText('button','CANCEL'))
    }

    getCostModelFormGenerateButtonEl(): ElementFinder {
        return element(by.cssContainingText('button','Save'))
    }

    getSearchTableFieldEl(): ElementFinder {
        return element(by.id('searchInput'));
    }


    // >>> MISC elements
    getCostModelSnackBarNotification(): ElementFinder {
        return element(by.className('cdk-overlay-container'));
    }

}
