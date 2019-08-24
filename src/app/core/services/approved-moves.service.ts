import { Injectable } from '@angular/core';
import { ApprovedMove } from '../models/approved-move';

@Injectable({
  providedIn: 'root'
})
export class ApprovedMovesService {

  // SAMPLE JSON data - will be replaced once we have httpclient implemented
  // Method is implemented below to return the data
  approveMovesList: ApprovedMove[] = [
    {
      'moveId': '21312',
      'candidate': {
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
        'invitationSentDate': '2019-06-21',
        'createdDate': '2019-06-21',
        'createdBy': 'Matthew, Maturity',
        'lastUpdatedDate': '2019-06-21',
        'streetAddress': '41 Apple Ridge Rd',
        'city': 'Danbury',
        'state': 'CT',
        'zipcode': '06810',
        'noOfRooms': '4',
        'housingType': 'Rents Apartment',
        'noOfChildren': '3',
        'total': '5'
      },
      'authorizedAmount': '75,000 USD',
      'spentAmount': '45,000 USD',
      'departure': 'NY, New York',
      'destination': 'NJ, Jersey City',
      'status': 'Authorized',
      'lastUpdateDate': '2019-05-15',
      'paymentReceived': 'YES',
      'authorizedBy': 'Tom Jefferson',
      'authorizedDate': '2019-05-15',
      'authorizedClientName': 'Starbucks',
      'createdBy': 'alpha_admin',
      'createdDate': '2019-05-06'
    },
    {
      'moveId': '21312',
      'candidate': {
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
        'invitationSentDate': '2019-04-09',
        'createdDate': '2019-04-09',
        'createdBy': 'Matthew, Maturity',
        'lastUpdatedDate': '2019-02-05',
        'streetAddress': '41 Apple Ridge Rd',
        'city': 'Danbury',
        'state': 'CT',
        'zipcode': '06810',
        'noOfRooms': '4',
        'housingType': 'Rents Apartment',
        'noOfChildren': '3',
        'total': '5'
      },
      'authorizedAmount': '90,000 USD',
      'spentAmount': '60,000 USD',
      'departure': 'NJ, Jersey City',
      'destination': 'CA, San Francisco',
      'status': 'Move in Progress',
      'lastUpdateDate': '2019-05-20',
      'paymentReceived': 'YES',
      'authorizedBy': 'Tom Jefferson',
      'authorizedDate': '2019-05-15',
      'authorizedClientName': 'Starbucks',
      'createdBy': 'alpha_admin',
      'createdDate': '2019-05-06'
    },
    {
      'moveId': '21312',
      'candidate': {
        'candidateId': '3333',
        'fullname': 'Goulet, Dan',
        'level': {
          'levelId': 'level2',
          'levelName': 'Level 2 (100,001 to 250,000 USD)',
          'levelDescription': 'Level 2 - Salary details'
        },
        'departure': 'NJ, Jersey City',
        'destination': 'CA, San Francisco',
        'status': 'Invitation Not Sent',
        'isAssessmentReceived': false,
        'emailAddress': 'dan.goulet@gmail.com',
        'businessUnit': 'Engineering',
        'invitationSentDate': '2019-01-12',
        'createdDate': '8-JAN-19',
        'createdBy': 'Matthew, Maturity',
        'lastUpdatedDate': '2019-01-25',
        'streetAddress': '41 Apple Ridge Rd',
        'city': 'Danbury',
        'state': 'CT',
        'zipcode': '06810',
        'noOfRooms': '4',
        'housingType': 'Rents Apartment',
        'noOfChildren': '3',
        'total': '5'
      },
      'authorizedAmount': '50,000 USD',
      'spentAmount': '25,000 USD',
      'departure': 'NY, New York',
      'destination': 'NJ, Jersey City',
      'status': 'Authorized',
      'lastUpdateDate': '2019-03-24',
      'paymentReceived': 'YES',
      'authorizedBy': 'Tom Jefferson',
      'authorizedDate': '2019-03-15',
      'authorizedClientName': 'Starbucks',
      'createdBy': 'alpha_admin',
      'createdDate': '2019-03-06'
    },
    {
      'moveId': '21312',
      'candidate': {
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
        'invitationSentDate': '2019-01-19',
        'createdDate': '2019-01-23',
        'createdBy': 'Matthew, Maturity',
        'lastUpdatedDate': '2019-01-30',
        'streetAddress': '41 Apple Ridge Rd',
        'city': 'Danbury',
        'state': 'CT',
        'zipcode': '06810',
        'noOfRooms': '4',
        'housingType': 'Rents Apartment',
        'noOfChildren': '3',
        'total': '5'
      },
      'authorizedAmount': '20,000 USD',
      'spentAmount': '10,000 USD',
      'departure': 'NJ, Nutley',
      'destination': 'TX, Austin',
      'status': 'HHG Booked',
      'lastUpdateDate': '2019-01-20',
      'paymentReceived': 'YES',
      'authorizedBy': 'Tom Jefferson',
      'authorizedDate': '2018-11-23',
      'authorizedClientName': 'Starbucks',
      'createdBy': 'alpha_admin',
      'createdDate': '2018-11-06'
    },
    {
      'moveId': '21312',
      'candidate': {
        'candidateId': '5555',
        'fullname': 'Hayes, Francesca',
        'level': {
          'levelId': 'level1',
          'levelName': 'Level 1 (250,000+ USD)',
          'levelDescription': 'Level 1 - Salary details'
        },
        'departure': 'NJ, Nutley',
        'destination': 'TX, Austin',
        'status': 'Invitation Not Sent',
        'isAssessmentReceived': false,
        'emailAddress': 'francesca.hayes@gmail.com',
        'businessUnit': 'Accounting',
        'invitationSentDate': '2019-02-19',
        'createdDate': '2019-02-19',
        'createdBy': 'Matthew, Maturity',
        'lastUpdatedDate': '2019-03-23',
        'streetAddress': '8 pacific Ave',
        'city': 'Boston',
        'state': 'MA',
        'zipcode': '01234',
        'noOfRooms': '6',
        'housingType': 'Rents Apartment',
        'noOfChildren': '4',
        'total': '6'
      },
      'authorizedAmount': '95,000 USD',
      'spentAmount': '75,000 USD',
      'departure': 'NY, New York',
      'destination': 'NJ, Jersey City',
      'status': 'Authorized',
      'lastUpdateDate': '2019-07-11',
      'paymentReceived': 'YES',
      'authorizedBy': 'Tom Jefferson',
      'authorizedDate': '2019-05-15',
      'authorizedClientName': 'Starbucks',
      'createdBy': 'alpha_admin',
      'createdDate': '2019-05-06',
    },
    {
      'moveId': '21312',
      'candidate': {
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
        'invitationSentDate': '2019-06-21',
        'createdDate': '2019-06-21',
        'createdBy': 'Matthew, Maturity',
        'lastUpdatedDate': '2019-06-11',
        'streetAddress': '41 Apple Ridge Rd',
        'city': 'Danbury',
        'state': 'CT',
        'zipcode': '06810',
        'noOfRooms': '4',
        'housingType': 'Rents Apartment',
        'noOfChildren': '3',
        'total': '5'
      },
      'authorizedAmount': '50,000 USD',
      'spentAmount': '18,000 USD',
      'departure': 'NY, New York',
      'destination': 'NJ, Jersey City',
      'status': 'Move in Progress',
      'lastUpdateDate': '2019-02-27',
      'paymentReceived': 'YES',
      'authorizedBy': 'Tom Jefferson',
      'authorizedDate': '2019-02-15',
      'authorizedClientName': 'Starbucks',
      'createdBy': 'alpha_admin',
      'createdDate': '2019-02-06'
    },
    {
      'moveId': '21312',
      'candidate': {
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
        'invitationSentDate': '2019-06-02',
        'createdDate': '2019-06-02',
        'createdBy': 'Matthew, Maturity',
        'lastUpdatedDate': '2019-06-20',
        'streetAddress': '41 Apple Ridge Rd',
        'city': 'Danbury',
        'state': 'CT',
        'zipcode': '06810',
        'noOfRooms': '4',
        'housingType': 'Rents Apartment',
        'noOfChildren': '3',
        'total': '5'
      },
      'authorizedAmount': '30,000 USD',
      'spentAmount': '12,000 USD',
      'departure': 'NJ, Nutley',
      'destination': 'TX, Austin',
      'status': 'HHG Booked',
      'lastUpdateDate': '2019-05-21',
      'paymentReceived': 'YES',
      'authorizedBy': 'Tom Jefferson',
      'authorizedDate': '2019-05-15',
      'authorizedClientName': 'Starbucks',
      'createdBy': 'alpha_admin',
      'createdDate': '2019-05-06'
    }

  ];

  constructor() { }

  /* Return the candidate json list and loop to display in the table */
  getApprovedMoves(): ApprovedMove[] {
    // console.log(this.approveMovesList);
    return this.approveMovesList;
  }

  verifyDate(date){
    var date_regex =  /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/  ;
    if(!(date_regex.test(date)))
    {
      return false;
    }
    return true;
  }
}
