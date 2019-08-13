import { Given, Then, When, Before } from 'cucumber';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { NavigationProfile } from './navigation-profile-summary.page';

chai.use(chaiAsPromised);
const expect = chai.expect;

let navigationprofile: NavigationProfile = new NavigationProfile();

Given('User will open the alpha project in desktop mode', async() => {
  return await navigationprofile.get();
});

When('User will see the Cost Models tab', async () => {
  let el = await navigationprofile.getCostModelTab(); 
  return expect(el.isDisplayed()).to.eventually.be.true;
});

Then('User will click on Cost Models tab', async () => {
  let el = await navigationprofile.getCostModelTab();
  return el.click();
});

Then('User will see Create Cost Model button in Cost Model page', async () => {
  return expect(navigationprofile.getCreateCostModelButton().isDisplayed()).to.eventually.be.true;
});

When('User will see the Candidate tab', async () => {
  let el = await navigationprofile.getCandidateTab();
  return expect(el.isDisplayed()).to.eventually.be.true;
});

Then('User will click on Candidate tab', async () => {
  let el = await navigationprofile.getCandidateTab();
  return el.click();
});

Then('User will see Add button in Candidate page', async () => {
  return expect(navigationprofile.getCandidateAddButton().isDisplayed()).to.eventually.be.true;
});

When('User will see the Approved Moves tab', async () => {
  let el = await navigationprofile.getApprovedMovesTab();
  return expect(el.isDisplayed()).to.eventually.be.true;
});

Then('User will click on Approved Moves tab', async () => {
  let el = await navigationprofile.getApprovedMovesTab();
  return el.click();
});

Then('User will see Approved Moves header', () => {
  return expect(navigationprofile.getApprovedMovesSectionHeader().getText()).to.eventually.equal('Approved Moves');
});