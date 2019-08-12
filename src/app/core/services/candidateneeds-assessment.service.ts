import { Injectable } from '@angular/core';
import { City } from '../models/candidateneeds-assessment.model';
import { CandidateNeedsAssessment } from 'src/app/core/models/candidateneeds-assessment.model';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  cityList: City[] = [
    { cityId: '1', cityName: 'Newyork' },
    { cityId: '2', cityName: 'Washington' },
    { cityId: '3', cityName: 'Danbury, CT' },
];

emptyList: City[] = [
  { cityId: '', cityName:  '' }
];


  constructor() { }

  /* Return the candidate json list and loop to display in the table */
  getCity(): City[] {
    return this.cityList;
  }
  /* Return the level Id*/
  getCityId(CityName) {
      for (let i = 0; i < this.cityList.length; i++) {
        // look for the entry with a matching `code` value
        if (this.cityList[i].cityName === CityName) {
           return this.cityList[i];
        }
      }
    return this.emptyList[0];
}
addCandidateAssessmentDetails(assessmentDetail:CandidateNeedsAssessment)
{
  console.log(assessmentDetail,"service details");
  return true;

}
}
