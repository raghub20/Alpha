import { browser, element, by, ExpectedConditions as EC } from "protractor";


export class DisplayCandidateAssessmentPage {

  async navigateToCandidateTab() {
    await browser.get('/#/project-alpha');
    await this.candidateTab().click();
  }

  candidateTab() {
    return element(by.cssContainingText('span', 'Candidates'));
  }

  candidateTable() {
    return element(by.css('app-candidate-details table'));
  }

  searchInput() {
    return element(by.css('[ng-reflect-placeholder="Search within table for..."]'));
  }

  candidateAssessmentGrid() {
    return element(by.css('mat-dialog-container'));
  }

  getFirstName() {
    return element(by.css('[placeholder="First Name"]'));
  }

  getLastName() {
    return element(by.css('[placeholder="Last Name"]'));
  }

  getEmail() {
    return element(by.css('[placeholder="Email"]'));
  }

  getLevel() {
    return element(by.css('[ng-reflect-name="Level"]'));
  }

  getBusinessUnit() {
    return element(by.css('[placeholder="Business Unit (optional)"]'));
  }

  getDeparture() {
    return element(by.css('[ng-reflect-placeholder="Departure (Optional)"]'));
  }

  getDestination() {
    return element(by.css('[placeholder="Destination"]'));
  }

  getAddress() {
    return element(by.xpath('//p[text()="Address"]'));
  }

  getNoOfRooms() {
    return element.all(by.xpath('//p[text()="Housing Details"]//ancestor::mat-card-content//p')).get(1);
  }

  getNoOfChildren() {
    return element.all(by.xpath('//p[text()="Amount of People"]//ancestor::mat-card-content//p')).get(1);
  }

  async clickOnCandidateBasedOnName(fullName) {
    await this.searchInput().sendKeys(fullName);
    return await this.candidateTable().element(by.tagName('tbody')).all(by.tagName('tr')).get(0).all(by.tagName('td')).get(1).click();
  }

  async waitForCandidateAsssessmentGridToOpen() {
      return browser.wait(EC.elementToBeClickable(this.candidateAssessmentGrid()), 5000);
  }
}