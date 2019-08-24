import { When, Then } from "cucumber";
import { CostModelPage } from "../pages/cost-model.page";
import { FunctionLibrary } from './../util/function-library';
import { browser, $ } from "protractor";
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { protractor } from "protractor/built/ptor";

chai.use(chaiAsPromised);
const expect = chai.expect;

let costModelPage = new CostModelPage();
let lib = new FunctionLibrary();

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
    await $('body').sendKeys(protractor.Key.ESCAPE);
    let deptEle = await costModelPage.getDepartureDropDown();
    await deptEle.click();
    await browser.sleep(3000);
    let actualerrormsg = await costModelPage.getLevelErrorMessage().getText();
    expect(expectedErrorMsg).to.equal(actualerrormsg);
});

Then("User will verify departure error message displayed as {string}", async function(expectedErrorMsg){
    await $('body').sendKeys(protractor.Key.ESCAPE);
    let destinationEle = await costModelPage.getDestinationDropDown();
    await destinationEle.click();
    await browser.sleep(3000);
    let actualerrormsg = await costModelPage.getDepartureErrorMessage().getText();
    expect(expectedErrorMsg).to.equal(actualerrormsg);
});

Then("User will verify destination error message displayed as {string}", async function(expectedErrorMsg){
    await $('body').sendKeys(protractor.Key.ESCAPE);
    let departureEle = await costModelPage.getDepartureDropDown();
    await departureEle.click();
    await browser.sleep(3000);
    let actualerrormsg = await costModelPage.getDestinationErrorMessage().getText();
    expect(expectedErrorMsg).to.equal(actualerrormsg);
});

When('User will enter model name as {string}', (modelName) => {
    return costModelPage.getModelNameInput().sendKeys(modelName);
});

When('User will select Departure as {string}', async(optionVal) => {
    let departureEle = await costModelPage.getDepartureDropDown();
    await departureEle.click();
    return costModelPage.selectDeparture(optionVal);
});

When('User will select Destination as {string}', async(optionVal) => {
    let destinationEle = await costModelPage.getDestinationDropDown();
    await destinationEle.click();
    return costModelPage.selectDestination(optionVal);
});

When('User will navigate to cost model page in mobile view', () => {
    return costModelPage.navigateToCostModel('mobile');
});
When('User navigate to cost model', async function () {     
      await costModelPage.navigateToCostModel();;
 });

Then('User will click the level', async function () {
    costModelPage.getLevelDropDown().click();
});

Then('User will select the {string} level from dropdown', async function (optionVal) {
    return costModelPage.selectLevel(optionVal);
});

Then('User will view the total  relocation cost range for couple', async function () {  
    let el = await costModelPage.getCostRangeFor('2 - 3 People');
    let actualDescription = await el.getText();
    expect(actualDescription).contains('USD');
    actualDescription = actualDescription.replace('USD', '').trim();
    let currencyArr = actualDescription.split('-');
    expect(parseFloat(currencyArr[0].trim())).lessThan(parseFloat(currencyArr[1].trim()));
});

Then('User will view the total  relocation cost range for family', async function () {
    let el = await costModelPage.getCostRangeFor('4+ People');
    let actualDescription = await el.getText();
    expect(actualDescription).contains('USD');
    actualDescription = actualDescription.replace('USD', '').trim();
    let currencyArr = actualDescription.split('-');
    expect(parseFloat(currencyArr[0].trim())).lessThan(parseFloat(currencyArr[1].trim()));
});

Then("User will view the total  relocation cost range for single",async () => {
    let el = await costModelPage.getCostRangeFor('1 Person');
    let actualDescription = await el.getText();
    expect(actualDescription).contains('USD');
    actualDescription = actualDescription.replace('USD', '').trim();
    let currencyArr = actualDescription.split('-');
    expect(parseFloat(currencyArr[0].trim())).lessThan(parseFloat(currencyArr[1].trim()));
});

When('User will expand {string} section', async (costRangeType) => {
    let el = await costModelPage.getCostRangeFor(costRangeType);
    await lib.scrollToElement(el);
    return await el.click();
});

Then('User will see the below text in {string} section', async (costRangeType, dataTable) => {
    let expectedData = dataTable.hashes();
    let results = [];
    let el = await costModelPage.getCostRangeFor(costRangeType);
    await lib.scrollToElement(el);
    for(let i=0; i<expectedData.length; i++) {
        results.push(expect(costModelPage.getServiceText(costRangeType, expectedData[i]['Expected Text']).isPresent()).eventually.to.be.true);
    }
    return Promise.all(results);
});