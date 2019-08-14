import { browser, ExpectedConditions, element, ElementFinder,ElementArrayFinder, by, promise } from 'protractor';

export class CostModelPage {
    get() {
            return browser.get('/#/project-alpha/cost-models');
           // return browser.get('http://localhost:4200/#/project-alpha/cost-models');
    }

    getUser() {
        return new promise.Promise((resolve) => resolve('user')); // TODO: Find and return real user
    }

    getTitle() {
        return element(by.tagName('h1'));
    }


    //  #### Locators : Cost Model Page ###

    getCreateCostModelButtonEl(): ElementFinder {
        return element(by.xpath('//span[contains(text(),\'Create Cost Model\')]/..'));
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
        return element(by.xpath('//label[contains(text(),\'Model Name\')]/../..//input'));
    }

    getCostModelFormLevelDropDown(): ElementFinder {
        return element(by.xpath('//label/mat-label[contains(text(),\'Level\')]/../../../mat-select'));
    }

    getCostModelFormDepartureField(): ElementFinder {
        return element(by.xpath('//label[contains(text(),\'Departure\')]/../..//input'));
    }
    getCostModelFormDestinationField(): ElementFinder {
        return element(by.xpath('//label[contains(text(),\'Destination\')]/../..//input'));
    }
    getCostModelOptionText(value: string): ElementFinder {
        return element(by.xpath(`//span[contains(text(),'${value}')]`));
    }

    getCostModelFormSaveButtonEl(): ElementFinder {
        return element(by.xpath('//button[contains(text(),\'Save\')]'));
    }

    getCostModelFormCancelButtonEl(): ElementFinder {
        return element(by.xpath('//button//span[contains(text(),\'CANCEL\')]'));
    }

    getCostModelFormGenerateButtonEl(): ElementFinder {
        return element(by.xpath('//button//span[contains(text(),\'GENERATE COST MODEL\')]'));
    }

    getSearchTableFiledEl(): ElementFinder {
        return element(by.xpath('//input[contains(@placeholder, \'Search within table\')]'));
    }


    // >>> MISC elements
    getCostModelSnackBarNotification(): ElementFinder {
        return element(by.xpath('//simple-snack-bar/span[contains(text(),\'Due to seasonal changes, this cost model\')]'));
    }


}
