import { When, Then } from "cucumber";
import { CostModelPage } from "../pages/cost-model.page";
import { browser, $ } from "protractor";
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { protractor } from "protractor/built/ptor";
chai.use(chaiAsPromised);
const expect = chai.expect;

let costModelPage = new CostModelPage();

When("User will navigate to cost model page", async function() {
    await costModelPage.navigateToCostModel();
});

When("User will click the Add Cost Model Button" , async function() {
   return costModelPage.getAddCostModelButton().click();

});

Then("User will verify model name error message displayed as {string}", async function(expectedErrorMsg){
   let levelEle = await costModelPage.getLevelDropDown();
   await browser.sleep(3000);
   await levelEle.click();
   await browser.sleep(3000);
   let actualerrormsg = await costModelPage.getModelNameErrorMessage().getText();
   expect(expectedErrorMsg).to.equal(actualerrormsg);
});


Then("User will verify level error message displayed as {string}", async function(expectedErrorMsg){
    $('body').sendKeys(protractor.Key.ESCAPE);
    let deptEle = await costModelPage.getDepartureDropDown();
    await deptEle.click();
    await browser.sleep(3000);
    let actualerrormsg = await costModelPage.getLevelErrorMessage().getText();
    expect(expectedErrorMsg).to.equal(actualerrormsg);
});

Then("User will verify departure error message displayed as {string}", async function(expectedErrorMsg){
    $('body').sendKeys(protractor.Key.ESCAPE);
    let destinationEle = await costModelPage.getDestinationDropDown();
    await destinationEle.click();
    await browser.sleep(3000);
    let actualerrormsg = await costModelPage.getDepartureErrorMessage().getText();
    expect(expectedErrorMsg).to.equal(actualerrormsg);
});

Then("User will verify destination error message displayed as {string}", async function(expectedErrorMsg){
    $('body').sendKeys(protractor.Key.ESCAPE);
    let departureEle = await costModelPage.getDepartureDropDown();
    await departureEle.click();
    await browser.sleep(3000);
    let actualerrormsg = await costModelPage.getDestinationErrorMessage().getText();
    expect(expectedErrorMsg).to.equal(actualerrormsg);
});

When('User will enter model name as {string}', (modelName) => {
    return costModelPage.getModelNameInput().sendKeys(modelName);
});

When('User will navigate to cost model page in mobile view', () => {
    return costModelPage.navigateToCostModel('mobile');
});
When('User navigate to cost model', async function () {     
      await costModelPage.navigateToCostModel();;
 });
Then('User will click the Add cost model button', async function () { 
    return costModelPage.getAddCostModelButton().click();
      });

Then('User will click the level', async function () {
    return costModelPage.getLevelDropDown().click();
});
Then('User will select the level from dropdown', async function () {
    return costModelPage.
}
 Then('User will view the total  relocation cost range for couple', function () {  
  return 'pending';
         });

 Then('User will view the total  relocation cost range for family', function () {
           
  return 'pending';
      });
Then("User will view the total  relocation cost range for single",() => {

});