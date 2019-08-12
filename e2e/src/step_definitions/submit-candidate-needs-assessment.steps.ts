import { Given, Then, When, Before } from 'cucumber';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { browser, element, by, promise } from 'protractor';
import { Router } from 'express';
import { Needsassessment } from './candidate-needs-assessment.page';
import { Submitneedsassessment } from './submit-candidate-needs-assessment.page';

chai.use(chaiAsPromised);
const expect = chai.expect;

let needsassessment: Needsassessment;
let submitneedsassessment: Submitneedsassessment;

Before(() => {
  needsassessment = new Needsassessment();
  submitneedsassessment = new Submitneedsassessment();
});

//1) Scenario: To validate all input fields for candidate needs assessment
       

         Given('The candidate has entered needs assessment and is on review page', async function () {
           await needsassessment.get();
           await needsassessment.relocatingYes().click();
           await needsassessment.nextButton().click();
           await needsassessment.oneRelocatingMembers().click();
           await needsassessment.nextButton().click();
           await needsassessment.departureAddressField().sendKeys("Test road");
           await needsassessment.departureAddressCity().sendKeys("Chennai");
           await needsassessment.departureAddressState().sendKeys("TN");
           await needsassessment.departureAddressPincode().sendKeys("12345");
           await needsassessment.nextButton().click();
           await needsassessment.destinationAddressField().click();
           await needsassessment.selectDestinationAddressField().click();
           await needsassessment.nextButton().click();
           await needsassessment.homeowner().click();
           await needsassessment.nextButton().click();
           await needsassessment.typeOfHomeHouse().click();
           await needsassessment.nextButton().click();
           await needsassessment.tworooms().click();
           return await needsassessment.nextButton().click();
         });
       

         Then('The candidate updates if anyone else is relocating', async function () {
          await browser.driver.manage().window().setSize(1400, 900).then(async () => {
           await submitneedsassessment.updateRelocating().click();
           return submitneedsassessment.relocatingNo().click();
          });
         });
       

         Then('The candidate updates number of relocating members', async function () {
           await submitneedsassessment.updateRelocatingmembers().click();
           return submitneedsassessment.threeRelocatingmembers().click();
         });
       

         Then('The candidate updates departure address', async function () {
           await submitneedsassessment.updatedepartureaddress().click();
           await needsassessment.departureAddressField().sendKeys("Test road");
           await needsassessment.departureAddressCity().sendKeys("Chennai");
           return needsassessment.departureAddressState().sendKeys("TN");
         });
       

         Then('The candidate updates input Destination State and City', async function () {
           await submitneedsassessment.updatedestinationaddressIcon().click();
           await needsassessment.destinationAddressField().click();
           return submitneedsassessment.updatedestinationaddressField().click();
         });
       

         Then('The candidate updates Homeowner or Renter information', async function () {
           await submitneedsassessment.updateHomeownerOrRenter().click();
           return submitneedsassessment.Renter().click();
         });
       

         Then('The candidate updates # of Rooms', function () {
           return submitneedsassessment.fourRooms().click();
         });
       

         Then('The candidate updates estimated move date', async function () {
           await submitneedsassessment.estimatedDateIcon().click();
           return submitneedsassessment.updateEstimatedDate().click();
         });
       

         Then('The candidate updates preferred contact phone #', async function () {
           await submitneedsassessment.updatePreferredContact().click();
           return needsassessment.preferredContact().sendKeys("9876543210");
         });
       

         Then('The candidate sees all the fields updated in review page', function () {
           return //will be written once screen comes;
         });

//2) Scenario: To verify departure address is mandatory
       

         When('The candidate clears address field and clicks outside the field', async function () {
          await browser.driver.manage().window().setSize(1400, 900).then(async () => {
           await submitneedsassessment.updatedepartureaddress().click();
           await needsassessment.departureAddressField().clear();
           await needsassessment.departureAddressCity().clear();
           await needsassessment.departureAddressState().clear();
           await needsassessment.departureAddressPincode().clear();
           return submitneedsassessment.outsideDeparture().click();
          });
         });
       

         Then('The candidate sees You must enter departure address error message', function () {
           return expect(submitneedsassessment.departureError().isDisplayed()).to.eventually.be.true;
         });

//3) Scenario: To verify calendar control for estimated move date
       

         When('The candidate sees a calendar control for estimated move date', async function () {
          await browser.driver.manage().window().setSize(1400, 900).then(async () => {
           return expect(needsassessment.calendarIcon().isDisplayed()).to.eventually.be.true;
          });
         });
       

         Then('The candidate selects a date and sees the date format as yyyy-mm-dd', async function () {
           await submitneedsassessment.updateEstimatedDate().click();
           return //to check the format;
         });

//4) Scenario: To verify candidate is able to submit needs assessment data     

         When('The candidate clicks on submit', async function () {
          await browser.driver.manage().window().setSize(1400, 900).then(async () => {
           return submitneedsassessment.submit().click();
          });
         });
       

         Then('The candidate is shown with Thank you for completing the Needs Assessment. We will alert you when your relocation package is ready. success message', function () {
           return expect(submitneedsassessment.successMessage().isDisplayed()).to.eventually.be.true;
         });

//5) Scenario: To validate all input fields for candidate needs assessment in mobile view


Then('The candidate updates if anyone else is relocating in mobile view', async function () {
 await browser.driver.manage().window().setSize(500, 900).then(async () => {
  await submitneedsassessment.updateRelocating().click();
  return submitneedsassessment.relocatingNo().click();
 });
});


Then('The candidate updates number of relocating members in mobile view', async function () {
  await submitneedsassessment.updateRelocatingmembers().click();
  return submitneedsassessment.threeRelocatingmembers().click();
});


Then('The candidate updates departure address in mobile view', async function () {
  await submitneedsassessment.updatedepartureaddress().click();
  await needsassessment.departureAddressField().sendKeys("Test road");
  await needsassessment.departureAddressCity().sendKeys("Chennai");
  return needsassessment.departureAddressState().sendKeys("TN");
});


Then('The candidate updates input Destination State and City in mobile view', async function () {
  await submitneedsassessment.updatedestinationaddressIcon().click();
  await needsassessment.destinationAddressField().click();
  return submitneedsassessment.updatedestinationaddressField().click();
});


Then('The candidate updates Homeowner or Renter information in mobile view', async function () {
  await submitneedsassessment.updateHomeownerOrRenter().click();
  return submitneedsassessment.Renter().click();
});


Then('The candidate updates # of Rooms in mobile view', function () {
  return submitneedsassessment.fourRooms().click();
});


Then('The candidate updates estimated move date in mobile view', async function () {
  await submitneedsassessment.estimatedDateIcon().click();
  return submitneedsassessment.updateEstimatedDate().click();
});


Then('The candidate updates preferred contact phone # in mobile view', async function () {
  await submitneedsassessment.updatePreferredContact().click();
  return needsassessment.preferredContact().sendKeys("9876543210");
});


Then('The candidate sees all the fields updated in review page in mobile view', function () {
  return //will be written once screen comes;
});

//6) Scenario: To verify departure address is mandatory in mobile view


When('The candidate clears address field and clicks outside the field in mobile view', async function () {
 await browser.driver.manage().window().setSize(500, 900).then(async () => {
  await submitneedsassessment.updatedepartureaddress().click();
  await needsassessment.departureAddressField().clear();
  await needsassessment.departureAddressCity().clear();
  await needsassessment.departureAddressState().clear();
  await needsassessment.departureAddressPincode().clear();
  return submitneedsassessment.outsideDeparture().click();
 });
});


Then('The candidate sees You must enter departure address error message in mobile view', function () {
  return expect(submitneedsassessment.departureError().isDisplayed()).to.eventually.be.true;
});

//7) Scenario: To verify calendar control for estimated move date in mobile view


When('The candidate sees a calendar control for estimated move date in mobile view', async function () {
 await browser.driver.manage().window().setSize(500, 900).then(async () => {
  return expect(needsassessment.calendarIcon().isDisplayed()).to.eventually.be.true;
 });
});


Then('The candidate selects a date and sees the date format as yyyy-mm-dd in mobile view', async function () {
  await submitneedsassessment.updateEstimatedDate().click();
  return //to check the format;
});

//8) Scenario: To verify candidate is able to submit needs assessment data  in mobile view    

When('The candidate clicks on submit in mobile view', async function () {
 await browser.driver.manage().window().setSize(500, 900).then(async () => {
  return submitneedsassessment.submit().click();
 });
});


Then('The candidate is shown with Thank you for completing the Needs Assessment. We will alert you when your relocation package is ready. success message in mobile view', function () {
  return expect(submitneedsassessment.successMessage().isDisplayed()).to.eventually.be.true;
});