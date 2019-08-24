import { browser, element, by, protractor, ExpectedConditions } from 'protractor';
import { Given, Then, When, Before } from 'cucumber';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { NavigationProfile } from './navigation-profile-summary.page';

chai.use(chaiAsPromised);
const expect = chai.expect;

let navigationprofile: NavigationProfile;

Before(() => {
    navigationprofile = new NavigationProfile();
});


Given('User will open the alpha project to check navigation', async() => {
    return await navigationprofile.get();
});


//Scenario: To verify the mechanism to navigate to Cost Models
When('User will see the Cost Models tab', async () => {
    await browser.driver.manage().window().setSize(1400, 900).then(async () => {
        await expect(browser.wait(ExpectedConditions.presenceOf(navigationprofile.getCostModelTab()),5000)).to.eventually.be.true;
    });
});

Then('User will click on Cost Models tab', async () => {
    await browser.wait(ExpectedConditions.presenceOf(navigationprofile.getCostModelTab()),5000).then(async () => {
        await navigationprofile.getCostModelTab().click();
    });
});

Then('User will see Create Cost Model button in Cost Model page', async () => {
    //await expect(navigationprofile.getCreateCostModelButton().isDisplayed()).to.eventually.be.true;
    await expect(browser.wait(ExpectedConditions.presenceOf(navigationprofile.getCreateCostModelButton()),5000)).to.eventually.be.true;
});


//Scenario: To verify the mechanism to navigate to Candidates
When('User will see the Candidate tab', async () => {
    await browser.driver.manage().window().setSize(1400, 900).then(async () => {
        await expect(browser.wait(ExpectedConditions.presenceOf(navigationprofile.getCandidateTab()),5000)).to.eventually.be.true;
    });
});

Then('User will click on Candidate tab', async () => {
    await browser.wait(ExpectedConditions.presenceOf(navigationprofile.getCandidateTab()),5000).then(async () => {
        await navigationprofile.getCandidateTab().click();
    });
});

Then('User will see Add button in Candidate page', async () => {
    return expect(navigationprofile.getCandidateAddButton().isDisplayed()).to.eventually.be.true;
});


//Scenario: To verify the mechanism to navigate to Approved Moves
When('User will see the Approved Moves tab', async () => {
    await browser.driver.manage().window().setSize(1400, 900).then(async () => {
        await expect(browser.wait(ExpectedConditions.presenceOf(navigationprofile.getApprovedMovesTab()),5000)).to.eventually.be.true;
    });
});

Then('User will click on Approved Moves tab', async () => {
    await browser.wait(ExpectedConditions.presenceOf(navigationprofile.getApprovedMovesTab()),5000).then(async () => {
        await navigationprofile.getApprovedMovesTab().click();
    });
});

Then('User will see Approved Moves header', () => {
    return expect(navigationprofile.getApprovedMovesSectionHeader().getText()).to.eventually.equal('Approved Moves');
});