import { TransactionObject } from './transactionobject.model';
export class Transaction {
    id: number;
    applicationId: number;
    transactionType: string;
    volume: any;
    volumeObject: TransactionObject;

    constructor() {
        this.id = 0;
        this.applicationId = 0;
        this.transactionType = '';
        this.volume = null;
        this.volumeObject = new TransactionObject();
    }
}