import { Level } from './level';
import { Location } from './location';


/**interface for Candidate model */
export interface Candidate {
    /** Candidate Id */
    candidateId: string;
    /**member variable for fullName */
    fullname: string;
    /**member variable for level which is of model type Level */
    level: Level;
    /**member variable for departure */
    departure: string;
    /**member variable for destination */
    destination: string;
    /**member variable for status */
    status: string;
    /**member variable for isAssessmentReceived */
    isAssessmentReceived: boolean;
    /**member variable for emailAddress */
    emailAddress: string;
    /**member variable for businessUnit */
    businessUnit: string;
    /**member variable for invitationSentDate */
    invitationSentDate: string;
    /**member variable for createdDate */
    createdDate: string;
    /**member variable for createdBy */
    createdBy: string;
    /**member variable for lastUpdatedDate */
    lastUpdatedDate: string;
    streetAddress: string;
    city: string;
    state: string;
    zipcode: string;
    noOfRooms: string;
    housingType: string;
    noOfChildren: string;
    total: string;
}

export enum statusType {
    readyForReview = 'Ready for Review',
    pendingVanline = 'Pending Van Line Quote'
}
