import { browser, element, by, promise, ElementFinder } from 'protractor';
export class Needsassessment {
    
    get(): promise.Promise<any> {
         browser.get('/#/candidate-assessment/')
         return element(by.css("button.candidate-btn.mat-button")).click();
    }

    relocatingYesOrNoField():ElementFinder{
        return element(by.cssContainingText("div.candidate-headertxt","Is anyone else relocating with you ?"));
    }

    numberOfRelocatingMembers():ElementFinder{
        return element(by.cssContainingText("div.candidate-headertxt","How many people, including yourself, are relocating ?"));
    }

    departureAddressField():ElementFinder{
        return element(by.cssContainingText("div.candidate-headertxt","Please enter your current address"));
    }

    departureAddress():ElementFinder{
        return element(by.xpath("//input[@formcontrolname='Address']"));
    }

    departureAddressCity():ElementFinder{
        return element(by.xpath("//input[@formcontrolname='Town']"));
    }

    departureAddressState():ElementFinder{
        return element(by.xpath("//input[@formcontrolname='State']"));
    }

    departureAddressPincode():ElementFinder{
        return element(by.xpath("//input[@formcontrolname='ZIP']"));
    }

    destinationAddressField():ElementFinder{
        return element(by.cssContainingText(".candidate-headertxt","Where are you moving to"));
    }

    destinationAddressdropdown():ElementFinder{
        return element(by.xpath("//div[@class='mat-select-value']"));
    }

    selectDestinationAddressField():ElementFinder{
        return element(by.cssContainingText("span.mat-option-text","Newyork"));
    }

    selectedDestinationAddressField():ElementFinder{
        return element(by.xpath("//span[contains(text(),'Newyork')]"));
    }

    homeownerOrRenter():ElementFinder{
        return element(by.cssContainingText(".candidate-headertxt","Do you currently own or rent?"));
    }

    numberOfRooms():ElementFinder{
        return element(by.cssContainingText(".candidate-headertxt","How many rooms are in your home?"));
    }

    typeOfHome():ElementFinder{
        return element(by.cssContainingText(".candidate-headertxt",""));
    }

    destinationAddressPrepopulate():ElementFinder{
        return element.all(by.cssContainingText(".ng-tns-c22-8","Danbury")).get(0);
    }

    relocatingYes():ElementFinder{
        return element(by.cssContainingText(".select-Na-cardimagecont.relocationYes","YES"));
    }

    relocatingYesEnabled():ElementFinder{
        return element(by.cssContainingText(".select-Na-cardimagecont.relocationYes.selected","YES"));
    }

    oneRelocatingEnabled():ElementFinder{
        return element(by.cssContainingText(".select-Na-cardimagecont.relocation-Personcont.selected","1"));
    }

    nextButton():ElementFinder{
        return element(by.cssContainingText(".candidate-btn.mat-button","Next"));
    }

    backbutton():ElementFinder{
        return element(by.xpath("//img[@src='../../../../../assets/images/candidate-assessment/previous-arrow.svg']"))    
    }

    oneRelocatingMembers():ElementFinder{
        return element(by.cssContainingText("div.select-Na-cardimagecont.relocation-Personcont","1"));
    }

    homeowner():ElementFinder{
        return element(by.cssContainingText("div.select-Na-cardimagecont.relocationYes"," Own "));
    }

    homeownerselected():ElementFinder{
        return element(by.cssContainingText("div.select-Na-cardimagecont.relocationYes.selected"," Own "));
    }

    tworooms():ElementFinder{
        return element(by.xpath("//img[@src='../../../../../assets/images/candidate-assessment/baseline-add-circle.svg']"));
    }

    apartment():ElementFinder{
        return element(by.cssContainingText("div.select-Na-cardimagecont.relocationYes"," Apartment/Condo/Co-Op "));
    }

    apartmentselected():ElementFinder{
        return element(by.cssContainingText("div.select-Na-cardimagecont.relocationYes.selected"," Apartment/Condo/Co-Op "));
    }
}