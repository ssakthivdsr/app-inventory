import { TransactionObject } from './transactionobject.model';

export class Channel {
    id: number;
    applicationId: number;
    channelType: string;
    volume: any;
    volumeObject: TransactionObject;

    constructor() {
        this.id = 0;
        this.applicationId = 0;
        this.channelType = '';
        this.volume = null;
        this.volumeObject = new TransactionObject();
    }
}