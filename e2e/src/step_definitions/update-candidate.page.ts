import { browser, element, by, promise, ElementFinder, Key, protractor, ExpectedConditions, ElementArrayFinder } from 'protractor';


const addButton = by.xpath('//*[text()="person_add"]');
const firstNameInput = by.css('input[formcontrolname="FirstName"]');
const lastNameInput = by.css('input[formcontrolname="LastName"]');
const emailInput = by.css('input[formcontrolname="Email"]');
const businessUnitInput = by.css('input[formcontrolname="BusinessUnit"]');
const cancelButton = by.xpath('//*[text()="CANCEL"]');
const saveDraftButton = by.xpath('//*[text()="Save Draft"]');
const sendInviteButton = by.xpath('//*[text()="Send Invite"]');
const firstNameErrorMessage = by.xpath('//*[text()=" You must enter first name "]');
const lastNameErrorMessage = by.xpath('//*[text()=" You must enter last name "]');
const emailAddressErrorMessage = by.xpath('//*[text()=" You must enter email address "]');
const levelErrorMessage = by.xpath('//*[text()=" You must select level "]');
const destinationErrorMessage = by.xpath('//*[text()=" You must select destination "]');

const specialCharecterErrorMessage = by.xpath('//*[text()=" Special characters are not allowed "]');
const emailWithInvalidMessage = by.xpath('//*[text()=" You must enter a valid email address "]');
const departureInput = by.css('input[formcontrolname="Departure"]');
const destinationInput = by.css('input[formcontrolname="Destination"]');

export class UpdateCandidate {
    get(){
      return browser.get('/#/project-alpha/candidate-profiles');
    }

    async clickOnCandidate(candidateName) {
        await this.getSearchInput().sendKeys(candidateName);
        return element(by.cssContainingText('strong', candidateName)).click();
    }

    getSearchInput() : ElementFinder {
        return element(by.css('input[placeholder="Search within table for..."]'));
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

   getFirstNameErrorMessageEle() {
       return element(by.xpath('//input[@formcontrolname="FirstName"]//ancestor::mat-form-field//mat-error'));
   }

   getLastNameErrorMessageEle() {
    return element(by.xpath('//input[@formcontrolname="LastName"]//ancestor::mat-form-field//mat-error'));
   }

   getSaveButton() : ElementFinder {
       return element(by.buttonText('Save'));
   }

   async getTotalRowsFromCandidateTable() {
       await browser.sleep(3000);
       let rows = await element.all(by.css('app-candidate-details table tbody tr'));
       return rows.length;
   }
   

   
    
    waitForElement(objElement) {
        const condition = ExpectedConditions.elementToBeClickable(element(objElement));
          browser.wait(condition, 60000);
      }

    async openCandidateProfile() {
        // element(by.xpath("(//td[@class='")).click();
        return element.all(by.css('app-candidate-details table tbody tr')).get(0).click();
         //return element(by.className("mat-cell cdk-column-fullname mat-column-fullname mat-table-sticky cLinks ng-star-inserted'])")[0]).click();
    }

    async clearInputField (elementBY) {
        this.waitForElement(elementBY);
        await element(elementBY).sendKeys(Key.chord(Key.CONTROL, 'a'));
        this.waitForElement(elementBY);
        await element(elementBY).sendKeys(Key.DELETE);
        this.waitForElement(elementBY);
        await element(elementBY).sendKeys(protractor.Key.TAB);
    }

    async clearDestinationInput(){
       await this.clearInputField(destinationInput);
    }

    async clearDepartureInput() {
       await this.clearInputField(departureInput);
    }

   async enterValue(elementBY, value) {
    this.waitForElement(elementBY);
    await element(elementBY).clear();
    await element(elementBY).sendKeys(value);
    }

   async enterFirstNameValue (value){

    await this.enterValue(firstNameInput, value);
    }

   async  enterLastNameValue (value) {
    await  this.enterValue(lastNameInput, value);
    }

   async  enterEmailAddress(value) {
    await this.enterValue(emailInput, value);
    }

   async enterBusinessUnit(value){
    await this.enterValue(businessUnitInput, value);
    }

    async clearFirstNameInput() {
        await this.clearInputField(firstNameInput);
    }

    async clearLastNameInput() {
      await  this.clearInputField(lastNameInput);
    }

    async clearEmailInput() {
        await this.clearInputField(emailInput);
    }

    async clearBusinesUnit() {
        await  this.clearInputField(businessUnitInput);
    }

    getSpecialCharecterErrorMessage () {
       return element(specialCharecterErrorMessage);
    }

    getEmailInvalidErrorMessage () {
        return element(emailWithInvalidMessage);
    }

    clickAddProfile () {
        element(addButton).click();
    }

    getFirstNameErrorMessage (): ElementFinder {
        return element(firstNameErrorMessage);
    }

    getLastNameErrorMessage (): ElementFinder {
        return element(lastNameErrorMessage);
    }

    getEmailAddressErrorMessage (): ElementFinder {
        return element(emailAddressErrorMessage);
    }

    getLevelAddressErrorMessage (): ElementFinder {
        return element(levelErrorMessage);
    }

    getDestinationErrorMessage (): ElementFinder {
        this.waitForElement(destinationErrorMessage);
        return element(destinationErrorMessage);
    }

   async selectLevelvalue(){
    this.waitForElement(by.css('mat-select[ng-reflect-name="Level"]'));
      await element(by.css('mat-select[ng-reflect-name="Level"]')).click();
      this.waitForElement(by.css('mat-select[ng-reflect-name="Level"]'));
      await element(by.xpath('//*[contains(text()," Level 3 ")]')).click();
   // await element(by.cssContainingText('mat-select[ng-reflect-name="Level"]', value)).click();
    }

    async selectDepartureCity(){
        await element(departureInput).sendKeys('NJ, Jersey City');
      //  await element(by.cssContainingText('input[formcontrolname="Departure"]', value)).click();
    }

   async selectDestinationCity(){
       this.waitForElement(destinationInput);
       await element(destinationInput).sendKeys('GA, Atlanta');
   // await  element(by.cssContainingText('input[formcontrolname="Destination"]', value)).click();
    }
}