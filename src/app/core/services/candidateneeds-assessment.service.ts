import { Injectable } from '@angular/core';
import { CandidateNeedsAssessment } from 'src/app/core/models/candidateneeds-assessment.model';

@Injectable({
  providedIn: 'root'
})
export class CandidateNeedsAssessmentService {

  constructor() { }


  addCandidateAssessmentDetails(assessmentDetail: CandidateNeedsAssessment) {
    console.log(assessmentDetail, "service details");
    return true;

  }
}
