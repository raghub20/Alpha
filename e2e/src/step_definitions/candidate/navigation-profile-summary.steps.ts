import { Given, Then, When, Before } from 'cucumber';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { NavigationProfile } from './navigation-profile-summary.page';

chai.use(chaiAsPromised);
const expect = chai.expect;

let navigationprofile: NavigationProfile = new NavigationProfile();

Given('User will open the alpha project in desktop mode', async() => {
  return navigationprofile.get();
});

When('User will see the Cost Models tab', () => {
  return expect(navigationprofile.getCostModelTab().isDisplayed()).to.eventually.be.true;
});

Then('User will click on Cost Models tab', () => {
  return navigationprofile.getCostModelTab().click();
});

Then('User will see Create Cost Model button in Cost Model page', async () => {
  return expect(navigationprofile.getCreateCostModelButton().isDisplayed()).to.eventually.be.true;
});

When('User will see the Candidate tab', () => {
  return expect(navigationprofile.getCandidateTab().isDisplayed()).to.eventually.be.true;
});

Then('User will click on Candidate tab', () => {
  return navigationprofile.getCandidateTab().click();
});

Then('User will see Add button in Candidate page', async () => {
  return expect(navigationprofile.getCandidateAddButton().isDisplayed()).to.eventually.be.true;
});

When('User will see the Approved Moves tab', () => {
  return expect(navigationprofile.getApprovedMovesTab().isDisplayed()).to.eventually.be.true;
});

Then('User will click on Approved Moves tab', () => {
  return navigationprofile.getApprovedMovesTab().click();
});

Then('User will see Approved Moves header', () => {
  return expect(navigationprofile.getApprovedMovesSectionHeader().getText()).to.eventually.equal('Approved Moves');
});