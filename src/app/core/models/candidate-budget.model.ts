import { TransfereeAssessment } from './transferre-assessment.model';

export interface CandidateBudget {
    /** Candidate Id */
    candidateId: string;
    /**member variable for service which is an array of type TransfereeAssessment*/
    service: TransfereeAssessment[];
    /**member variable for total Recommended Budget Amount */
    totalRecomBudgetAmt: number;
    /**member variable for totalCost Amount */
    totalCostAmt: number;
    /**member variable for totalCost Currency */
    totalCostCurrency: string;
    /**member variable for tax Amount */
    taxAmt: number;
}