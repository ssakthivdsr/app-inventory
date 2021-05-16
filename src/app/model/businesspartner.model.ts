export class BusinessPartner {
    businessPartnerId: number;
    applicationId: number;
    primaryBusinessPartner: string;
    secondaryBusinessPartner: string;
    businessPartnerManagers: string;
    businessPartnerDirectors: string;

    constructor() {
        this.businessPartnerId = 0;
        this.applicationId = 1;
        this.primaryBusinessPartner = '';
        this.secondaryBusinessPartner = '';
        this.businessPartnerManagers = '';
        this.businessPartnerDirectors = '';
    }
}