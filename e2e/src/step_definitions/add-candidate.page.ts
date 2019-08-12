import { browser, element, by, promise, ElementFinder } from 'protractor';

export class CandidatesProfile {
    get() {
        return browser.get('/#/project-alpha');
    }

    getUser() {
        return new promise.Promise((resolve) => resolve('user')); // TODO: Find and return real user
    }

    getCandidatesTabE1(): ElementFinder{
        return element(by.xpath("//span[contains(text(),'Candidates')]"));
    }
    getCandidatesScreenE1(): ElementFinder{
        return element(by.xpath("//h2[contains(text(),'Candidate')]"));
    }
    getAddCandidateButtonE1(): ElementFinder{
        return element(by.xpath("//button[@class='mat-raised-button mat-primary']"));
    }
    getcandidatecreationpopupE1(): ElementFinder{
        return element(by.xpath("//div[@class='mat-dialog-title']//h2"));
    }
    getFirstnameE1(): ElementFinder{
        return element(by.xpath("//input[@formcontrolname='FirstName']"));
    }
    getLastnameE1(): ElementFinder{
        return element(by.xpath("//input[@formcontrolname='LastName']"));
    }
    getDepartureE1(): ElementFinder{
        return element(by.xpath("//input[@formcontrolname='Departure']"));
    }
    getDestinationE1(): ElementFinder{
        return element(by.xpath("//input[@formcontrolname='Destination']"));
    }
    getDestinationvalidationE1(): ElementFinder{
        return element(by.xpath("//mat-error[contains(text(),' You must select destination ')]"));
    }
    getLevelE1(): ElementFinder{
        return element(by.xpath("(//div[@class='mat-select-value'])[2]//span"));
    }
    getBusinessunitE1(): ElementFinder{
        return element(by.xpath("//input[@placeholder='Business Unit (optional)']"));
    }
    getEmailE1(): ElementFinder{
        return element(by.xpath("//input[@placeholder='Email']"));
    }
    getSavebuttonE1(): ElementFinder{
        return element(by.xpath("//span[contains(text(),'Save')]"));
    }
    getCancelbuttonE1(): ElementFinder{
        return element(by.xpath("//span[contains(text(),'CANCEL')]"));
    }
    getSendInvitebuttonE1(): ElementFinder{
        return element(by.xpath("//span[contains(text(),'Send Invite')]"));
    }
    getFirstnamevalidationE1(): ElementFinder{
        return element(by.xpath("//mat-error[contains(text(),' You must enter first name ')]"));
    }
    getFirstnamevalidationE2(): ElementFinder{
        return element(by.xpath("//mat-error[contains(text(),' Special characters are not allowed ')]"));
    }
    getlastnamevalidationE1(): ElementFinder{
        return element(by.xpath("//mat-error[contains(text(),' You must enter last name ')]"));
    }
    getlevelvalidationE1(): ElementFinder{
        return element(by.xpath("//mat-error[contains(text(),' You must select level ')]"));
    }
    getleveldropdownE1(): ElementFinder{
        return element(by.xpath("//span[contains(text(),' Level 1 (250,000+ USD) ')]"));
    }
    getEmailvalidationE1(): ElementFinder{
        return element(by.xpath("//mat-error[contains(text(),' You must enter email address ')]"));
    }
    getEmailvalidationE2(): ElementFinder{
        return element(by.xpath("//mat-error[contains(text(),' You must enter a valid email address ')]"));
    }
    getnumberofrecords(): ElementFinder{
        return element.all(by.className("mat-paginator-range-actions")).last();
    }
    getverify(text): ElementFinder{
        var presentvalue: any;    
        presentvalue = text.split(' ');
        var expected: number = parseInt(presentvalue[4])
        expected =expected+1;
        return element(by.xpath("//div[contains(text(),'1 - 5 of "+expected+"')]"));
    }
}