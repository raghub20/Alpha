import { Injectable } from '@angular/core';
import { Candidate } from '../models/candidate';
import { CandidateBudget } from '../models/candidate-budget.model';

@Injectable({
  providedIn: 'root'
})
export class CandidateProfilesService {

  // SAMPLE JSON data - will be replaced once we have httpclient implemented
  // Method is implemented below to return the data
  candidateList: Candidate[] = [
    {
      'candidateId': '1111',
      'fullname': 'Maturity, Matthew',
      'level': {
        'levelId': 'level2',
        'levelName': 'Level 2 (100,001 to 250,000 USD)',
        'levelDescription': 'Level 2 - Salary details'
      },
      'departure': 'NJ, Nutley',
      'destination': 'TX, Austin',
      'status': 'Invitation Not Sent',
      'isAssessmentReceived': false,
      'emailAddress': 'mathew.maturity@gmail.com',
      'businessUnit': 'Human Resources',
      'invitationSentDate': '',
      'createdDate': '21-JUN-19',
      'createdBy': 'Matthew, Maturity',
      'lastUpdatedDate': '21-JUN-19',
      'streetAddress': '41 Apple Ridge Rd',
      'city': 'Danbury',
      'state': 'CT',
      'zipcode': '06810',
      'noOfRooms': '4',
      'housingType': 'Rents Apartment',
      'noOfChildren': '3',
      'total': '5'
    },
    {
      'candidateId': '2222',
      'fullname': 'Beal, Christopher',
      'level': {
        'levelId': 'level1',
        'levelName': 'Level 1 (250,000+ USD)',
        'levelDescription': 'Level 1 - Salary details'
      },
      'departure': 'GA, Atlanta',
      'destination': 'TX, Dallas',
      'status': 'Ready for Review',
      'isAssessmentReceived': true,
      'emailAddress': 'chris.beal@gmail.com',
      'businessUnit': 'Finance',
      'invitationSentDate': '9-APR-2019',
      'createdDate': '9-APR-19',
      'createdBy': 'Matthew, Maturity',
      'lastUpdatedDate': '2-MAY-19',
      'streetAddress': '41 Apple Ridge Rd',
      'city': 'Danbury',
      'state': 'CT',
      'zipcode': '06810',
      'noOfRooms': '4',
      'housingType': 'Rents Apartment',
      'noOfChildren': '3',
      'total': '5',
    },
    {
      'candidateId': '3333',
      'fullname': 'Goulet, Dan',
      'level': {
        'levelId': 'level2',
        'levelName': 'Level 2 (100,001 to 250,000 USD)',
        'levelDescription': 'Level 2 - Salary details'
      },
      'departure': 'CA, San Francisco',
      'destination': 'IL, Chicago',
      'status': 'Pending Van Line Quote',
      'isAssessmentReceived': true,
      'emailAddress': 'dan.goulet@gmail.com',
      'businessUnit': 'Engineering',
      'invitationSentDate': '22-FEB-2019',
      'createdDate': '2-FEB-19',
      'createdBy': 'Matthew, Maturity',
      'lastUpdatedDate': '23-MAR-19',
      'streetAddress': '8 pacific Ave',
      'city': 'Fremont',
      'state': 'CA',
      'zipcode': '01234',
      'noOfRooms': '8',
      'housingType': 'Owns house',
      'noOfChildren': '3',
      'total': '5',
    },
    {
      'candidateId': '4444',
      'fullname': 'Cordon, James',
      'level': {
        'levelId': 'level3',
        'levelName': 'Level 3 (0 to 100,000 USD)',
        'levelDescription': 'Level 3 - Salary details'
      },
      'departure': 'PA, Philadelphia',
      'destination': 'TX, Austin',
      'status': 'Invitation Not Sent',
      'isAssessmentReceived': false,
      'emailAddress': 'j.cordon@gmail.com',
      'businessUnit': 'Engineering',
      'invitationSentDate': '28-JAN-2019',
      'createdDate': '23-JAN-19',
      'createdBy': 'Matthew, Maturity',
      'lastUpdatedDate': '30-JAN-19',
      'streetAddress': '41 Apple Ridge Rd',
      'city': 'Danbury',
      'state': 'CT',
      'zipcode': '06810',
      'noOfRooms': '4',
      'housingType': 'Rents Apartment',
      'noOfChildren': '3',
      'total': '5'
    },
    {
      'candidateId': '5555',
      'fullname': 'Hayes, Francesca',
      'level': {
        'levelId': 'level1',
        'levelName': 'Level 1 (250,000+ USD)',
        'levelDescription': 'Level 1 - Salary details'
      },
      'departure': 'NJ, Nutley',
      'destination': 'TX, Austin',
      'status': 'Pending Van Line Quote',
      'isAssessmentReceived': true,
      'emailAddress': 'francesca.hayes@gmail.com',
      'businessUnit': 'Accounting',
      'invitationSentDate': '22-FEB-2019',
      'createdDate': '2-FEB-19',
      'createdBy': 'Matthew, Maturity',
      'lastUpdatedDate': '23-MAR-19',
      'streetAddress': '8 pacific Ave',
      'city': 'Boston',
      'state': 'MA',
      'zipcode': '01234',
      'noOfRooms': '6',
      'housingType': 'Rents Apartment',
      'noOfChildren': '4',
      'total': '6'
    },
    {
      'candidateId': '6666',
      'fullname': 'Hu, Adam',
      'level': {
        'levelId': 'level2',
        'levelName': 'Level 2 (100,001 to 250,000 USD)',
        'levelDescription': 'Level 2 - Salary details'
      },
      'departure': 'NJ, Nutley',
      'destination': 'TX, Austin',
      'status': 'Invitation Not Sent',
      'isAssessmentReceived': false,
      'emailAddress': 'adam.hu@gmail.com',
      'businessUnit': 'Marketing',
      'invitationSentDate': '21-JUN-2019',
      'createdDate': '21-JUN-19',
      'createdBy': 'Matthew, Maturity',
      'lastUpdatedDate': '21-JUN-19',
      'streetAddress': '41 Apple Ridge Rd',
      'city': 'Danbury',
      'state': 'CT',
      'zipcode': '06810',
      'noOfRooms': '4',
      'housingType': 'Rents Apartment',
      'noOfChildren': '3',
      'total': '5'
    },
    {
      'candidateId': '7777',
      'fullname': 'Jones, Suehong',
      'level': {
        'levelId': 'level2',
        'levelName': 'Level 2 (100,001 to 250,000 USD)',
        'levelDescription': 'Level 2 - Salary details'
      },
      'departure': 'NJ, Nutley',
      'destination': 'TX, Austin',
      'status': 'Invitation Not Sent',
      'isAssessmentReceived': false,
      'emailAddress': 'suehong.jones@gmail.com',
      'businessUnit': 'Human Resources',
      'invitationSentDate': '2-JUN-2019',
      'createdDate': '2-JUN-19',
      'createdBy': 'Matthew, Maturity',
      'lastUpdatedDate': '20-JUN-19',
      'streetAddress': '41 Apple Ridge Rd',
      'city': 'Danbury',
      'state': 'CT',
      'zipcode': '06810',
      'noOfRooms': '4',
      'housingType': 'Rents Apartment',
      'noOfChildren': '3',
      'total': '5'
    },
    {
      'candidateId': '8888',
      'fullname': 'Rector, Aleksandr',
      'level': {
        'levelId': 'level2',
        'levelName': 'Level 2 (100,001 to 250,000 USD)',
        'levelDescription': 'Level 2 - Salary details'
      },
      'departure': 'NJ, Nutley',
      'destination': 'TX, Austin',
      'status': 'Invitation Not Sent',
      'isAssessmentReceived': false,
      'emailAddress': 'aleksandr.rector@gmail.com',
      'businessUnit': 'Product Solutions',
      'invitationSentDate': '21-JUN-2019',
      'createdDate': '21-JUN-19',
      'createdBy': 'Matthew, Maturity',
      'lastUpdatedDate': '21-JUN-19',
      'streetAddress': '41 Apple Ridge Rd',
      'city': 'Danbury',
      'state': 'CT',
      'zipcode': '06810',
      'noOfRooms': '4',
      'housingType': 'Rents Apartment',
      'noOfChildren': '3',
      'total': '5'
    },
    {
      'candidateId': '9999',
      'fullname': 'Richardson, Matthew',
      'level': {
        'levelId': 'level2',
        'levelName': 'Level 2 (100,001 to 250,000 USD)',
        'levelDescription': 'Level 2 - Salary details'
      },
      'departure': 'NJ, Nutley',
      'destination': 'IL, Chicago',
      'status': 'Invitation Not Sent',
      'isAssessmentReceived': false,
      'emailAddress': 'mathew.richardson@gmail.com',
      'businessUnit': 'Human Resources',
      'invitationSentDate': '21-JUN-2019',
      'createdDate': '21-JUN-19',
      'createdBy': 'Matthew, Maturity',
      'lastUpdatedDate': '21-JUN-19',
      'streetAddress': '41 Apple Ridge Rd',
      'city': 'Danbury',
      'state': 'CT',
      'zipcode': '06810',
      'noOfRooms': '4',
      'housingType': 'Rents Apartment',
      'noOfChildren': '3',
      'total': '5'
    },
    {
      'candidateId': '1212',
      'fullname': 'Varaha, Pritpal',
      'level': {
        'levelId': 'level1',
        'levelName': 'Level 1 (250,000+ USD)',
        'levelDescription': 'Level 1 - Salary details'
      },
      'departure': 'NY, New York',
      'destination': 'GA, Atlanta',
      'status': 'Invitation Not Sent',
      'isAssessmentReceived': false,
      'emailAddress': 'pritpal.varaha@gmail.com',
      'businessUnit': 'Finance',
      'invitationSentDate': '21-JUN-2019',
      'createdDate': '21-JUN-19',
      'createdBy': 'Matthew, Maturity',
      'lastUpdatedDate': '21-JUN-19',
      'streetAddress': '41 Apple Ridge Rd',
      'city': 'Danbury',
      'state': 'CT',
      'zipcode': '06810',
      'noOfRooms': '4',
      'housingType': 'Rents Apartment',
      'noOfChildren': '3',
      'total': '5'
    },
    {
      'candidateId': '1313',
      'fullname': 'Ellacott, Robin',
      'level': {
        'levelId': 'level3',
        'levelName': 'Level 3 (0 to 100,000 USD)',
        'levelDescription': 'Level 3 - Salary details'
      },
      'departure': 'NJ, Morristown',
      'destination': 'CA, Los Angeles',
      'status': 'Invitation Not Sent',
      'isAssessmentReceived': false,
      'emailAddress': 'robin.ellacott@gmail.com',
      'businessUnit': 'Engineering',
      'invitationSentDate': '21-JUN-2019',
      'createdDate': '21-JUN-19',
      'createdBy': 'Matthew, Maturity',
      'lastUpdatedDate': '21-JUN-19',
      'streetAddress': '41 Apple Ridge Rd',
      'city': 'Danbury',
      'state': 'CT',
      'zipcode': '06810',
      'noOfRooms': '4',
      'housingType': 'Rents Apartment',
      'noOfChildren': '3',
      'total': '5'
    }
  ];

  candidateBudgetDetails: CandidateBudget[] = [
    {
      candidateId: '1111',
      service: [],
      taxAmt: 17300,
      totalRecomBudgetAmt: 51550,
      totalCostAmt: 51550,
      totalCostCurrency: 'USD'
    },
    {
      candidateId: '2222',
      service: [{
        serviceName: 'Core Benefits',
        serviceDesc: 'Van Line Move (Includes Insurance)',
        serviceAmt: 18300,
        serviceCurrency: 'USD',
      },
      {
        serviceName: 'Flexible Spend',
        serviceDesc: '',
        serviceAmt: 15550,
        serviceCurrency: 'USD',
      }],
      taxAmt: 17300,
      totalRecomBudgetAmt: 51550,
      totalCostAmt: 51550,
      totalCostCurrency: 'USD'
    },
    {
      candidateId: '3333',
      service: [],
      taxAmt: 17300,
      totalRecomBudgetAmt: 51550,
      totalCostAmt: 51550,
      totalCostCurrency: 'USD'
    },
    {
      candidateId: '4444',
      service: [],
      taxAmt: 17300,
      totalRecomBudgetAmt: 51550,
      totalCostAmt: 51550,
      totalCostCurrency: 'USD'
    },
    {
      candidateId: '5555',
      service: [],
      taxAmt: 17300,
      totalRecomBudgetAmt: 51550,
      totalCostAmt: 51550,
      totalCostCurrency: 'USD'
    },
    {
      candidateId: '6666',
      service: [],
      taxAmt: 17300,
      totalRecomBudgetAmt: 51550,
      totalCostAmt: 51550,
      totalCostCurrency: 'USD'
    },
    {
      candidateId: '7777',
      service: [],
      taxAmt: 17300,
      totalRecomBudgetAmt: 51550,
      totalCostAmt: 51550,
      totalCostCurrency: 'USD'
    },
    {
      candidateId: '8888',
      service: [],
      taxAmt: 17300,
      totalRecomBudgetAmt: 51550,
      totalCostAmt: 51550,
      totalCostCurrency: 'USD'
    },
    {
      candidateId: '9999',
      service: [],
      taxAmt: 17300,
      totalRecomBudgetAmt: 51550,
      totalCostAmt: 51550,
      totalCostCurrency: 'USD'
    },
    {
      candidateId: '1212',
      service: [],
      taxAmt: 17300,
      totalRecomBudgetAmt: 51550,
      totalCostAmt: 51550,
      totalCostCurrency: 'USD'
    },
    {
      candidateId: '1313',
      service: [],
      taxAmt: 17300,
      totalRecomBudgetAmt: 51550,
      totalCostAmt: 51550,
      totalCostCurrency: 'USD'
    },
  ];


  newCandidate: Candidate;
  /**variable to store the data which is passed as argument */
  getTax: CandidateBudget;
  /**variable to store the total cost after tax assistance is included */
  totalSum: number;
  /* Return the candidate json list and loop to display in the table */
  getCandidateProfiles(): Candidate[] {
    return this.candidateList;
  }
  getCandidateBudgetDetails(id: string): CandidateBudget {    
    return this.candidateBudgetDetails.find(index => index.candidateId === id);    
  }
  /** calculatetax  */
  calcTaxAssistance(data: CandidateBudget) {
    this.getTax = data;
    this.totalSum = this.getTax.taxAmt + this.getTax.totalCostAmt;
    return (this.totalSum);
  }

  /* Return the candidate json list and loop to display in the table */
  addCandidateProfile(formData, levelDetails, isInvitationSent, candidateId) {
    const dateString = this.formatDate(new Date());
    console.log("CandidateID" + candidateId);
    console.log(this.candidateList.find(v => v.fullname == formData.LastName + ', ' + formData.FirstName));
    if (this.candidateList.find(v => v.candidateId == candidateId) == undefined) {
      console.log("New Candidate");
      const newCandidateObj = {
     
        'fullname': formData.LastName + ', ' + formData.FirstName,
        'level': {
          'levelId': levelDetails.levelId,
          'levelName': levelDetails.levelName,
          'levelDescription': levelDetails.levelDescription
        },
        'departure': formData.Departure,
        'destination': formData.Destination,
        'status': isInvitationSent ? 'Invitation Sent' : 'Invitation Not Sent',
        'isInvitationSent': isInvitationSent,
        'invitationText': 'Resend',
        'isAssessmentReceived': false,
        'email': formData.Email,
        'businessUnit': formData.BusinessUnit,
        'emailAddress': formData.Email,
        'invitationSentDate': isInvitationSent ? dateString : '',
        'createdDate': '21-JUN-19',
        'createdBy': 'Matthew, Maturity',
        'lastUpdatedDate': '21-JUN-19',
        'streetAddress': '41 Apple Ridge Rd',
      'city': 'Danbury',
      'state': 'CT',
      'zipcode': '06810',
      'noOfRooms': '4',
      'housingType': 'Rents Apartment',
      'noOfChildren': '3',
      'total': '5',
        'service': [],
        'taxAmt': 17300,
        'totalRecomBudgetAmt': 51550,
        'totalCostAmt': 51550,
        'totalCostCurrency': 'USD',
        'candidateId': (Math.floor((Math.random() * 100000) + 1)).toString() // TBD.
      };
      this.candidateList.push(newCandidateObj);
    } else {
      console.log(formData.businessUnit);
      console.log(formData.Email);
      console.log("FormData" + formData);
      this.candidateList.filter(function (item) {
        return item.candidateId === candidateId;
      }).map(function (item) {
        item.fullname = formData.LastName + ', ' + formData.FirstName;
        item.level.levelId = levelDetails.levelId;
        item.level.levelName = levelDetails.levelName;
        item.level.levelDescription = levelDetails.levelDescription;
        item.departure = formData.Departure;
        item.destination = formData.Destination;
        if (item.isAssessmentReceived === true) {
          item.status = 'Pending Van Line Quote';
          item.isAssessmentReceived = true;
        } else {
          item.status = isInvitationSent ? 'Invitation Sent' : 'Invitation Not Sent';
          item.isAssessmentReceived = false;
        }
        item.businessUnit = formData.BusinessUnit;
        item.invitationSentDate = isInvitationSent ? dateString : '';
        item.emailAddress = formData.Email;
        console.log("Update Item: "+ item);
        return item;
      });
    }
  }

  formatDate(date) {
    var monthNames = [
      "JAN", "FEB", "MAR",
      "APR", "MAY", "JUN", "JUL",
      "AUG", "SEP", "OCT",
      "NOV", "DEC"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + '-' + monthNames[monthIndex] + '-' + year;
  }


}
