import { Given, Then, When, Before } from 'cucumber';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { OpenModalPage } from './open-modal-window.page';
import { Budgetcriteria } from './criteria-for-budget-prediction.page';
import { protractor, browser } from 'protractor';

chai.use(chaiAsPromised);
const expect = chai.expect;
let openmodalwind: OpenModalPage;
let budgetcriteria: Budgetcriteria;

Before(() => {
  openmodalwind = new OpenModalPage();
  budgetcriteria = new Budgetcriteria();
  
});


//Desktop
//1) Scenario: To verify all the criteria to determine predicted budget range


Given('The user clicks on a candidate record having ready for review status', async function () {
  await budgetcriteria.get();
  await openmodalwind.getreadyforreviewE1().isDisplayed().then(async()=>{
    
    return await openmodalwind.getreadyforreviewE1().click();
  });
});


When('The client contact sees the candidate information', async function () {
  await browser.driver.manage().window().setSize(1400, 900).then(async()=>{
    return await expect(openmodalwind.getmodalwindowforreadyforreview().getText()).to.eventually.not.be.null;
  });
});




Then('The client sees list of services in core services factored in calculation of the recommended budget', async function () {
  return await expect(budgetcriteria.getCoreServices().getText()).to.eventually.not.be.null;
});



Then('The client sees total cost of core services', async function () {
  return await expect(budgetcriteria.getCoreServicesbudget().getText()).to.eventually.not.be.null;
});


Then('The client sees total cost of flex services', async function () {
  return await expect(budgetcriteria.getFlexservicebudget().getText()).to.eventually.not.be.null;
});



Then('The client sees total recommended budget', async function () {
  return await expect(budgetcriteria.getTotalRecommendedBudget().getText()).to.eventually.not.be.null;
});



Then('The client sees tax assistance and cost associated to tax assistance', async function () {
  await budgetcriteria.getTaxassistance().getText().then(async(text)=>{
    await expect(text).contains('tax');
    await budgetcriteria.getTaxassistancebudget().getText().then(async(text)=>{
    return await expect(text).to.not.be.null;
  })
});
});



//2) Scenario: To verify the working of tax assistance check box


When('client sees tax assistance check box the client sees the checkbox is checked true by default', async function () {
  await browser.driver.manage().window().setSize(1400, 900).then(async()=>{
  await budgetcriteria.getTaxassistancecheckbox().getAttribute("aria-checked").then(async (text) => {
    return await expect(text).to.equals('true');
  });
  });
});


Then('The client checks the tax assistance check box as false', async function () {
   await budgetcriteria.getTaxassistancecheckboxclick().isDisplayed().then(async()=>{
    return await budgetcriteria.getTaxassistancecheckboxclick().click();
   });
  });



Then('The client sees the checkbox is checked false', async function () {
          await budgetcriteria.getTaxassistancecheckbox().getAttribute("aria-checked").then(async (text) => {
            return await expect(text).to.equals('false');
          });
        });




//3) Scenario: To verify presence of buttons and icons in budget prediction


Then('The client sees {string} page', async function (string) {
  await browser.driver.manage().window().setSize(1400, 900).then(async()=>{
  return await expect(budgetcriteria.getshowdetailsbutton(string).isDisplayed()).to.eventually.be.true;
  });
});



Then('The client sees {string} relocation budget', async function (string) {
  return await expect(budgetcriteria.getapprovebutton(string).isDisplayed()).to.eventually.be.true;
});


Then('The client sees share relocation budget icon', async function () {
  return await expect(budgetcriteria.getshareicon().isDisplayed()).to.eventually.be.true;
});


Then('The client sees {string} button', async function (string) {
  return await expect(budgetcriteria.getcancelbutton(string).isDisplayed()).to.eventually.be.true;
});

//Mobile
//1) Scenario: To verify all the criteria to determine predicted budget range in mobile view


When('The client contact sees the candidate information in mobile view', async function () {
  await browser.driver.manage().window().setSize(500, 900).then(async () => {
    await openmodalwind.getmodalwindowforreadyforreview().isDisplayed().then(async()=>{
      return await expect(openmodalwind.getmodalwindowforreadyforreview().getText()).to.not.be.null;
    });
  });
  });




Then('The client sees list of services in core services factored in calculation of the recommended budget in mobile view', async function () {
  await budgetcriteria.getCoreServices().isDisplayed().then(async()=>{
      return await expect(budgetcriteria.getCoreServices().getText()).to.not.be.null
  });
});



Then('The client sees total cost of core services in mobile view', async function () {
    await budgetcriteria.getCoreServicesbudget().isDisplayed().then(async()=>{
      return await expect(budgetcriteria.getCoreServicesbudget().getText()).to.not.be.null;
  });
});


Then('The client sees total cost of flex services in mobile view', async function () {
    await budgetcriteria.getFlexservicebudget().isDisplayed().then(async()=>{
      return await expect(budgetcriteria.getFlexservicebudget().getText()).to.not.be.null;
  });
});



Then('The client sees total recommended budget in mobile view', async function () {
    await budgetcriteria.getTotalRecommendedBudget().isDisplayed().then(async()=>{
      return await expect(budgetcriteria.getTotalRecommendedBudget().getText()).to.not.be.null;
  });
});



Then('The client sees tax assistance and cost associated to tax assistance in mobile view', async function () {
  await budgetcriteria.getTaxassistance().getText().then(async(text)=>{
    await expect(text).contains('tax');
    await budgetcriteria.getTaxassistancebudget().getText().then(async(text)=>{
    return await expect(text).to.not.be.null;
  })
});
});



//2) Scenario: To verify the working of tax assistance check box in mobile view


When('client sees tax assistance check box the client sees the checkbox is checked true by default in mobile view', async function () {
  await budgetcriteria.getTaxassistancecheckbox().getAttribute("aria-checked").then(async (text) => {
    return await expect(text).to.equals('true');
  });
});


Then('The client checks the tax assistance check box as false in mobile view', async function () {
  await browser.driver.manage().window().setSize(500, 900).then(async () => {
   await budgetcriteria.getTaxassistancecheckboxclick().isDisplayed().then(async()=>{
    return await budgetcriteria.getTaxassistancecheckboxclick().click();
   });
   });
      });



Then('The client sees the checkbox is checked false in mobile view', async function () {
          await budgetcriteria.getTaxassistancecheckbox().getAttribute("aria-checked").then(async (text) => {
            return await expect(text).to.equals('false');
          });
        });




//3) Scenario: To verify presence of buttons and icons in budget prediction in mobile view


Then('The client sees {string} page in mobile view', async function (string) {
  await browser.driver.manage().window().setSize(500, 900).then(async () => {
  return await expect(budgetcriteria.getshowdetailsbutton(string).isDisplayed()).to.eventually.be.true;
  });
});



Then('The client sees {string} relocation budget in mobile view', async function (string) {
  return await expect(budgetcriteria.getapprovebutton(string).isDisplayed()).to.eventually.be.true;
});


Then('The client sees share relocation budget icon in mobile view', async function () {
  return await expect(budgetcriteria.getshareicon().isDisplayed()).to.eventually.be.true;
});


Then('The client sees {string} button in mobile view', async function (string) {
  return await expect(budgetcriteria.getcancelbutton(string).isDisplayed()).to.eventually.be.true;
});