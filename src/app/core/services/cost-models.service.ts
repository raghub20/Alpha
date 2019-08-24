import { Injectable } from '@angular/core';
import { CostModel} from '../models/cost-model';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class CostModelsService {
  costModelList: CostModel[] = [{
    'costModelId': '7867877',
    'modelName': 'Mid-Level Manager',
    'level': {
      'levelId': 'level2',
      'levelName': 'Level 2 (100,001 to 250,000 USD)',
      'levelDescription': 'Level 2 - Salary details'
    },
    'departure': 'NJ, Nutley',
    'destination': 'TX, Austin',
    'hrLinks': [{
      'linkId': '9099',
    'Hr_link_url': 'https://www.mycigna.com/abcompany',
    'link_type': 'Healthcare',
    }],
    'lineItems': [{
      'estimateId': '101',
      'title': '1 Person',
      'minAmount': 20400,
      'maxAmount': 30400,
      'currency': 'USD',
      'products': [{
        'id': '111',
        'name': 'CORE',
        'descriptionLine1': 'Professional Van Line Move',
        'descriptionLine2': '(Includes Insurance)',
        'minAmount': 14600,
        'maxAmount': 16400,
        'currency': 'USD'
      },
      {
        'id': '222',
        'name': 'FLEXIBLE SPEND',
        'descriptionLine1': 'Multiple Probable Services',
        'descriptionLine2': '',
        'minAmount': 5800,
        'maxAmount': 14000,
        'currency': 'USD'
      }],
      'taxMinAmount': 0,
      'taxMaxAmount': 15500,
      'updatedDate': '2019-08-07',
      'expiryDate': '2019-09-06',
      'notes': 'Sample',
      'isDeleted': false,
      'isActive': true,
      'createdBy': 'Cartus Admin',
      'createdDate': '2019-08-07'
    },
    {
      'estimateId': '102',
      'title': '2 - 3 People',
      'minAmount': 25900,
      'maxAmount': 45000,
      'currency': 'USD',
      'products': [{
        'id': '111',
        'name': 'CORE',
        'descriptionLine1': 'Professional Van Line Move',
        'descriptionLine2': '(Includes Insurance)',
        'minAmount': 14800,
        'maxAmount': 20400,
        'currency': 'USD'
      },
      {
        'id': '222',
        'name': 'FLEXIBLE SPEND',
        'descriptionLine1': 'Multiple Probable Services',
        'descriptionLine2': '',
        'minAmount': 11100,
        'maxAmount': 24600,
        'currency': 'USD'
      }],
      'taxMinAmount': 0,
      'taxMaxAmount': 23000,
      'updatedDate': '2019-08-07',
      'expiryDate': '2019-09-06',
      'notes': 'Sample',
      'isDeleted': false,
      'isActive': true,
      'createdBy': 'Cartus Admin',
      'createdDate': '2019-08-07'
    },
    {
      'estimateId': '103',
      'title': '4+ People',
      'minAmount': 31800,
      'maxAmount': 52300,
      'currency': 'USD',
      'products': [{
        'id': '111',
        'name': 'CORE',
        'descriptionLine1': 'Professional Van Line Move',
        'descriptionLine2': '(Includes Insurance)',
        'minAmount': 19600,
        'maxAmount': 25800,
        'currency': 'USD'
      },
      {
        'id': '22',
        'name': 'FLEXIBLE SPEND',
        'descriptionLine1': 'Multiple Probable Services',
        'descriptionLine2': '',
        'minAmount': 12200,
        'maxAmount': 26500,
        'currency': 'USD'
      }],
      'taxMinAmount': 0,
      'taxMaxAmount': 26700,
      'updatedDate': '2019-08-07',
      'expiryDate': '2019-09-06',
      'notes': 'Sample',
      'isDeleted': false,
      'isActive': true,
      'createdBy': 'Cartus Admin',
      'createdDate': '2019-08-07'
    }],
    'updateDate': '2019/05/27',
    'createdBy': 'Admin',
    'createdDate': '2019-05-20',
    'expirationDate': '2019-06-26',
    'isDeleted': false,
    'status': 'Expired'
  },
  {
    'costModelId': '45434',
    'modelName': 'Group Move to LA',
    'level': {
      'levelId': 'level2',
      'levelName': 'Level 1 (250,000+ USD)',
      'levelDescription': 'Level 2 - Salary details'
    },
    'departure': 'NJ, Nutley',
    'destination': 'CA, Los Angeles',
    'hrLinks': [{
      'linkId': '2356',
    // tslint:disable-next-line: max-line-length
    'Hr_link_url': 'https://www.americanfunds.com/individual/products/401k.html?gclid=Cj0KCQjw9pDpBRCkARIsAOzRzivDBTefgPTgDMd6YaguZJ0Dwg7JTr81JUlEhbrWphh-dmnSkcNH1YcaAkbJEALw_wcB&gclsrc=aw.ds',
    'link_type': '401K Plan',
    }],
    'lineItems': [{
      'estimateId': '101',
      'title': '1 Person',
      'minAmount': 20400,
      'maxAmount': 30400,
      'currency': 'USD',
      'products': [{
        'id': '111',
        'name': 'CORE',
        'descriptionLine1': 'Professional Van Line Move',
        'descriptionLine2': '(Includes Insurance)',
        'minAmount': 14600,
        'maxAmount': 16400,
        'currency': 'USD'
      },
      {
        'id': '222',
        'name': 'FLEXIBLE SPEND',
        'descriptionLine1': 'Multiple Probable Services',
        'descriptionLine2': '',
        'minAmount': 5800,
        'maxAmount': 14000,
        'currency': 'USD'
      }],
      'taxMinAmount': 0,
      'taxMaxAmount': 15500,
      'updatedDate': '2019-08-07',
      'expiryDate': '2019-09-06',
      'notes': 'Sample',
      'isDeleted': false,
      'isActive': true,
      'createdBy': 'Cartus Admin',
      'createdDate': '2019-08-07'
    },
    {
      'estimateId': '102',
      'title': '2 - 3 People',
      'minAmount': 25900,
      'maxAmount': 45000,
      'currency': 'USD',
      'products': [{
        'id': '111',
        'name': 'CORE',
        'descriptionLine1': 'Professional Van Line Move',
        'descriptionLine2': '(Includes Insurance)',
        'minAmount': 14800,
        'maxAmount': 20400,
        'currency': 'USD'
      },
      {
        'id': '222',
        'name': 'FLEXIBLE SPEND',
        'descriptionLine1': 'Multiple Probable Services',
        'descriptionLine2': '',
        'minAmount': 11100,
        'maxAmount': 24600,
        'currency': 'USD'
      }],
      'taxMinAmount': 0,
      'taxMaxAmount': 23000,
      'updatedDate': '2019-08-07',
      'expiryDate': '2019-09-06',
      'notes': 'Sample',
      'isDeleted': false,
      'isActive': true,
      'createdBy': 'Cartus Admin',
      'createdDate': '2019-08-07'
    },
    {
      'estimateId': '103',
      'title': '4+ People',
      'minAmount': 31800,
      'maxAmount': 52300,
      'currency': 'USD',
      'products': [{
        'id': '111',
        'name': 'CORE',
        'descriptionLine1': 'Professional Van Line Move',
        'descriptionLine2': '(Includes Insurance)',
        'minAmount': 19600,
        'maxAmount': 25800,
        'currency': 'USD'
      },
      {
        'id': '22',
        'name': 'FLEXIBLE SPEND',
        'descriptionLine1': 'Multiple Probable Services',
        'descriptionLine2': '',
        'minAmount': 12200,
        'maxAmount': 26500,
        'currency': 'USD'
      }],
      'taxMinAmount': 0,
      'taxMaxAmount': 26700,
      'updatedDate': '2019-08-07',
      'expiryDate': '2019-09-06',
      'notes': 'Sample',
      'isDeleted': false,
      'isActive': true,
      'createdBy': 'Cartus Admin',
      'createdDate': '2019-08-07'
    }],
    'updateDate': '2019/06/22',
    'createdBy': 'Chris Watson',
    'createdDate': '2019-06-02',
    'expirationDate': '2019-07-22',
    'isDeleted': false,
     'status': 'Active'
  },
  {
    'costModelId': '66564',
    'modelName': 'L1 Dev Dallas Move',
    'level': {
      'levelId': 'level2',
      'levelName': 'Level 3 (0 to 100,000 USD)',
      'levelDescription': 'Level 2 - Salary details'
    },
    'departure': 'UT, Ogden',
    'destination': 'TX, Dallas',
    'hrLinks': [{
      'linkId': '2356',
    // tslint:disable-next-line: max-line-length
    'Hr_link_url': 'https://www.americanfunds.com/individual/products/401k.html?gclid=Cj0KCQjw9pDpBRCkARIsAOzRzivDBTefgPTgDMd6YaguZJ0Dwg7JTr81JUlEhbrWphh-dmnSkcNH1YcaAkbJEALw_wcB&gclsrc=aw.ds',
    'link_type': '401K Plan',
    }],
    'lineItems': [{
      'estimateId': '101',
      'title': '1 Person',
      'minAmount': 20400,
      'maxAmount': 30400,
      'currency': 'USD',
      'products': [{
        'id': '111',
        'name': 'CORE',
        'descriptionLine1': 'Professional Van Line Move',
        'descriptionLine2': '(Includes Insurance)',
        'minAmount': 14600,
        'maxAmount': 16400,
        'currency': 'USD'
      },
      {
        'id': '222',
        'name': 'FLEXIBLE SPEND',
        'descriptionLine1': 'Multiple Probable Services',
        'descriptionLine2': '',
        'minAmount': 5800,
        'maxAmount': 14000,
        'currency': 'USD'
      }],
      'taxMinAmount': 0,
      'taxMaxAmount': 15500,
      'updatedDate': '2019-08-07',
      'expiryDate': '2019-09-06',
      'notes': 'Sample',
      'isDeleted': false,
      'isActive': true,
      'createdBy': 'Cartus Admin',
      'createdDate': '2019-08-07'
    },
    {
      'estimateId': '102',
      'title': '2 - 3 People',
      'minAmount': 25900,
      'maxAmount': 45000,
      'currency': 'USD',
      'products': [{
        'id': '111',
        'name': 'CORE',
        'descriptionLine1': 'Professional Van Line Move',
        'descriptionLine2': '(Includes Insurance)',
        'minAmount': 14800,
        'maxAmount': 20400,
        'currency': 'USD'
      },
      {
        'id': '222',
        'name': 'FLEXIBLE SPEND',
        'descriptionLine1': 'Multiple Probable Services',
        'descriptionLine2': '',
        'minAmount': 11100,
        'maxAmount': 24600,
        'currency': 'USD'
      }],
      'taxMinAmount': 0,
      'taxMaxAmount': 23000,
      'updatedDate': '2019-08-07',
      'expiryDate': '2019-09-06',
      'notes': 'Sample',
      'isDeleted': false,
      'isActive': true,
      'createdBy': 'Cartus Admin',
      'createdDate': '2019-08-07'
    },
    {
      'estimateId': '103',
      'title': '4+ People',
      'minAmount': 31800,
      'maxAmount': 52300,
      'currency': 'USD',
      'products': [{
        'id': '111',
        'name': 'CORE',
        'descriptionLine1': 'Professional Van Line Move',
        'descriptionLine2': '(Includes Insurance)',
        'minAmount': 19600,
        'maxAmount': 25800,
        'currency': 'USD'
      },
      {
        'id': '22',
        'name': 'FLEXIBLE SPEND',
        'descriptionLine1': 'Multiple Probable Services',
        'descriptionLine2': '',
        'minAmount': 12200,
        'maxAmount': 26500,
        'currency': 'USD'
      }],
      'taxMinAmount': 0,
      'taxMaxAmount': 26700,
      'updatedDate': '2019-08-07',
      'expiryDate': '2019-09-06',
      'notes': 'Sample',
      'isDeleted': false,
      'isActive': true,
      'createdBy': 'Cartus Admin',
      'createdDate': '2019-08-07'
    }],
    'updateDate': '2019/04/09',
    'createdBy': 'Ella Mason',
    'createdDate': '2019-03-25',
    'expirationDate': '2019-05-09',
    'isDeleted': false,
    'status':'Active'
  }
];

  constructor() { }

  /* Return the candidate json list and loop to display in the table */
  getCostModels(): CostModel[] {
    console.log("Updated Cost Model List Service : " + JSON.stringify(this.costModelList));
    return this.costModelList.filter(item => item.isDeleted === false);
  }

  addCostModel(formData, levelDetails, costModelId){
    const dateString = this.formatDate(new Date());
    var currentDate = new Date();
    var numberOfDaysToAdd = 30;
    currentDate.setDate(currentDate.getDate() + numberOfDaysToAdd); 
    if (this.costModelList.find(v => v.costModelId == costModelId) == undefined) {
    const newCostModelObj = {
      'costModelId': (Math.floor((Math.random() * 100000) + 1)).toString(),
        'modelName': formData.ModelName,
        'level': {
          'levelId': levelDetails.levelId,
          'levelName': levelDetails.levelName,
          'levelDescription': levelDetails.levelDescription
        },
        'departure': formData.Departure,
        'destination': formData.Destination,
        'hrLinks': [{
          'linkId': '2356',
        // tslint:disable-next-line: max-line-length
        'Hr_link_url': 'https://www.americanfunds.com/individual/products/401k.html?gclid=Cj0KCQjw9pDpBRCkARIsAOzRzivDBTefgPTgDMd6YaguZJ0Dwg7JTr81JUlEhbrWphh-dmnSkcNH1YcaAkbJEALw_wcB&gclsrc=aw.ds',
        'link_type': '401K Plan',
        }],
        'lineItems': [{
          'estimateId': '101',
          'title': '1 Person',
          'minAmount': 20400,
          'maxAmount': 30400,
          'currency': 'USD',
          'products': [{
            'id': '111',
            'name': 'CORE',
            'descriptionLine1': 'Professional Van Line Move',
            'descriptionLine2': '(Includes Insurance)',
            'minAmount': 14600,
            'maxAmount': 16400,
            'currency': 'USD'
          },
          {
            'id': '222',
            'name': 'FLEXIBLE SPEND',
            'descriptionLine1': 'Multiple Probable Services',
            'descriptionLine2': '',
            'minAmount': 5800,
            'maxAmount': 14000,
            'currency': 'USD'
          }],
          'taxMinAmount': 0,
          'taxMaxAmount': 15500,
          'updatedDate': '2019-08-07',
          'expiryDate': '2019-09-06',
          'notes': 'Sample',
          'isDeleted': false,
          'isActive': true,
          'createdBy': 'Cartus Admin',
          'createdDate': '2019-08-07'
        },
        {
          'estimateId': '102',
          'title': '2 - 3 People',
          'minAmount': 25900,
          'maxAmount': 45000,
          'currency': 'USD',
          'products': [{
            'id': '111',
            'name': 'CORE',
            'descriptionLine1': 'Professional Van Line Move',
            'descriptionLine2': '(Includes Insurance)',
            'minAmount': 14800,
            'maxAmount': 20400,
            'currency': 'USD'
          },
          {
            'id': '222',
            'name': 'FLEXIBLE SPEND',
            'descriptionLine1': 'Multiple Probable Services',
            'descriptionLine2': '',
            'minAmount': 11100,
            'maxAmount': 24600,
            'currency': 'USD'
          }],
          'taxMinAmount': 0,
          'taxMaxAmount': 23000,
          'updatedDate': '2019-08-07',
          'expiryDate': '2019-09-06',
          'notes': 'Sample',
          'isDeleted': false,
          'isActive': true,
          'createdBy': 'Cartus Admin',
          'createdDate': '2019-08-07'
        },
        {
          'estimateId': '103',
          'title': '4+ People',
          'minAmount': 31800,
          'maxAmount': 52300,
          'currency': 'USD',
          'products': [{
            'id': '111',
            'name': 'CORE',
            'descriptionLine1': 'Professional Van Line Move',
            'descriptionLine2': '(Includes Insurance)',
            'minAmount': 19600,
            'maxAmount': 25800,
            'currency': 'USD'
          },
          {
            'id': '22',
            'name': 'FLEXIBLE SPEND',
            'descriptionLine1': 'Multiple Probable Services',
            'descriptionLine2': '',
            'minAmount': 12200,
            'maxAmount': 26500,
            'currency': 'USD'
          }],
          'taxMinAmount': 0,
          'taxMaxAmount': 26700,
          'updatedDate': '2019-08-07',
          'expiryDate': '2019-09-06',
          'notes': 'Sample',
          'isDeleted': false,
          'isActive': true,
          'createdBy': 'Cartus Admin',
          'createdDate': '2019-08-07'
        }],
        'createdDate': dateString,
        'createdBy': 'Admin',
        'updateDate': dateString,
        'expirationDate': this.formatDate(currentDate),
        'isDeleted': false,
        'status': 'Active'
    };
    this.costModelList.push(newCostModelObj);
    } else{
      const updateDate = this.formatDate(currentDate);
      this.costModelList.filter(function (item) {
        return item.costModelId === costModelId;
      }).map(function (item) {
        item.modelName = formData.ModelName;
        item.level.levelId = levelDetails.levelId;
        item.level.levelName = levelDetails.levelName;
        item.level.levelDescription = levelDetails.levelDescription;
        item.departure = formData.Departure;
        item.destination = formData.Destination;
        item.updateDate = dateString;
        item.status = "Active";
        item.expirationDate = updateDate;
        console.log("Update Item: "+ item);
        return item;
      });
    }
  }

  deleteCostModel(costModelId){
    const index = this.costModelList.indexOf(this.costModelList.find(v => v.costModelId == costModelId),0);
    this.costModelList.filter(function (item) {
      return item.costModelId === costModelId;
    }).map(function (item) {
      item.isDeleted = true;
      console.log("Delete Item: "+ item);
      return item;
    });
    // this.costModelList.splice(index,1);
    console.log("Cost Model List After Deletion: " + this.costModelList);
  }

  toggleDeleteFlag(costModelId){
    this.costModelList.filter(function (item) {
      return item.costModelId === costModelId;
    }).map(function (item) {
      item.isDeleted = !item.isDeleted;
      console.log("Toggle Delete Flag: "+ item);
      return item;
    });
  }

  formatDate(date) {
    return date.getFullYear() + '-' + ("0"+(date.getMonth()+1)).slice(-2) + '-' + ("0" + date.getDate()).slice(-2);
  }
}
