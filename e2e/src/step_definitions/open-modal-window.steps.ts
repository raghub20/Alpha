import { Given, Then, When, Before } from 'cucumber';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { OpenModalPage } from './open-modal-window.page';
import { browser } from 'protractor';


chai.use(chaiAsPromised);
const expect = chai.expect;

let openmodalpage: OpenModalPage;

Before(() => {
  openmodalpage = new OpenModalPage();
});

//1) Scenario: To verify clickable records and view modal window 

Given('The client is on the candidate profile summary page', async function () {
  return openmodalpage.get();
  //return openmodalpage.getCandidatesScreenE1().isPresent();
});

When('The client clicks “Invitation Sent - Resend” status record of any candidate', async function () {
  return await reccursive(); 
  async function reccursive() { 
  await openmodalpage.getinvitationsentresendE1().isPresent().then(async (text) => { //verify if invitation resend status is available
    await openmodalpage.getnextpageicon().getAttribute("ng-reflect-disabled").then(async (text2) => { //get whether next page is enabled
        if (text) { //if invitation resend is available
          await openmodalpage.getinvitationsentresendE1().click();// click on it
          return expect(openmodalpage.getmodalwindowforresendE1().isPresent()).to.eventually.be.true; 
        }
        else if (text2=='false') { //if next page icon is enabled 
          await openmodalpage.getnextpageicon().click(); //clcik next page
          return await reccursive(); //repeat the process
        }
    });
  });
};
});


When('The client clicks “Ready for Review” status record of any candidate', async function () {
  return await reccursive();
  async function reccursive() {
  await openmodalpage.getreadyforreviewE1().isPresent().then(async (text) => {
    await openmodalpage.getnextpageicon().getAttribute("ng-reflect-disabled").then(async (text2) => {
        if (text) {
          await openmodalpage.getreadyforreviewE1().click();
          return expect(openmodalpage.getmodalwindowforreadyforreview().isPresent()).to.eventually.be.true;
        }
        else if (text2=='false') {
          await openmodalpage.getnextpageicon().click();
          return await reccursive();
        }
    });
  });
}
});


//2) Scenario: To verify non clickable records


When('“Assessment In Progress” status is not a hyperlink', async function () {
  return await reccursive();
  async function reccursive() {
  await openmodalpage.getassessmentinprogressE1().isPresent().then(async (text) => {
    await openmodalpage.getnextpageicon().getAttribute("ng-reflect-disabled").then(async (text2) => {
        if (text) {
          return expect(openmodalpage.getassessmentinprogressE1().getTagName()).to.be.eventually.not.equals('a');
        }
        else if (text2=='false') {
          await openmodalpage.getnextpageicon().click();
          return await reccursive();
        }
    });
  });
}
});

When('“Invitation Not Sent” status is not a hyperlink', async function () {
  return await reccursive();
  async function reccursive() {
  await openmodalpage.getInvitationnotsentE1().isPresent().then(async (text) => {
    await openmodalpage.getnextpageicon().getAttribute("ng-reflect-disabled").then(async (text2) => {
        if (text) {
          return expect(openmodalpage.getInvitationnotsentE1().getTagName()).to.be.eventually.not.equals('a');
        }
        else if (text2=='false') {
          await openmodalpage.getnextpageicon().click();
          return await reccursive();
        }
    });
  });
}
});

When('“Pending Van Line Quote” status is not a hyperlink', async function () {
  return await reccursive();
  async function reccursive() {
  await openmodalpage.getPendingVanLineE1().isPresent().then(async (text) => {
    await openmodalpage.getnextpageicon().getAttribute("ng-reflect-disabled").then(async (text2) => {
        if (text) {
          return expect(openmodalpage.getPendingVanLineE1().getTagName()).to.be.eventually.not.equals('a');
        }
        else if (text2=='false') {
          await openmodalpage.getnextpageicon().click();
          return await reccursive();
        }
    });
  });
}
});