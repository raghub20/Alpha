import { Given, Then, When, Before } from 'cucumber';
import { browser, element, by, ElementFinder } from 'protractor';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { CandidatesSummary } from './search-candidate.page';

chai.use(chaiAsPromised);
const expect = chai.expect;

let candidatesSummaryPage: CandidatesSummary;
// let actual: string;

Before(() => {
    candidatesSummaryPage = new CandidatesSummary();
});

// Login
When('User switch candidate summary page to mobile view', async () => {
    await browser.driver.manage().window().setSize(500, 900);
});

Given('The user is on the candidate profile summary page', async () => {
    await browser.driver.manage().window().setSize( 1400, 900 );
    await candidatesSummaryPage.get();
    await candidatesSummaryPage.getCandidatesTabE1().click();  // clicking candidate tab
});

Then('User can perform {string} search with {string}', async (colName, searchText) => {

    // == > Setup : First Setup the table to Show All Column
    await candidatesSummaryPage.getViewColumnSettingIconEl().click();
    await browser.sleep(2000);
    await candidatesSummaryPage.selectAllUnchekedColumn();

    // == > Setup : Second Search & Expand Table to display  Maximum(20) Mock Data In It
    await candidatesSummaryPage.searchCandidateTable(searchText);
    await browser.sleep(2000);
    await candidatesSummaryPage.displayMaximumPaginationTableData('20');

    // == > Validate : Search result not comes as empty
    const searchResultCount = await candidatesSummaryPage.getCellEl(searchText).count();
    expect(searchResultCount, `Failed Search For Column ${colName} !!!:-()`).not.to.be.below(1);

    // == > Validate : Searched column result (an array of one or many item) all contains same data in it :-)
    await candidatesSummaryPage.getCellEl(searchText).each(function (cell) {
        cell.getText().then(function (actualCellText) {
            expect(actualCellText, `Failed Search For Column ${colName} !!!:-()`).to.equal(searchText);
        });
    });

});

Then('User can perform Partial {string} search with {string}', async (colName, searchText) => {

    // == > Setup : Search & Expand Table to display  Maximum(20) Mock Data In It
    await candidatesSummaryPage.searchCandidateTable(searchText);
    await browser.sleep(2000);
    await candidatesSummaryPage.displayMaximumPaginationTableData('20');

    // == > Validate : Search result not comes as empty
    const searchResultCount = await candidatesSummaryPage.getCellEl(searchText).count();
    expect(searchResultCount, `Failed Search For Column ${colName} !!!:-()`).not.to.be.below(1);

    // == > Validate : Searched column result (an array of one or many item) all contains same data in it :-)
    await candidatesSummaryPage.getCellEl(searchText).each(function (cell) {
        cell.getText().then(function (actualCellText) {
            expect(actualCellText, `Failed Partial Search For Column ${colName} !!!:-()`).to.contain(searchText);
        });
    });
});


Then('User exepct reset search return to default view of the page', async () => {

    // == > Setup : Load the default data of the table into a array[]
    const defaultTableData = [];
    await candidatesSummaryPage.getALLCellEl().each(function (cell) {
        cell.getText().then(function (actualCellText) {
            // console.log(actualCellText); keep for future debugging
            defaultTableData.push(actualCellText);
        });
    });

    // == > Setup : Search Table
    await candidatesSummaryPage.searchCandidateTable('Maturity, Matthew');
    await browser.sleep(2000);

    // == > Setup : Reset Search
    await candidatesSummaryPage.getResetSearchXButtonEl().click();
    await browser.sleep(2000);

    // == > Setup : Load the data again after resetting into another array[]
    const afterResetTableData = [];
    await candidatesSummaryPage.getALLCellEl().each(function (cell) {
        cell.getText().then(function (actualCellText) {
            // console.log(actualCellText); keep for future debugging
            afterResetTableData.push(actualCellText);
        });
    });

    // == > Setup : Now validate Deefault Array & After Reset array is same :-)
    expect(defaultTableData).to.be.deep.equal(afterResetTableData);

});


// ############### MOBILE VIEW ##############
Then('User can perform {string} search with {string} in mobile view', async (colName, searchText) => {

    await browser.driver.manage().window().setSize(500, 900);

    // == > Setup : First Setup the table to Show All Column
    await candidatesSummaryPage.getViewColumnSettingIconEl().click();
    await browser.sleep(2000);
    await candidatesSummaryPage.selectAllUnchekedColumn();

    // == > Setup : Second Search & Expand Table to display  Maximum(20) Mock Data In It
    await candidatesSummaryPage.searchCandidateTable(searchText);
    await browser.sleep(2000);
    await candidatesSummaryPage.displayMaximumPaginationTableData('20');

    // == > Validate : Search result not comes as empty
    const searchResultCount = await candidatesSummaryPage.getCellEl(searchText).count();
    expect(searchResultCount, `Failed Search For Column ${colName} !!!:-()`).not.to.be.below(1);

    // == > Validate : Searched column result (an array of one or many item) all contains same data in it :-)
    await candidatesSummaryPage.getCellEl(searchText).each(function (cell) {
        cell.getText().then(function (actualCellText) {
            expect(actualCellText, `Failed Search For Column ${colName} !!!:-()`).to.equal(searchText);
        });
    });

});

Then('User can perform Partial {string} search with {string} in mobile view', async (colName, searchText) => {

    await browser.driver.manage().window().setSize(500, 900);

    // == > Setup : Search & Expand Table to display  Maximum(20) Mock Data In It
    await candidatesSummaryPage.searchCandidateTable(searchText);
    await browser.sleep(2000);
    await candidatesSummaryPage.displayMaximumPaginationTableData('20');

    // == > Validate : Search result not comes as empty
    const searchResultCount = await candidatesSummaryPage.getCellEl(searchText).count();
    expect(searchResultCount, `Failed Search For Column ${colName} !!!:-()`).not.to.be.below(1);

    // == > Validate : Searched column result (an array of one or many item) all contains same data in it :-)
    await candidatesSummaryPage.getCellEl(searchText).each(function (cell) {
        cell.getText().then(function (actualCellText) {
            expect(actualCellText, `Failed Partial Search For Column ${colName} !!!:-()`).to.contain(searchText);
        });
    });
});

Then('User exepct reset search return to default view of the page in mobile view', async () => {

    await browser.driver.manage().window().setSize(500, 900);

    // == > Setup : Load the default data of the table into a array[]
    const defaultTableData = [];
    await candidatesSummaryPage.getALLCellEl().each(function (cell) {
        cell.getText().then(function (actualCellText) {
            // console.log(actualCellText); keep for future debugging
            defaultTableData.push(actualCellText);
        });
    });

    // == > Setup : Search Table
    await candidatesSummaryPage.searchCandidateTable('Maturity, Matthew');
    await browser.sleep(2000);

    // == > Setup : Reset Search
    await candidatesSummaryPage.getResetSearchXButtonEl().click();
    await browser.sleep(2000);

    // == > Setup : Load the data again after resetting into another array[]
    const afterResetTableData = [];
    await candidatesSummaryPage.getALLCellEl().each(function (cell) {
        cell.getText().then(function (actualCellText) {
            // console.log(actualCellText); keep for future debugging
            afterResetTableData.push(actualCellText);
        });
    });

    // == > Setup : Now validate Deefault Array & After Reset array is same :-)
    expect(defaultTableData).to.be.deep.equal(afterResetTableData);

});
