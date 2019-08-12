import { Then, When, Before } from 'cucumber';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { Budgetcriteria } from './criteria-for-budget-prediction.page';
import { TotalCost } from './cost-total.page';
import { browser } from 'protractor';


chai.use(chaiAsPromised);
const expect = chai.expect;

let totalamount: Budgetcriteria;
let totalcost: TotalCost;

Before(() => {
  totalamount = new Budgetcriteria();
  totalcost = new TotalCost();
});

//Desktop
//1) Scenario: To verify total recommended budget


Then('The client verifies total recommended budget is sum of total cost and tax assistance cost', async function () {
  await totalamount.getTotalRecommendedBudget().getText().then(async (text) => {
    var totalreccomend: string = text.toString();
    totalreccomend = text.toString().replace(",","");
    var recomend: Array<string> = totalreccomend.split("USD");
    var int1: number = parseFloat(recomend[0]);
    await totalamount.getTaxassistancebudget().getText().then(async (text2) => {
      var taxassist: string = text2.toString();
      taxassist = text2.toString().replace(",","");
      var assist: Array<string> = taxassist.split("USD");
      var int2: number = parseInt(assist[0]);
      var result = int1 + int2;
      await totalcost.getTotalCost().getText().then(async (text3) => {
      var totalcost: string = text3.toString();
      totalcost = text3.toString().replace(",","");
      var total: Array<string> = totalcost.split("USD");
        var result2: number = parseInt(total[0])
        return await expect(result).to.equals(result2);
      });
    });
  });
});



//2) Scenario: To verify total recommended budget when tax is unchecked


Then('The client does not sees the tax amount', async function () {
          await totalamount.getTaxassistancebudget().getText().then(async (text) => {
            return await expect(text).to.equals('');
          });
        });




Then('The client verifies total recommended budget is total cost', async function () {
  await totalamount.getTotalRecommendedBudget().getText().then(async (text) => {
    await totalcost.getTotalCost().getText().then(async (text2) => {
      return await expect(text).to.equals(text2)
    });
  });
});

//Mobile
//1) Scenario: To verify total recommended budget


Then('The client verifies total recommended budget is sum of total cost and tax assistance cost in mobile view', async function () {
  await browser.driver.manage().window().setSize(500, 900).then(async () => {
    await totalamount.getTotalRecommendedBudget().getText().then(async (text) => {
      var totalreccomend: string = text.toString();
      totalreccomend = text.toString().replace(",","");
      var recomend: Array<string> = totalreccomend.split("USD");
      var int1: number = parseFloat(recomend[0]);
      await totalamount.getTaxassistancebudget().getText().then(async (text2) => {
        var taxassist: string = text2.toString();
        taxassist = text2.toString().replace(",","");
        var assist: Array<string> = taxassist.split("USD");
        var int2: number = parseInt(assist[0]);
        var result = int1 + int2;
        await totalcost.getTotalCost().getText().then(async (text3) => {
        var totalcost: string = text3.toString();
        totalcost = text3.toString().replace(",","");
        var total: Array<string> = totalcost.split("USD");
          var result2: number = parseInt(total[0])
          return await expect(result).to.equals(result2);
        });
      });
    });
  });
});



//2) Scenario: To verify total recommended budget when tax is unchecked


Then('The client does not sees the tax amount in mobile view', async function () {
  await browser.driver.manage().window().setSize(500, 900).then(async () => {
          await totalamount.getTaxassistancebudget().getText().then(async (text) => {
            return await expect(text).to.equals('');
          });
          });
        });




Then('The client verifies total recommended budget is total cost in mobile view', async function () {
  await browser.driver.manage().window().setSize(500, 900).then(async () => {
  await totalamount.getTotalRecommendedBudget().getText().then(async (text) => {
    await totalcost.getTotalCost().getText().then(async (text2) => {
      return await expect(text).to.equals(text2);
    });
    });
  });
});