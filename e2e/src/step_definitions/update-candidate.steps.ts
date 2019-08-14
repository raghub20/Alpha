import { Given, Then, When, Before } from 'cucumber';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { UpdateCandidate } from './update-candidate.page';
import { protractor } from 'protractor/built/ptor';
import { $, browser } from 'protractor';

chai.use(chaiAsPromised);
const expect = chai.expect;

let updateCandidates: UpdateCandidate = new UpdateCandidate();


When('User will click on {string} candidate', (candidateFullName) => {
    return updateCandidates.clickOnCandidate(candidateFullName);
});

When('User will clear first name',async () => {
    await browser.sleep(2000);
    let ctrlA = protractor.Key.chord(protractor.Key.CONTROL, "a");
    await updateCandidates.getFirstnameInput().sendKeys(ctrlA);
    await updateCandidates.getFirstnameInput().sendKeys(protractor.Key.DELETE);
    await browser.sleep(3000);
    await updateCandidates.getLastnameInput().click();
});

Then('User will verify the first name error message as {string}', async (expectedErrorMsg) => {
    return expect(updateCandidates.getFirstNameErrorMessageEle().getText()).eventually.to.equal(expectedErrorMsg);
});

When('User will clear last name',async () => {
    let ctrlA = protractor.Key.chord(protractor.Key.CONTROL, "a");
    await updateCandidates.getLastnameInput().sendKeys(ctrlA);
    await updateCandidates.getLastnameInput().sendKeys(protractor.Key.DELETE);
    await updateCandidates.getFirstnameInput().click();
});

Then('User will verify the last name error message as {string}', async (expectedErrorMsg) => {
    await browser.sleep(2000);
    return expect(updateCandidates.getLastNameErrorMessageEle().getText()).eventually.to.equal(expectedErrorMsg);
});

When('User will enter first name as {string} for candidate page', async(firstName) => {
    updateCandidates.getFirstnameInput().clear();
    return updateCandidates.getFirstnameInput().sendKeys(firstName);
});

When('User will enter last name as {string} for candidate page', async(lastName) => {
    updateCandidates.getLastnameInput().clear();
    return updateCandidates.getLastnameInput().sendKeys(lastName);
});

When('User will click on update button', () => {
    return updateCandidates.getSaveButton().click();
});

When('User will search for {string}', async (searchString) => {
    updateCandidates.getSearchInput().clear();
    updateCandidates.getSearchInput().sendKeys(searchString);
});

Then('User will verify {string} record is showing in the candidate table', async (expectedRecordCount) => {
    expect(await updateCandidates.getTotalRowsFromCandidateTable()).to.equal(parseInt(expectedRecordCount));
});


Given('The update user is on the candidate profile updation page selects a candidate profile', async () => {
    await updateCandidates.get();
    return updateCandidates.openCandidateProfile();
});

When('The update user clears First Name field and The update user moves to Next Field',  async () => {
    await updateCandidates.clearFirstNameInput();
});

Then('The update user shown with error message You must enter first name', async () => {
    await expect(updateCandidates.getFirstNameErrorMessage().isDisplayed()).to.eventually.be.true;
});

Then('The update user enters special characters in the firstname', async () => {
    await updateCandidates.enterFirstNameValue('@#$%^&*(&');
});

Then('The update user shown with error message Special characters not allowed', async () => {
    await expect(updateCandidates.getSpecialCharecterErrorMessage().isDisplayed()).to.eventually.be.true;
});

Then('The update user enters valid username', async () => {
    await updateCandidates.enterFirstNameValue('TestFirstName');
});

When('The update user clears Last Name field and The update user moves to Next Field',  async () => {
    await updateCandidates.clearLastNameInput();
});

Then('The update user shown with error message You must enter last name', async () => {
    await expect(updateCandidates.getLastNameErrorMessage().isDisplayed()).to.eventually.be.true;
});

Then('The update user enters special characters in the lastname', async () => {
    await updateCandidates.enterLastNameValue('@#$%^&*(&');
});

// Then('The update user shown with error message Special characters not allowed', async () => {
//     await expect(updateCandidates.getSpecialCharecterErrorMessage().isDisplayed()).to.eventually.be.true;
// });

Then('The update user enters valid Last Name', async () => {
    await updateCandidates.enterLastNameValue('TestLastName');
});

When('The update user clears email field and The update user moves to Next Field',  async () => {
    await updateCandidates.clearEmailInput();
});

Then('The update user shown with error message You must enter email', async () => {
    await expect(updateCandidates.getEmailAddressErrorMessage().isDisplayed()).to.eventually.be.true;
});

Then('The update user enters Invalid Email', async () => {
    await updateCandidates.enterEmailAddress('@#$%^&*(&');
});

Then('The update user shown with error messageenter valid email', async () => {
    await expect(updateCandidates.getEmailInvalidErrorMessage().isDisplayed()).to.eventually.be.true;
});

Then('The update user enters Valid Email', async () => {
    await updateCandidates.enterEmailAddress('test@yopmail.com');
});

When('The update user updates level field', async () => {
    await updateCandidates.selectLevelvalue();
});


When('The update user clears Bussiness Unit', async () => {
    await updateCandidates.clearBusinesUnit();
});

Then('The update user can enter a new value in Bussiness Unit', async () => {
    await updateCandidates.enterBusinessUnit('TestBusinessUnit');
});

When('The update user clears departure field', async () => {
    await updateCandidates.clearDepartureInput();
});

Then('The update user is able to enter or select departure field', async () => {
    await updateCandidates.selectDepartureCity();
});

When('The update user clears destination field and The update user moves to Next Field', async () => {
    await updateCandidates.clearDestinationInput();
});

Then('The update user shown with error message You must enter destinaiton', async () => {
    await expect(updateCandidates.getDestinationErrorMessage().isDisplayed()).to.eventually.be.true;
});

Then('The update user is able to enter or select destination field', async () => {
    await updateCandidates.selectDestinationCity();
})

