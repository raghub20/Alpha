import { browser, element, by, ExpectedConditions as EC, ElementFinder } from "protractor";


export class DisplayCandidateAssessmentPage {

  async navigateToCandidateTab(browserMode = 'desktop') {
    //await browser.get('http://localhost:4200/#/project-alpha/candidate-profiles');
    await browser.get('/#/project-alpha/candidate-profiles');
    if(browserMode.toLowerCase() == 'mobile') {
      //since issue in the application, so we are opening candidate page in desktop view and changing into mobile view.
      await browser.manage().window().setSize(375, 812);
      let menu = await this.getMenuItem();
      //Below commented code will be removed once the issue in the application fixes.
      /*await menu.click();
      return element(by.xpath('//*[text()=" Candidates "]')).click();*/
    } else {
      await browser.manage().window().maximize();
      return await this.candidateTab().click();
    }
    
  }

  async getMenuItem(): Promise<ElementFinder> {
    let el: ElementFinder =  await element(by.cssContainingText('mat-icon', 'menu'));
    return el;
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
    await this.searchInput().clear();
    await this.searchInput().sendKeys(fullName);
    return await this.candidateTable().element(by.tagName('tbody')).all(by.tagName('tr')).get(0).all(by.tagName('td')).get(1).click();
  }

  async waitForCandidateAsssessmentGridToOpen() {
      return browser.wait(EC.elementToBeClickable(this.candidateAssessmentGrid()), 5000);
  }

  async getUpdateButton() {
    return element(by.buttonText('Update'));
  }

  async getDataFromTable(rowIndex, columnIndex) {
    let tbody = await this.candidateTable().element(by.tagName('tbody'));
    let row = await tbody.all(by.tagName('tr')).get(rowIndex-1);
    let col = await row.all(by.tagName('td')).get(columnIndex-1);
    return await col.getText();
  }

  async getColumnCheckboxEle(columnName:string) {
    let root = await element(by.xpath('//span[text()="' + columnName + '"]//ancestor::mat-checkbox'));
    return {
        root : root,
        input : root.element(by.tagName('input')),
        label : root.element(by.tagName('label'))
    }
  }

  async getViewColumnEle() {
    return await element(by.xpath('//mat-icon[text()="view_column"]'));
  }

  async getButtonEle(buttonText: string) {
    let el = await element(by.buttonText(buttonText));
    return el;
  }
}