import { Injectable } from '@angular/core';
import { EstimateLineItems } from '../models/estimate-line-items';

@Injectable({
  providedIn: 'root'
})
export class EstimateLineItemsService {
  estimateLineItemsList: EstimateLineItems[] = [{
    'id': '111',
    'name': 'CORE',
    'descriptionLine1': 'Professional Van Line Move',
    'descriptionLine2': '(Includes Insurance)',
    'minAmount': 14600,
    'maxAmount': 16400,
    'currency': 'USD'
  },
  {
    'id': '22',
    'name': 'FLEXIBLE SPEND',
    'descriptionLine1': 'Multiple Probable Services',
    'descriptionLine2': '',
    'minAmount': 5800,
    'maxAmount': 14000,
    'currency': 'USD'
  }];

  constructor() { }
}
