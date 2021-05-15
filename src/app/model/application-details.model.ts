export class ApplicationDetails {
    applicationId: number;
    departmentId: number;
    applicationName: string;
    nameOfTheComponentManager: string;
    smeProvidedByManagers: string;
    nameOfPrimaryTechSME: string;
    nameOfPrimaryBA: string;
    applicationDescription: string;
    lineOfBusiness: string;
    functionality: string;

    constructor() {
        this.applicationId = 0;
        this.departmentId = 0;
        this.applicationName = '';
        this.nameOfTheComponentManager = '';
        this.smeProvidedByManagers = '';
        this.nameOfPrimaryTechSME = '';
        this.nameOfPrimaryBA = '';
        this.lineOfBusiness = '';
        this.functionality = '';
    }
}