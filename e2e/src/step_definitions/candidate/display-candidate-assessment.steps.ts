import { Given, Then, When } from "cucumber";
import {DisplayCandidateAssessmentPage } from './display-candidate-assessment.page';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { ElementFinder, browser } from "protractor";

chai.use(chaiAsPromised);
const expect = chai.expect;

let candidateObj = new DisplayCandidateAssessmentPage();

Given('User will click on candidate tab', () => {
  return candidateObj.navigateToCandidateTab();
});

When('User will open candidate assessment window whose status is {string} and name as {string}', async (status, fullName) => {
  return await candidateObj.clickOnCandidateBasedOnName(fullName);
});

When('User will wait for candidate assessment grid to load', () => {
  return candidateObj.waitForCandidateAsssessmentGridToOpen();
});

Then('User will view firstname', () => {
  return expect(candidateObj.getFirstName().isDisplayed()).eventually.to.be.true;
});

Then('User will view lastname', () => {
  return expect(candidateObj.getLastName().isDisplayed()).eventually.to.be.true;
});

Then('User will view email', () => {
  return expect(candidateObj.getEmail().isDisplayed()).eventually.to.be.true;
});

Then('User will view level', () => {
  return expect(candidateObj.getLevel().isDisplayed()).eventually.to.be.true;
});

Then('User will view business unit', () => {
  return expect(candidateObj.getBusinessUnit().isDisplayed()).eventually.to.be.true;
});

Then('User will view departure', () => {
  return expect(candidateObj.getDeparture().isDisplayed()).eventually.to.be.true;
});

Then('User will view destination', () => {
  return expect(candidateObj.getDestination().isDisplayed()).eventually.to.be.true;
});

Then('User will view address', () => {
  return expect(candidateObj.getAddress().isDisplayed()).eventually.to.be.true;
});

Then('User will view no of childrens', () => {
  return expect(candidateObj.getNoOfChildren().isDisplayed()).eventually.to.be.true;
});

Then('User will view no of rooms', () => {
  return expect(candidateObj.getNoOfRooms().isDisplayed()).eventually.to.be.true;
});

Then('User will verify update button is {string}', async (expectedAction) => {
  let expectedVal = true;
  if(expectedAction.toLowerCase() == 'disabled') {
    expectedVal = false;
  }
  let updateButton: ElementFinder= await candidateObj.getUpdateButton();
  return expect(updateButton.isEnabled()).eventually.to.equal(expectedVal);
});

When('User will select the {string} from select column view for candidate page', async(columnNamesStr) => {
  let columnNamesArr = columnNamesStr.split(',');
  for(let i=0; i<columnNamesArr.length; i++) {
    if(columnNamesArr[i].trim() != '') {
      let checkboxEle = await candidateObj.getColumnCheckboxEle(columnNamesArr[i].trim());
      await checkboxEle.label.click();
    }
  }
});

When('User will open table column section of candidates page', async () => {
  await browser.sleep(4000);
  let viewColumnEle = await candidateObj.getViewColumnEle();
  return viewColumnEle.click();
});

When('User will click on {string} button of candidate page', async (buttonText) => {
  let buttonEle = await candidateObj.getButtonEle(buttonText);
  return await buttonEle.click();
});

When('User will update the business unit as {string}', async(businessUnit) => {
  await candidateObj.getBusinessUnit().click();
  await candidateObj.getBusinessUnit().clear();
  await candidateObj.getBusinessUnit().sendKeys(businessUnit);
});

When('User will click on Update button', async () => {
  let el =  await candidateObj.getUpdateButton();
  return el.click();
});

Then('User will verify business unit column value is updated to {string}', (expectedValue) => {
    return expect(candidateObj.getDataFromTable(1, 6)).eventually.to.be.equal(expectedValue);
});

When('User will open candidate page in mobile view', () => {
    return candidateObj.navigateToCandidateTab('mobile');
});