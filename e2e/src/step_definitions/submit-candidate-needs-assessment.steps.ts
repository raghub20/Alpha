import { Given, Then, When, Before } from 'cucumber';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { browser, element, by, promise } from 'protractor';
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
  await browser.sleep(3000);
  await needsassessment.relocatingYes().click();
  await browser.sleep(3000);
  await needsassessment.nextButton().click();
  await browser.sleep(3000);
  await needsassessment.oneRelocatingMembers().click();
  await browser.sleep(3000);
  await needsassessment.nextButton().click();
  await browser.sleep(3000);
  await needsassessment.departureAddress().sendKeys("Test road");
  await needsassessment.departureAddressCity().sendKeys("Chennai");
  await needsassessment.departureAddressState().sendKeys("TN");
  await needsassessment.departureAddressPincode().sendKeys("12345");
  await browser.sleep(3000);
  await needsassessment.nextButton().click();
  await browser.sleep(3000);
  await needsassessment.destinationAddressdropdown().click();
  await browser.sleep(3000);
  await needsassessment.selectDestinationAddressField().click();
  await browser.sleep(3000);
  await needsassessment.nextButton().click();
  await browser.sleep(3000);
  await needsassessment.homeowner().click();
  await browser.sleep(3000);
  await needsassessment.nextButton().click();
  await browser.sleep(3000);
  await needsassessment.apartment().click();
  await browser.sleep(3000);
  await needsassessment.nextButton().click();
  await browser.sleep(3000);
  await needsassessment.tworooms().click();
  await browser.sleep(3000);
  return await needsassessment.nextButton().click();
});


Then('The candidate updates if anyone else is relocating', async function () {
  await browser.driver.manage().window().setSize(1400, 900).then(async () => {
    await browser.sleep(3000);
    await submitneedsassessment.updateRelocating().click();
    await browser.sleep(3000);
    return submitneedsassessment.relocatingNo().click();
  });
});


Then('The candidate updates number of relocating members', async function () {
  await browser.sleep(3000);
  await submitneedsassessment.updateRelocatingmembers().click();
  await browser.sleep(3000);
  await submitneedsassessment.threeRelocatingmembers().clear();
  await browser.sleep(3000);
  await submitneedsassessment.updateRelocatingmembers().click();
  await browser.sleep(3000);
  return submitneedsassessment.threeRelocatingmembers().sendKeys("3");
});


Then('The candidate updates departure address', async function () {
  await browser.sleep(3000);
  await submitneedsassessment.updatedepartureaddress().click();
  await browser.sleep(3000);
  await needsassessment.departureAddress().clear();
  await browser.sleep(3000);
  await submitneedsassessment.updatedepartureaddress().click();
  await browser.sleep(3000);
  return needsassessment.departureAddress().sendKeys("Test road, Chennai, TN");
});


Then('The candidate updates input Destination State and City', async function () {
  await browser.sleep(3000);
  await submitneedsassessment.updatedestinationaddressIcon().click();
  await browser.sleep(3000);
  await submitneedsassessment.updatedestinationaddressField().clear();
  await browser.sleep(3000);
  await submitneedsassessment.updatedestinationaddressIcon().click();
  await browser.sleep(3000);
  return submitneedsassessment.updatedestinationaddressField().sendKeys("Chennai, TN");
});


Then('The candidate updates Homeowner or Renter information', async function () {
  await browser.sleep(3000);
  await submitneedsassessment.updateHomeownerOrRenter().click();
  await browser.sleep(3000);
  await submitneedsassessment.Renter().clear();
  await browser.sleep(3000);
  await submitneedsassessment.updateHomeownerOrRenter().click();
  await browser.sleep(3000);
  return submitneedsassessment.Renter().sendKeys("Rent");
});

Then('The candidate updates TypeOfhome information', async function () {
  await browser.sleep(3000);
  await submitneedsassessment.updateTypeOfHome().click();
  await browser.sleep(3000);
  await submitneedsassessment.house().clear();
  await browser.sleep(3000);
  await submitneedsassessment.updateTypeOfHome().click();
  await browser.sleep(3000);
  return submitneedsassessment.house().sendKeys("House");
});


Then('The candidate updates # of Rooms', async function () {
  await browser.sleep(3000);
  return needsassessment.tworooms().click();
});


Then('The candidate updates estimated move date', async function () {
  await browser.sleep(3000);
  await submitneedsassessment.estimatedDateIcon().click();
  await browser.sleep(3000);
  return submitneedsassessment.updateEstimatedDate().click();
});


Then('The candidate updates preferred contact phone #', async function () {
  await browser.sleep(3000);
  await submitneedsassessment.updatePreferredContact().click();
  await browser.sleep(3000);
  return submitneedsassessment.preferredContact().sendKeys("9876543210");
});


Then('The candidate sees all the fields updated in review page', async function () {
  await submitneedsassessment.confirmRelocating().getText().then(async (text1) => {
    await browser.sleep(3000);
    await expect(text1).equals("No");
    await submitneedsassessment.threeRelocatingmembers().getAttribute("value").then(async (text2) => {
      await browser.sleep(3000);
      await expect(text2).equals("3");
      await needsassessment.departureAddress().getAttribute("value").then(async (text3) => {
        await browser.sleep(3000);
        await expect(text3).equals("Test road, Chennai, TN");
        await submitneedsassessment.updatedestinationaddressField().getAttribute("value").then(async (text2) => {
          await browser.sleep(3000);
          await expect(text2).equals("Chennai, TN");
          await submitneedsassessment.Renter().getAttribute("value").then(async (text2) => {
            await browser.sleep(3000);
            await expect(text2).equals("Rent");
            await submitneedsassessment.house().getAttribute("value").then(async (text2) => {
              await browser.sleep(3000);
              await expect(text2).equals("House");
              await submitneedsassessment.confirmCount().getAttribute("value").then(async (text2) => {
                await browser.sleep(3000);
                return expect(text2).equals("3");
              });
            });
          });
        });
      });
    });
  });
});

//3) Scenario: To verify calendar control for estimated move date


When('The candidate sees a calendar control for estimated move date', async function () {
  await browser.driver.manage().window().setSize(1400, 900).then(async () => {
    await browser.sleep(3000);
    return expect(submitneedsassessment.estimatedDateIcon().isDisplayed()).to.eventually.be.true;
  });
});


Then('The candidate selects a date and sees the date format as yyyy-mm-dd', async function () {
  await browser.sleep(3000);
  await submitneedsassessment.estimatedDateIcon().click();
  await browser.sleep(3000);
  await submitneedsassessment.updateEstimatedDate().click();
  await submitneedsassessment.getestimatedDate().getAttribute("value").then(async(text)=>{
    var format: Array<String>=text.toString().split("-");
    var yyyy: number = format[0].length;
    await expect(yyyy).equals(4)
    var mm: number = format[1].length;
    await expect(mm).equals(2)
    var dd: number = format[2].length;
    return expect(dd).equals(2)
  })
});

//3) Scenario: To verify preferred contact number is mandatory


When('The candidate clicks on preferred contact field and clicks outside', async function () {
  await browser.driver.manage().window().setSize(1400, 900).then(async () => {
    await browser.sleep(3000);
    await submitneedsassessment.updatePreferredContact().click();
    await browser.sleep(3000);
    return submitneedsassessment.estimatedDateIcon().click();
  });
});


Then('The candidate seees mandatory validation message', async function () {
  await browser.sleep(3000);
  await submitneedsassessment.estimatedDateIcon().click();
  await browser.sleep(3000);
  await submitneedsassessment.updateEstimatedDate().click();
  await submitneedsassessment.getestimatedDate().getAttribute("value").then(async(text)=>{
    var format: Array<String>=text.toString().split("-");
    var yyyy: number = format[0].length;
    await expect(yyyy).equals(4)
    var mm: number = format[1].length;
    await expect(mm).equals(2)
    var dd: number = format[2].length;
    return expect(dd).equals(2)
  })
});

//4) Scenario: To verify candidate is able to submit needs assessment data     

When('The candidate clicks on submit', async function () {
  await browser.driver.manage().window().setSize(1400, 900).then(async () => {
    await browser.sleep(3000);
    await submitneedsassessment.estimatedDateIcon().click();
    await browser.sleep(3000);
    await submitneedsassessment.updateEstimatedDate().click();
    await browser.sleep(3000);
    await submitneedsassessment.updatePreferredContact().click();
    await browser.sleep(3000);
    await submitneedsassessment.preferredContact().sendKeys("1234567890");
    await browser.sleep(3000);
    return submitneedsassessment.submit().click();
  });
});


Then('The candidate is shown with Thank you for completing the Needs Assessment. We will alert you when your relocation package is ready. success message', function () {
  return expect(submitneedsassessment.successMessage().isDisplayed()).to.eventually.be.true;
});

//5) Scenario: To validate all input fields for candidate needs assessment in mobile view


Then('The candidate updates if anyone else is relocating in mobile view', async function () {
  await browser.driver.manage().window().setSize(500, 900).then(async () => {
    await browser.sleep(3000);
    await submitneedsassessment.updateRelocating().click();
    await browser.sleep(3000);
    return submitneedsassessment.relocatingNo().click();
  });
});


Then('The candidate updates number of relocating members in mobile view', async function () {
  await browser.sleep(3000);
  await submitneedsassessment.updateRelocatingmembers().click();
  await browser.sleep(3000);
  await submitneedsassessment.threeRelocatingmembers().clear();
  await browser.sleep(3000);
  await submitneedsassessment.updateRelocatingmembers().click();
  await browser.sleep(3000);
  return submitneedsassessment.threeRelocatingmembers().sendKeys("3");
});


Then('The candidate updates departure address in mobile view', async function () {
  await browser.sleep(3000);
  await submitneedsassessment.updatedepartureaddress().click();
  await browser.sleep(3000);
  await needsassessment.departureAddress().clear();
  await browser.sleep(3000);
  await submitneedsassessment.updatedepartureaddress().click();
  await browser.sleep(3000);
  return needsassessment.departureAddress().sendKeys("Test road, Chennai, TN");
});


Then('The candidate updates input Destination State and City in mobile view', async function () {
  await browser.sleep(3000);
  await submitneedsassessment.updatedestinationaddressIcon().click();
  await browser.sleep(3000);
  await submitneedsassessment.updatedestinationaddressField().clear();
  await browser.sleep(3000);
  await submitneedsassessment.updatedestinationaddressIcon().click();
  await browser.sleep(3000);
  return submitneedsassessment.updatedestinationaddressField().sendKeys("Chennai, TN");
});


Then('The candidate updates Homeowner or Renter information in mobile view', async function () {
  await browser.sleep(3000);
  await submitneedsassessment.updateHomeownerOrRenter().click();
  await browser.sleep(3000);
  await submitneedsassessment.Renter().clear();
  await browser.sleep(3000);
  await submitneedsassessment.updateHomeownerOrRenter().click();
  await browser.sleep(3000);
  return submitneedsassessment.Renter().sendKeys("Rent");
});

Then('The candidate updates TypeOfhome information in mobile view', async function () {
  await browser.sleep(3000);
  await submitneedsassessment.updateTypeOfHome().click();
  await browser.sleep(3000);
  await submitneedsassessment.house().clear();
  await browser.sleep(3000);
  await submitneedsassessment.updateTypeOfHome().click();
  await browser.sleep(3000);
  return submitneedsassessment.house().sendKeys("House");
});


Then('The candidate updates # of Rooms in mobile view', async function () {
  await browser.sleep(3000);
  return needsassessment.tworooms().click();
});


Then('The candidate updates estimated move date in mobile view', async function () {
  await browser.sleep(3000);
  await submitneedsassessment.estimatedDateIcon().click();
  await browser.sleep(3000);
  return submitneedsassessment.updateEstimatedDate().click();
});


Then('The candidate updates preferred contact phone # in mobile view', async function () {
  await browser.sleep(3000);
  await submitneedsassessment.updatePreferredContact().click();
  await browser.sleep(3000);
  return submitneedsassessment.preferredContact().sendKeys("9876543210");
});


Then('The candidate sees all the fields updated in review page in mobile view', async function () {
  await submitneedsassessment.confirmRelocating().getText().then(async (text1) => {
    await browser.sleep(3000);
    await expect(text1).equals("No");
    await submitneedsassessment.threeRelocatingmembers().getAttribute("value").then(async (text2) => {
      await browser.sleep(3000);
      await expect(text2).equals("3");
      await needsassessment.departureAddress().getAttribute("value").then(async (text3) => {
        await browser.sleep(3000);
        await expect(text3).equals("Test road, Chennai, TN");
        await submitneedsassessment.updatedestinationaddressField().getAttribute("value").then(async (text2) => {
          await browser.sleep(3000);
          await expect(text2).equals("Chennai, TN");
          await submitneedsassessment.Renter().getAttribute("value").then(async (text2) => {
            await browser.sleep(3000);
            await expect(text2).equals("Rent");
            await submitneedsassessment.house().getAttribute("value").then(async (text2) => {
              await browser.sleep(3000);
              await expect(text2).equals("House");
              await submitneedsassessment.confirmCount().getAttribute("value").then(async (text2) => {
                await browser.sleep(3000);
                return expect(text2).equals("3");
              });
            });
          });
        });
      });
    });
  });
});

//3) Scenario: To verify calendar control for estimated move date in mobile view


When('The candidate sees a calendar control for estimated move date in mobile view', async function () {
  await browser.driver.manage().window().setSize(500, 900).then(async () => {
    await browser.sleep(3000);
    return expect(submitneedsassessment.estimatedDateIcon().isDisplayed()).to.eventually.be.true;
  });
});


Then('The candidate selects a date and sees the date format as yyyy-mm-dd in mobile view', async function () {
  await browser.sleep(3000);
  await submitneedsassessment.estimatedDateIcon().click();
  await browser.sleep(3000);
  await submitneedsassessment.updateEstimatedDate().click();
  await submitneedsassessment.getestimatedDate().getAttribute("value").then(async(text)=>{
    var format: Array<String>=text.toString().split("-");
    var yyyy: number = format[0].length;
    await expect(yyyy).equals(4)
    var mm: number = format[1].length;
    await expect(mm).equals(2)
    var dd: number = format[2].length;
    return expect(dd).equals(2)
  })
});

//4) Scenario: To verify candidate is able to submit needs assessment data in mobile view  

When('The candidate clicks on submit in mobile view', async function () {
  await browser.driver.manage().window().setSize(500, 900).then(async () => {
    await browser.sleep(3000);
    await submitneedsassessment.estimatedDateIcon().click();
    await browser.sleep(3000);
    await submitneedsassessment.updateEstimatedDate().click();
    await browser.sleep(3000);
    await submitneedsassessment.updatePreferredContact().click();
    await browser.sleep(3000);
    await submitneedsassessment.preferredContact().sendKeys("1234567890");
    await browser.sleep(3000);
    return submitneedsassessment.submit().click();
  });
});


Then('The candidate is shown with Thank you for completing the Needs Assessment. We will alert you when your relocation package is ready. success message in mobile view', function () {
  return expect(submitneedsassessment.successMessage().isDisplayed()).to.eventually.be.true;
});