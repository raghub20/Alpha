import { HrLink } from './hr-link';
import { Level } from './level';
import { CostModelEstimate } from './cost-model-estimate';

export interface CostModel {
    costModelId: string;
    modelName: string;
    level: Level;
    departure: string;
    destination: string;
    hrLinks: HrLink[];
    lineItems: CostModelEstimate[];
    updateDate: string;
    createdBy: string;
    createdDate: string;
    expirationDate: string;
    isDeleted: boolean;
    status: string;
}
