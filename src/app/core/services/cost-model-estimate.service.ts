import { Injectable } from '@angular/core';
import { CostModelEstimate } from '../models/cost-model-estimate';

@Injectable({
  providedIn: 'root'
})
export class CostModelEstimateService {

  costModelEstimateList: CostModelEstimate[] = [{
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
  }];

  constructor() { }

  /* Return the candidate json list and loop to display in the table */
  getCostModelEstimates(): CostModelEstimate[] {
    return this.costModelEstimateList;
  }
}
