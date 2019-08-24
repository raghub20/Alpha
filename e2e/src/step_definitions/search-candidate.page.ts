import { browser, element, by, promise, ElementFinder, ElementArrayFinder } from 'protractor';

export class CandidatesSummary {
    get() {
         return browser.get('/#/project-alpha');
        // return browser.get('http://localhost:4200/#/project-alpha/candidate-profiles');
    }

    getUser() {
        return new promise.Promise((resolve) => resolve('user')); // TODO: Find and return real user
    }


    // ##################### Generic Page Actions for this Page
    async searchCandidateTable(searchText: string) {
        await this.getSearchTableFiledEl().sendKeys(searchText);
        await browser.sleep(2000);
    }

     async displayMaximumPaginationTableData(maxPageNo: string) {
        await this.getCandidateTablePaginationArraowEl().click();
        await this.getCandidateTablePaginationNumberEl(maxPageNo).click();
        await browser.sleep(2000);
    }

    async selectAllUnchekedColumn() {
        await this.getUncheckedTableColumnView().each(function (uncheckedColumn) {
            uncheckedColumn.click();
        });
        await this.getSelectColumnSaveButtonEl().click();
    }


   // #####################  Locators : Searching Candidate Table

    getCellEl(value: string): ElementArrayFinder {
        return element.all(by.xpath(`//table[@class=\'mat-table\']//td[.//text()[contains(., '${value}')]]`));
    }

    getALLCellEl(): ElementArrayFinder {
        return element.all(by.xpath(`//table[@class='mat-table']//td[.//text()[contains(., '')]]`));
    }

    getFullCandidateNameCellEl(value: string): ElementFinder {
        return element(by.xpath(`//table[@class=\'mat-table\']//td//span/strong[contains(text(),'${value}')]`));
    }

    getSearchTableFiledEl(): ElementFinder {
        return element(by.xpath('//input[contains(@placeholder, \'Search within table\')]'));
    }

    getCandidateTablePaginationArraowEl(): ElementFinder {
        return element(by.xpath('//div[@class=\'mat-select-arrow\']'));
    }
    getCandidateTablePaginationNumberEl(value: string): ElementFinder {
        return element(by.xpath(`//mat-option[contains(@id,'mat-option-')]//span[contains(text(),'${value}')]`));
    }

    // #####################  Locators : All Others on this page
    getCandidatesTabE1(): ElementFinder {
        return element(by.xpath('//span[contains(text(),\'Candidates\')]'));
    }

    getCandidatesTabInMobileViewE1(): ElementFinder {
        return element(by.xpath('//div[contains(text(),\'Candidates\')]'));
    }

    getViewColumnSettingIconEl(): ElementFinder {
        return element(by.xpath('//mat-icon[@id=\'view_column\']'));
    }

    getUncheckedTableColumnView(): ElementArrayFinder {
        // tslint:disable-next-line: max-line-length
        return element.all(by.xpath(`//div[@class='settings-scrolldiv']//mat-checkbox[contains(@id, 'mat-checkbox') and @ng-reflect-checked='false']`));
    }

    getSelectColumnSaveButtonEl(): ElementFinder {
        return element(by.xpath('//button[@id=\'save\']'));
    }

    getResetSearchXButtonEl(): ElementFinder {
        return element(by.xpath('//mat-icon[contains(text(),\'close\')]'));
    }

    getMobileViewMenuEl(): ElementFinder {
        return element(by.xpath('//mat-icon[contains(text(),\'menu\')]'));
    }

}
