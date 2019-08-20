import { browser, ElementFinder, element, by } from "protractor";
import { ApprovedMoves } from './../step_definitions/approved-moves.page';

export class CandidatePage {

  approvedMovesObj = new ApprovedMoves();

  async openCandidatePageInDesktopMode() : Promise<any> {
    await browser.manage().window().setSize(1400, 900);
    //return await browser.get('/#/project-alpha/candidate-profiles');
    return await browser.get('http://localhost:4200/#/project-alpha/candidate-profiles');
  }

  async openCandidatePageInMobileMode(): Promise<any> {
    await browser.manage().window().setSize(500, 900);
    //return await browser.get('/#/project-alpha/candidate-profiles');
    return await browser.get('http://localhost:4200/#/project-alpha/candidate-profiles');
  }

  getSelectColumnButton() : ElementFinder {
    return element(by.css('app-candidate-profile [ng-reflect-message="Select columns"]'));
  }

  async getStatusDateData() : Promise<Array<string>> {
    let statusData = [];
    let isNextButtonEnabled = true;
    while(isNextButtonEnabled) {
        let statusDateTds : ElementFinder[] = await element.all(by.xpath('//td[contains(@class, "mat-column-lastUpdatedDate")]'));
        for(let i=0; i<statusDateTds.length; i++) {
            statusData.push(await statusDateTds[i].getText());
        }
        isNextButtonEnabled = await this.approvedMovesObj.getNextPage().isEnabled();
        if(isNextButtonEnabled) {
            await this.approvedMovesObj.getNextPage().click();
        }
    }
    return statusData;
  }

  async getInivitationSentDateData() : Promise<Array<string>> {
    let invitationSentDateData = [];
    let isNextButtonEnabled = true;
    while(isNextButtonEnabled) {
        let statusDateTds : ElementFinder[] = await element.all(by.xpath('//td[contains(@class, "mat-column-invitationSentDate")]'));
        for(let i=0; i<statusDateTds.length; i++) {
          invitationSentDateData.push(await statusDateTds[i].getText());
        }
        isNextButtonEnabled = await this.approvedMovesObj.getNextPage().isEnabled();
        if(isNextButtonEnabled) {
            await this.approvedMovesObj.getNextPage().click();
        }
    }
    return invitationSentDateData;
  }
  
}