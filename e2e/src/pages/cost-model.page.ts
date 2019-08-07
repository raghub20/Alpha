import { browser, element,by } from "protractor";

export class CostModelPage {
    async navigateToCostModel(browserView = 'desktop'){
       // await browser.get("http://localhost:4200/#/project-alpha/cost-models");
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
    
    async getLevelDropDown() {
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

    
   
}