import { TransactionObject } from './transactionobject.model';

export class User {
    id: number;
    applicationId: number;
    userType: string;
    volume: any;
    volumeObject: TransactionObject

    constructor() {
        this.id = 0;
        this.applicationId = 0;
        this.userType = '';
        this.volume = null;
        this.volumeObject = new TransactionObject();
    }
}