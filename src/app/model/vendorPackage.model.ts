export class VendorPackage {
    vendorPackageId: number;
    applicationId: number;
    engAssociatedManagedServices: string;
    packageType: string;
    name: string;
    engAssociatedWithVendorPackage: string;
    degreeOfCustomization: string;
    hostedLocation: string;
    hostedName: string;
    engAssociatedWithEsternallyHostedVendor: string;
    isLatestSwVersion: any;
    packageVersion: string;
    frequencyOfUpdates: string;
    frequencyOfPatches: string;

    constructor() {
        this.vendorPackageId = 0;
        this.applicationId = 1;
        this.engAssociatedManagedServices = '';
        this.packageType = '';
        this.name = '';
        this.engAssociatedWithVendorPackage = '';
        this.degreeOfCustomization = '';
        this.hostedLocation = '';
        this.hostedName = '';
        this.engAssociatedWithEsternallyHostedVendor = '';
        this.isLatestSwVersion = null;
        this.packageVersion = '';
        this.frequencyOfPatches = '';
        this.frequencyOfUpdates = '';
    }
}