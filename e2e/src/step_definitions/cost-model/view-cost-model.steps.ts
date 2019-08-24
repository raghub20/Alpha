import { browser, ExpectedConditions, element, ElementFinder, by, promise } from 'protractor';
import { Given, Then, When, Before } from 'cucumber';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { clickOn, typeOn, clearField, getElementValueFor } from '../../support/web-page-reusable-actions';
import { CostModelPage } from './cost-model.page';


chai.use(chaiAsPromised);
const expect = chai.expect;

let costModelPage: CostModelPage;

Before(() => {
    costModelPage = new CostModelPage();
});


Given('I am a user who wants to add a cost model', async () => {
    await costModelPage.getUser();
});

When('I visit cost models tab', () => {
    return costModelPage.get();
});

Then ('I switch To Mobile View', async () => {
    await browser.driver.manage().window().setSize(500, 900);
});


Then('I expect cost models table with below table headings', async (table) => {
    const expTableHeading = [];
    const data = table.rows();
    for (let i = 0; i < data.length; i++) {
        expTableHeading.push(table.rows()[i][0]);
    }

    // console.log('\n >> Expected Table Heading \n');
    // console.log(expTableHeading);

    const actualTableHeadinginPage = [];
    await costModelPage.getAllCostModelTableHeadings().each(function (theadElement, index) {
        theadElement.getText().then(function (text) {
            actualTableHeadinginPage.push(text);
        });
    });

    // console.log('\n >> Actual Table Heading \n');
    // console.log(actualTableHeadinginPage);

    await expect(expTableHeading).to.deep.equal(actualTableHeadinginPage);
});


Then('I expect save button is only enabled after all below input', async (table) => {
    // Data table is 2 DIm array parse it to get all Test input
    const modelName = table.rows()[0][1];
    const Level = table.rows()[1][1];
    const Departure = table.rows()[2][1];
    const Destination = table.rows()[3][1];

    // Starting the Form By Clicking Add new Button
    await clickOn(costModelPage.getCreateCostModelButtonEl());

    // ########### Entering the Form ###########
    const isSaveButtonDisabled = []; // Array that will store save button enable/disable status

    // Enter Model Name & Check Save Button is disabled
    await typeOn(costModelPage.getCostModelFormModelNameField(), modelName);
    isSaveButtonDisabled.push(await costModelPage.getCostModelFormSaveButtonEl().isEnabled());

    // Enter Level & Check Save Button is disabled
    await clickOn(costModelPage.getCostModelFormLevelDropDown());
    await clickOn(costModelPage.getCostModelOptionText(Level));
    isSaveButtonDisabled.push(await costModelPage.getCostModelFormSaveButtonEl().isEnabled());

    // Enter Departure & Check Save Button is disabled
    await typeOn(costModelPage.getCostModelFormDepartureField(), Departure);
    await clickOn(costModelPage.getCostModelOptionText(Departure)); ///////
    isSaveButtonDisabled.push(await costModelPage.getCostModelFormSaveButtonEl().isEnabled());

    // Enter Destination & Check Save Button is disabled
    await typeOn(costModelPage.getCostModelFormDestinationField(), Destination);
    await clickOn(costModelPage.getCostModelOptionText(Destination)); ////////////
    isSaveButtonDisabled.push(await costModelPage.getCostModelFormSaveButtonEl().isEnabled());  // This Should True

    // Clicking Generate Button
    await clickOn(costModelPage.getCostModelFormSaveButtonEl());
    isSaveButtonDisabled.push(await costModelPage.getCostModelFormSaveButtonEl().isEnabled()); // This Should True

    await expect(isSaveButtonDisabled).to.have.ordered.members([false, false, false, true, true]);
});



Then('I can create a cost model with below infomration', async (table) => {
    // Data table is 2 DIm array parse it to get all Test input
    const modelName = table.rows()[0][1];
    const Level = table.rows()[1][1];
    const Departure = table.rows()[2][1];
    const Destination = table.rows()[3][1];

    // Starting the Form By Clicking Add new Button
    await clickOn(costModelPage.getCreateCostModelButtonEl());

    // ########### Entering the Form ###########
    // Model Name - Text Field
    await typeOn(costModelPage.getCostModelFormModelNameField(), modelName);

    // Level - Selecting from the dropdown
    await clickOn(costModelPage.getCostModelFormLevelDropDown());
    await clickOn(costModelPage.getCostModelOptionText(Level));

    // Departure - Enter & Select the option
    await typeOn(costModelPage.getCostModelFormDepartureField(), Departure);
    await clickOn(costModelPage.getCostModelOptionText(Departure));

    // Destination - Enter & Select the option
    await typeOn(costModelPage.getCostModelFormDestinationField(), Destination);
    await clickOn(costModelPage.getCostModelOptionText(Destination));

    // Generate Cost Model Button to Click
    await clickOn(costModelPage.getCostModelFormSaveButtonEl());

    // ########### xxxx Form Completed xxxx ###########
    await browser.sleep(2000);
    await costModelPage.getSearchTableFieldEl().isDisplayed();
    await costModelPage.getSearchTableFieldEl().click();
    await costModelPage.getSearchTableFieldEl().sendKeys(modelName);

    const expSearchResult = [];
    const data = table.rows();
    for (let i = 0; i < data.length; i++) {
        expSearchResult.push(table.rows()[i][1]);
    }
    
    // console.log('\n >> Expected Search Results \n');
    // console.log(expSearchResult);

    const actualSearchResult = [];
    await costModelPage.getFirstCostModelTableRows().each(function (tdElement, index) {
        tdElement.getText().then(function (text) {
            actualSearchResult.push(text);
        });
    });

    // console.log('\n >> Actual Search Results \n');
    // console.log(actualSearchResult);

    await expect(actualSearchResult).to.include.members(expSearchResult);

});


Then('I expect to see a snack bar notification after saving', async () => {
    const modelName = 'Sample Model';
    const Level = 'Level 2 (100,001 to 250,000 USD)';
    const Departure = 'NY, New York City';
    const Destination = 'TX, Houston';

    // Starting the Form By Clicking Add new Button
    await clickOn(costModelPage.getCreateCostModelButtonEl());

    // ########### Entering the Form ###########
    // Model Name - Text Field
    await typeOn(costModelPage.getCostModelFormModelNameField(), modelName);

    // Level - Selecting from the dropdown
    await clickOn(costModelPage.getCostModelFormLevelDropDown());
    await clickOn(costModelPage.getCostModelOptionText(Level));

    // Departure - Enter & Select the option
    await typeOn(costModelPage.getCostModelFormDepartureField(), Departure);
    await clickOn(costModelPage.getCostModelOptionText(Departure));

    // Destination - Enter & Select the option
    await typeOn(costModelPage.getCostModelFormDestinationField(), Destination);
    await clickOn(costModelPage.getCostModelOptionText(Destination));
    await clickOn(costModelPage.getCostModelFormSaveButtonEl());

    // Preparing The Notifacitaion Element
    await expect(costModelPage.getCostModelSnackBarNotification().isDisplayed()).to.eventually.be.true;
});


Then('I expect to be able to cancel the data entry', async () => {
    const modelName = 'Sample Model-2';
    const Level = 'Level 2 (100,001 to 250,000 USD)';
    const Departure = 'NY, New York City';
    const Destination = 'TX, Houston';

    // Starting the Form By Clicking Add new Button
    await clickOn(costModelPage.getCreateCostModelButtonEl());

    // ########### Entering the Form ###########
    // Model Name - Text Field
    await typeOn(costModelPage.getCostModelFormModelNameField(), modelName);

    // Level - Selecting from the dropdown
    await clickOn(costModelPage.getCostModelFormLevelDropDown());
    await clickOn(costModelPage.getCostModelOptionText(Level));

    // Departure - Enter & Select the option
    await typeOn(costModelPage.getCostModelFormDepartureField(), Departure);
    await clickOn(costModelPage.getCostModelOptionText(Departure));

    // Destination - Enter & Select the option
    await typeOn(costModelPage.getCostModelFormDestinationField(), Destination);
    await clickOn(costModelPage.getCostModelOptionText(Destination));

    // Cancelling The Data Entry
    await clickOn(costModelPage.getCostModelFormCancelButtonEl());
    await browser.sleep(1000);
    await expect(costModelPage.getCreateCostModelButtonEl().isDisplayed()).to.eventually.be.true;
});


Then('I can navigate to model name {string}', async (modelName) => {
    await costModelPage.getCostModelTableNameCellFor(modelName).click().then(async () => {
        await expect(costModelPage.getCostModelFormModelNameField().getAttribute('value')).to.eventually.equal(modelName);
    });
});