export interface CandidateNeedsAssessment {
    familyDetails: FamilyDetails;
    departureAddr: DepartureAddr;
    destinationAddr: DestinationAddr;
    residenceDetails: ResidenceDetails;
    contactNumber: number;
    estimatedMoveDate: string;
}

export interface FamilyDetails {
    relocationStatus: string;
    noOfRelocatePeople: string;
    selectedYes: Boolean;
    selectedNo: Boolean;
    selectedOne: Boolean;
    selectedTwo: Boolean;
    selectedThree: Boolean;
    selectedFour: Boolean;
}

export interface DepartureAddr {
    streetAddress: string;
    town: string;
    state: string;
    zip: string;
    fullAddress: string;
}

export interface DestinationAddr {
    city: string;
}

export interface ResidenceDetails {
    ownerStatus: string;
    homeType: string;
    noOfRooms: number;
    isSelectedOwn: Boolean;
    isSelectedRent: Boolean;
    isSelectedHome: Boolean;
    isSelectedAptmnt: Boolean;
    isSelectedTown: Boolean;
}

export interface City {
    cityId: string;
    cityName: string;
}