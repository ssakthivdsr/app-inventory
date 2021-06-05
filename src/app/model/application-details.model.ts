export class ApplicationDetails {
    applicationId: number;
    departmentId: number;
    departmentName: string;
    applicationName: string;
    nameOfTheComponentManager: string;
    smeProvidedByManagers: string;
    nameOfPrimaryTechSME: string;
    nameOfPrimaryBA: string;
    applicationDescription: string;
    lineOfBusiness: string;
    functionality: string;
    businessValue: number;
    agility: number;
    businessTotal: number;
    techTotal: number;

    constructor() {
        this.applicationId = 0;
        this.departmentId = 0;
        this.departmentName = '';
        this.applicationName = '';
        this.nameOfTheComponentManager = '';
        this.smeProvidedByManagers = '';
        this.nameOfPrimaryTechSME = '';
        this.nameOfPrimaryBA = '';
        this.lineOfBusiness = '';
        this.functionality = '';
        this.businessValue = 0;
        this.agility = 0;
        this.businessTotal = 0;
        this.techTotal = 0;
    }
}