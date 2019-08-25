import { browser, element, by, promise, ElementFinder, Key, protractor, ExpectedConditions, ElementArrayFinder } from 'protractor';

export class UpdateCandidate {
    
    get(): promise.Promise<any> {
      return browser.get('/#/project-alpha/candidate-profiles');
    }
    
    getCandidateTab(): ElementFinder {
        return element(by.cssContainingText('a.mat-tab-link.ng-star-inserted','Candidates'));
    }

    async clickOnCandidate(candidateFullName) {
        await this.getSearchInput().click().then(async () => {
            await this.getSearchInput().sendKeys(candidateFullName).then(async () => {
                return element(by.cssContainingText('strong.highlight-search', candidateFullName)).click();
            });
        });
    }

    getSearchInput() : ElementFinder {
        return element(by.id('search_text'));
    }

    getFirstnameInput() : ElementFinder {
        return element(by.css('[formcontrolname="FirstName"]'));
    }

    getLastnameInput() : ElementFinder {
        return element(by.css('[formcontrolname="LastName"]'));
    }

    getDepartureDropdown() : ElementFinder {
         return element(by.css('[formcontrolname="Departure"]'));
    }

    getDestinationDropdown() : ElementFinder {
        return element(by.css('[formcontrolname="Destination"]'));
    }

    getFirstNameErrorMessageEle(): ElementFinder {
        return element(by.cssContainingText('mat-error',' You must enter first name '));
    }

    getLastNameErrorMessageEle(): ElementFinder {
        return element(by.cssContainingText('mat-error', ' You must enter last name '));
    }

    getSaveButton() : ElementFinder {
        return element(by.buttonText('Save'));
    }

    getSpecialCharecterErrorMessageFN(): ElementFinder {
        return element(by.cssContainingText('mat-error#mat-error-0.mat-error',' Special characters are not allowed '));
    }

    getSpecialCharecterErrorMessageLN(): ElementFinder {
        return element(by.cssContainingText('mat-error#mat-error-1.mat-error',' Special characters are not allowed '));
    }
}