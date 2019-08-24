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


//Scenario: Verify the inline validtions for candidate update section
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



//Scenario: Update the candidate first name and last name
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
    await updateCandidates.enterFirstNameValue(candidateFirstName);
});

Then('User will enter last name as {string} for candidate page', async (candidateLastName) => {
    await updateCandidates.enterLastNameValue(candidateLastName);
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


// Given('The update user is on the candidate profile updation page selects a candidate profile', async () => {
//     await updateCandidates.get();
//     return updateCandidates.openCandidateProfile();
// });

// When('The update user clears First Name field and The update user moves to Next Field',  async () => {
//     await updateCandidates.clearFirstNameInput();
// });

// Then('The update user shown with error message You must enter first name', async () => {
//     await expect(updateCandidates.getFirstNameErrorMessage().isDisplayed()).to.eventually.be.true;
// });

// Then('The update user enters special characters in the firstname', async () => {
//     await updateCandidates.enterFirstNameValue('@#$%^&*(&');
// });

// Then('The update user shown with error message Special characters not allowed', async () => {
//     await expect(updateCandidates.getSpecialCharecterErrorMessage().isDisplayed()).to.eventually.be.true;
// });

// Then('The update user enters valid username', async () => {
//     await updateCandidates.enterFirstNameValue('TestFirstName');
// });

// When('The update user clears Last Name field and The update user moves to Next Field',  async () => {
//     await updateCandidates.clearLastNameInput();
// });

// Then('The update user shown with error message You must enter last name', async () => {
//     await expect(updateCandidates.getLastNameErrorMessage().isDisplayed()).to.eventually.be.true;
// });

// Then('The update user enters special characters in the lastname', async () => {
//     await updateCandidates.enterLastNameValue('@#$%^&*(&');
// });

// Then('The update user shown with error message Special characters not allowed', async () => {
//     await expect(updateCandidates.getSpecialCharecterErrorMessage().isDisplayed()).to.eventually.be.true;
// });

// Then('The update user enters valid Last Name', async () => {
//     await updateCandidates.enterLastNameValue('TestLastName');
// });

// When('The update user clears email field and The update user moves to Next Field',  async () => {
//     await updateCandidates.clearEmailInput();
// });

// Then('The update user shown with error message You must enter email', async () => {
//     await expect(updateCandidates.getEmailAddressErrorMessage().isDisplayed()).to.eventually.be.true;
// });

// Then('The update user enters Invalid Email', async () => {
//     await updateCandidates.enterEmailAddress('@#$%^&*(&');
// });

// Then('The update user shown with error messageenter valid email', async () => {
//     await expect(updateCandidates.getEmailInvalidErrorMessage().isDisplayed()).to.eventually.be.true;
// });

// Then('The update user enters Valid Email', async () => {
//     await updateCandidates.enterEmailAddress('test@yopmail.com');
// });

// When('The update user updates level field', async () => {
//     await updateCandidates.selectLevelvalue();
// });

// When('The update user clears Bussiness Unit', async () => {
//     await updateCandidates.clearBusinesUnit();
// });

// Then('The update user can enter a new value in Bussiness Unit', async () => {
//     await updateCandidates.enterBusinessUnit('TestBusinessUnit');
// });

// When('The update user clears departure field', async () => {
//     await updateCandidates.clearDepartureInput();
// });

// Then('The update user is able to enter or select departure field', async () => {
//     await updateCandidates.selectDepartureCity();
// });

// When('The update user clears destination field and The update user moves to Next Field', async () => {
//     await updateCandidates.clearDestinationInput();
// });

// Then('The update user shown with error message You must enter destinaiton', async () => {
//     await expect(updateCandidates.getDestinationErrorMessage().isDisplayed()).to.eventually.be.true;
// });

// Then('The update user is able to enter or select destination field', async () => {
//     await updateCandidates.selectDestinationCity();
// })