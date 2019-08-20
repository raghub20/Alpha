import {CandidatePage} from '../pages/candidate.page';
import { Given, When, Then } from 'cucumber';
import moment = require('moment');

let candidateObj = new CandidatePage();

Given('User will open the candidate page in desktop mode', () => {
  return candidateObj.openCandidatePageInDesktopMode();
});

Given('User will open the candidate page in mobile mode', () => {
  return candidateObj.openCandidatePageInMobileMode();
});

When('User will click on Select Column button', ()=> {
  return candidateObj.getSelectColumnButton().click();
});

Then('User will verify status date format as {string}', async (dateFormat) => {
  let statusData = await candidateObj.getStatusDateData();
  for(let i=0; i<statusData.length; i++) {
    let result = moment(statusData[i], 'YYYY-MM-DD').format('YYYY-MM-DD');
    if(result == 'Invalid date') {
      return fail('Status Date : ' + statusData[i] + ' is not in expected date format. That is ' + dateFormat);
    }
  }
  return Promise.resolve();
});

Then('User will verify Invitation Sent Date format as {string}', async (dateFormat) => {
  let invitationSentDateDate = await candidateObj.getInivitationSentDateData();
  for(let i=0; i<invitationSentDateDate.length; i++) {
    if(invitationSentDateDate[i] != undefined && invitationSentDateDate[i] != "") {
      let result = moment(invitationSentDateDate[i], 'YYYY-MM-DD').format('YYYY-MM-DD');
      if(result == 'Invalid date') {
        return fail('Status Date : ' + invitationSentDateDate[i] + ' is not in expected date format. That is ' + dateFormat);
      }
    }
  }
  return Promise.resolve();
});
