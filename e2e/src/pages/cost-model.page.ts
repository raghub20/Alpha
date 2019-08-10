import { browser, element,by, ElementFinder, ExpectedConditions as EC } from "protractor";

export class CostModelPage {
    async navigateToCostModel(browserView = 'desktop'){
        //await browser.get("http://localhost:4200/#/project-alpha/cost-models");
        await browser.get("/#/project-alpha/cost-models");
        if(browserView.toLowerCase() == 'mobile') {
            browser.manage().window().setSize(500, 900);
        } else {
            browser.manage().window().maximize();
        }
    }

    getAddCostModelButton(){
        return element(by.xpath("//span[contains(text(),'Add Cost Model')]"));
    }

    getModelNameInput() {
        return element(by.css('input[formcontrolname="ModelName"]'));
    }
    
    getLevelDropDown() {
        return element(by.xpath('//mat-select[@formcontrolname="Level"]'));
    }
    
    getModelNameErrorMessage() {
        return element(by.xpath('//input[@placeholder="Model Name"]//ancestor::mat-form-field//mat-error'));
    }

    async getDepartureDropDown() {
        return element(by.xpath('//input[@formcontrolname="Departure"]'));
    }

    getLevelErrorMessage() {
        return element(by.xpath('//mat-select[@formcontrolname="Level"]//ancestor::mat-form-field//mat-error'));
    }
    async getDestinationDropDown() {
        return element(by.xpath('//input[@formcontrolname="Destination"]'));
    }
    async getCostModelNameSp() {
        return element(by.xpath('//input[@placeholder="Model Name"]//ancestor::mat-form-field//mat-error'));
    }

    getDepartureErrorMessage() {
        return element(by.xpath('//input[@formcontrolname="Departure"]//ancestor::mat-form-field//mat-error'));
    }

    getDestinationErrorMessage() {
        return element(by.xpath('//input[@formcontrolname="Destination"]//ancestor::mat-form-field//mat-error'));
    }

    async selectLevel(optionVal) {
        let el = await element(by.xpath('//*[@class="cdk-overlay-pane"]//mat-option//span[@class="mat-option-text"][contains(text(), "' + optionVal +'")]')); 
        await browser.wait(EC.elementToBeClickable(el), 10000).then(() => {
            el.click();
        });
        //return element(by.css('.cdk-overlay-pane mat-option')).element(by.cssContainingText('mat-option-text', optionVal)).click();
    }

    async selectDeparture(optionVal) {
        let el = await element(by.xpath('//*[@class="cdk-overlay-pane"]//mat-option//span[@class="mat-option-text"][contains(text(), "' + optionVal +'")]')); 
        return await browser.wait(EC.elementToBeClickable(el), 10000).then(() => {
            return el.click();
        });
    }

    async selectDestination(optionVal) {
        let el = await element(by.xpath('//*[@class="cdk-overlay-pane"]//mat-option//span[@class="mat-option-text"][contains(text(), "' + optionVal +'")]')); 
        return await browser.wait(EC.elementToBeClickable(el), 10000).then(() => {
            return el.click();
        });
    }

    getCostRangeFor(type) {
        return element(by.cssContainingText('.mat-expansion-panel-header-title', type))
        .element(by.xpath('ancestor::mat-expansion-panel-header')).element(by.tagName('mat-panel-description'));
    }

    getServiceText(costType, description) {
        return element(
            by.xpath('//mat-panel-title[contains(text(), "' + costType + '")]//ancestor::mat-expansion-panel//p[text()="' + description + '"]'));
    }


   
}