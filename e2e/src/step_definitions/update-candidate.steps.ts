import { browser, element, by, protractor, ExpectedConditions } from 'protractor';
import { Given, Then, When, Before } from 'cucumber';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { UpdateCandidate } from './update-candidate.page';

chai.use(chaiAsPromised);
const expect = chai.expect;

let updateCandidates: UpdateCandidate;

Before(() => {
    updateCandidates = new UpdateCandidate();
});


Given('User will open the alpha project to update the candidate', async () => {
    await updateCandidates.get();
});

When('User will click on Candidate tab to validate error messages', async () => {
    await browser.driver.manage().window().setSize(1400, 900).then(async () => {
        await browser.wait(ExpectedConditions.presenceOf(updateCandidates.getCandidateTab()),5000).then(async () => {
            await updateCandidates.getCandidateTab().click();
        });
    });
});

Then('User will click on {string} candidate to validate error messages', async(candidateFullName) => {
    await updateCandidates.clickOnCandidate(candidateFullName);
});

Then('User will clear first name',async () => {
    let ctrlA = protractor.Key.chord(protractor.Key.CONTROL, "a");
    await browser.wait(ExpectedConditions.presenceOf(element(by.cssContainingText('h2','Edit Candidate'))),5000).then(async () => {
        await updateCandidates.getFirstnameInput().sendKeys(ctrlA).then(async () => {
            await updateCandidates.getFirstnameInput().sendKeys(protractor.Key.DELETE).then(async () => {
                await updateCandidates.getLastnameInput().click();
            });
        });
    });
});

Then('User will verify the first name error message as "You must enter first name"', async () => {
    await expect(browser.wait(ExpectedConditions.presenceOf(updateCandidates.getFirstNameErrorMessageEle()),5000)).to.eventually.be.true;
});

Then('User will clear last name',async () => {
    let ctrlA = protractor.Key.chord(protractor.Key.CONTROL, "a");
    await updateCandidates.getLastnameInput().sendKeys(ctrlA).then (async () => {
        await updateCandidates.getLastnameInput().sendKeys(protractor.Key.DELETE).then (async () => {
            await updateCandidates.getFirstnameInput().click();
        });
    });
});

Then('User will verify the last name error message as "You must enter last name"', async () => {
    await expect(browser.wait(ExpectedConditions.presenceOf(updateCandidates.getLastNameErrorMessageEle()),5000)).to.eventually.be.true;
});

Then('User will enter first name as special characters for candidate page', async() => {
    await updateCandidates.getFirstnameInput().click().then(async () => {
        await updateCandidates.getFirstnameInput().sendKeys("#$%^");
    });
});

Then('User will enter last name as special characters for candidate page', async() => {
    await updateCandidates.getLastnameInput().click().then(async () => {
        await updateCandidates.getLastnameInput().sendKeys("#$%^");
    });
});

Then('User will verify the first name error message as "Special characters are not allowed"', async () => {
    await expect(updateCandidates.getSpecialCharecterErrorMessageFN().isDisplayed()).to.eventually.be.true;
});

Then('User will verify the last name error message as "Special characters are not allowed"', async () => {
    await expect(updateCandidates.getSpecialCharecterErrorMessageLN().isDisplayed()).to.eventually.be.true;
});

When('User will click on Candidate tab to update the candidate', async () => {
    await browser.driver.manage().window().setSize(1400, 900).then(async () => {
        await browser.wait(ExpectedConditions.presenceOf(updateCandidates.getCandidateTab()),5000).then(async () => {
            await updateCandidates.getCandidateTab().click();
        });
    });
});

Then('User will click on {string} candidate to update the candidate first and last names', async (candidateFullName) => {
    await updateCandidates.clickOnCandidate(candidateFullName);
});

Then('User will enter first name as {string} for candidate page', async (candidateFirstName) => {
    await updateCandidates.getFirstnameInput().clear();
    await updateCandidates.getFirstnameInput().sendKeys(candidateFirstName);
});

Then('User will enter last name as {string} for candidate page', async (candidateLastName) => {
    await updateCandidates.getLastnameInput().clear();
    await updateCandidates.getLastnameInput().sendKeys(candidateLastName);
});

Then('User will click on update button', async () => {
    await updateCandidates.getSaveButton().click();
});

Then('User will search for {string}', async (searchString) => {
    await updateCandidates.getSearchInput().click().then(async () => {
        await updateCandidates.getSearchInput().clear().then(async () => {
            await updateCandidates.getSearchInput().sendKeys(searchString);
        });
    });
});

Then('User will verify {string} is showing in the candidate table', async (updatedCandidateName) => {
    await expect(element(by.cssContainingText('strong.highlight-search', updatedCandidateName)).isDisplayed()).to.eventually.be.true;
});