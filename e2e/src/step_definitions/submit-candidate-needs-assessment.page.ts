import { browser, element, by, promise, ElementFinder } from 'protractor';
export class Submitneedsassessment {

    updateRelocating():ElementFinder{
        return element(by.css("div.mat-select-arrow"));
    }
    relocatingNo():ElementFinder{
        return element(by.cssContainingText("span.mat-option-text","No"));
    }
    confirmRelocating():ElementFinder{
        return element(by.css("span.mat-select-value-text"));
    }
    confirmCount():ElementFinder{
        return element(by.xpath("//input[@formcontrolname='Count']"));
    }
    updateRelocatingmembers():ElementFinder{
        return element(by.xpath("(//mat-icon[contains(text(),'mode_edit')])[1]"));
    }
    threeRelocatingmembers():ElementFinder{
        return element(by.xpath("//input[@formcontrolname='RelocatePeopleCount']"));
    }
    updatedepartureaddress():ElementFinder{
        return element(by.xpath("(//mat-icon[contains(text(),'mode_edit')])[2]"));
    }
    updatedestinationaddressIcon():ElementFinder{
        return element(by.xpath("(//mat-icon[contains(text(),'mode_edit')])[3]"));
    }
    updatedestinationaddressField():ElementFinder{
        return element(by.xpath("//input[@formcontrolname='Destination']"));
    }
    updateHomeownerOrRenter():ElementFinder{
        return element(by.xpath("(//mat-icon[contains(text(),'mode_edit')])[4]"));
    }
    Renter():ElementFinder{
        return element(by.xpath("//input[@formcontrolname='OwnerStatus']"));
    }
    updateTypeOfHome():ElementFinder{
        return element(by.xpath("(//mat-icon[contains(text(),'mode_edit')])[5]"));
    }
    house():ElementFinder{
        return element(by.xpath("//input[@formcontrolname='HomeType']"));
    }
    estimatedDateIcon():ElementFinder{
        return element(by.css("svg.mat-datepicker-toggle-default-icon"));
    }
    updateEstimatedDate():ElementFinder{
        return element(by.cssContainingText("div.mat-calendar-body-cell-content","15"));
    }
    getestimatedDate():ElementFinder{
        return element(by.xpath("//input[@formcontrolname='Date']"));
    }
    preferredContact():ElementFinder{
        return element(by.xpath("//input[@formcontrolname='Contact']"));
    }
    updatePreferredContact():ElementFinder{
        return element(by.xpath("(//mat-icon[contains(text(),'mode_edit')])[6]"));
    }
    outsideDeparture():ElementFinder{
        return element(by.css("div.corebenefit-section"));
    }
    departureError():ElementFinder{
        return element(by.css("div.corebenefit-section"));
    }
    submit():ElementFinder{
        return element(by.xpath("//span[contains(text(),'Accept & Submit')]"));
    }
    successMessage():ElementFinder{
        return element(by.css("div.cdk-global-overlay-wrapper"));
    }
}