import { Address } from './address.model';
/**interface for CandidateNeedsAssessment */
export interface CandidateNeedsAssessment {
    /** Prop for Candidate Id */
    candidateId: number;
    /**object of type FamilyDetails */
    familyDetails: FamilyDetails;
    /**object of type Departure Address */
    departureAddr: Address;
    /**object of type Destination Address */
    destinationCity: string;
    /**object of type Residence details */
    residenceDetails: ResidenceDetails;
    /**variable contact number of type number */
    contactNumber: number;
    /**variable estimatedMoveDate of type string */
    estimatedMoveDate: string;
}

/**interface for FamilyDetails */
export interface FamilyDetails {
    /**variable for relocation status of type string */
    relocationStatus: string;
    /**variable for noOfRelocatePeople of type string */
    noOfRelocatePeople: string;
}

/**interface for Residence Details */
export interface ResidenceDetails {
    /**variable for ownerStatus of type string */
    ownerStatus: string;
    /**variable for homeType of type string */
    homeType: string;
    /**variable for noOfRooms of type string */
    noOfRooms: number;    
}
