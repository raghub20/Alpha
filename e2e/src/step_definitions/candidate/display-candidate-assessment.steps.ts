import { Given, Then, When } from "cucumber";
import {DisplayCandidateAssessmentPage } from './display-candidate-assessment.page';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
const expect = chai.expect;

let candidateObj = new DisplayCandidateAssessmentPage();

Given('User will click on candidate tab', () => {
  return candidateObj.candidateTab().click();
});
//"Pending Vanline Quote"
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
