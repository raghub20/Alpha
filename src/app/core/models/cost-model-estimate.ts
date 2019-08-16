import { EstimateLineItems } from './estimate-line-items';

export interface CostModelEstimate {
    estimateId: string;
    title: string;
    minAmount: number;
    maxAmount: number;
    currency: string;
    products: EstimateLineItems[];
    taxMinAmount: number;
    taxMaxAmount: number;
    updatedDate: string;
    expiryDate: string;
    notes: string;
    isDeleted: boolean;
    isActive: boolean;
    createdBy: string;
    createdDate: string;
}
