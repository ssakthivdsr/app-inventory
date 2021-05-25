import { TransactionObject } from './transactionobject.model';

export class Product {
    id: number;
    applicationId: number;
    productType: string;
    volume: any;
    volumeObject: TransactionObject;
    writtenPremiumOfProducts: null;
    writtenPremiumOfProductsObject: TransactionObject;

    constructor() {
        this.id = 0;
        this.applicationId = 0;
        this.productType = '';
        this.volume = null;
        this.volumeObject = new TransactionObject();
        this.writtenPremiumOfProducts = null;
        this.writtenPremiumOfProductsObject = new TransactionObject();
    }
}