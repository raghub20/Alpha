import { Given, Then, When, Before } from 'cucumber';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { browser, element, by, promise } from 'protractor';
import { Router } from 'express';
import { OpenModalPage } from './open-modal-window.page';
import { Budgetcriteria } from './criteria-for-budget-prediction.page';

chai.use(chaiAsPromised);
const expect = chai.expect;
let openmodalwind: OpenModalPage;
let budgetcriteria: Budgetcriteria;

Before(() => {
  openmodalwind = new OpenModalPage();
  budgetcriteria = new Budgetcriteria();
});


//1) Scenario: To verify all the criteria to determine predicted budget range


         Given('The user clicks on a candidate record having ready for review status', async function () {
           await budgetcriteria.get();
           return await openmodalwind.getreadyforreviewE1().click();
         });


         When('The client contact sees the candidate information', async function () {
           return await expect(openmodalwind.getmodalwindowforreadyforreview().getText()).to.not.be.null;
         });



         Then('The client sees list of services in core services factored in calculation of the recommended budget', async function () {
           return await expect(budgetcriteria.getCoreServices().getText()).to.not.be.null
         });



         Then('The client sees total cost of core services', async function () {
          return await expect(budgetcriteria.getCoreServicesbudget().getText()).to.not.be.null;
         });


         Then('The client sees total cost of flex services', async function () {
           return await expect(budgetcriteria.getFlexservicebudget().getText()).to.not.be.null;
         });



         Then('The client sees total recommended budget', async function () {
          return await expect(budgetcriteria.getTotalRecommendedBudget().getText()).to.not.be.null;
         });

 

         Then('The client sees tax assistance and cost associated to tax assistance', async function () {
          await expect(budgetcriteria.getTaxassistance().getText()).to.not.be.null;
          return await expect(budgetcriteria.getTaxassistancebudget().getText()).to.not.be.null;
         });



//2) Scenario: To verify the working of tax assistance check box


         When('client sees tax assistance check box the client sees the checkbox is checked true by default', async function () {
          return await budgetcriteria.getTaxassistancecheckbox().getAttribute("aria-checked").then(async(text)=>{
            expect(text).to.equals('true');
          });
         });


         When('The client checks the tax assistance check box as false', async function () {
          return await budgetcriteria.getTaxassistancecheckboxclick().click();
         });



         Then('The client sees the checkbox is checked false', async function () {
          await budgetcriteria.getTaxassistancecheckbox().isDisplayed();
          return await budgetcriteria.getTaxassistancecheckbox().getAttribute("aria-checked").then(async(text)=>{
            expect(text).to.equals('false')
          });
         });


//3) Scenario: To verify presence of buttons and icons in budget prediction


         When('Client sees the candidate information', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });



         Then('The client sees {string} page', function (string) {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

 

         Then('The client sees modify total recommended budget icon', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });



         Then('The client sees {string} relocation budget', function (string) {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });


         Then('The client sees share relocation budget icon', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });


         Then('The client sees {string} button', function (string) {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });