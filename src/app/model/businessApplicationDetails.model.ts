import { Channel } from "./channel.model";
import { Product } from "./product.model";
import { Transaction } from "./transaction.model";
import { User } from "./user.model";
import { BusinessApplicationQuestionAnswer } from "./businessApplicationQuestionAnswer.model";

export class BusinessApplicationDetails {
    channels: Channel[];
    transactions: Transaction[];
    products: Product[];;
    users: User[];
    businessApplicationQuestionAnswer: BusinessApplicationQuestionAnswer[];

    constructor() {
        this.channels = [];
        this.transactions = [];
        this.products = [];
        this.users = [];
        this.businessApplicationQuestionAnswer =
            [
                { applicationId: 73, questionId: 1, answer: '' },
                { applicationId: 73, questionId: 2, answer: '' },
                { applicationId: 73, questionId: 3, answer: '' },
                { applicationId: 73, questionId: 4, answer: '' },
                { applicationId: 73, questionId: 5, answer: '' },
                { applicationId: 73, questionId: 6, answer: '' },
                { applicationId: 73, questionId: 7, answer: '' },
                { applicationId: 73, questionId: 8, answer: '' },
                { applicationId: 73, questionId: 9, answer: '' },
                { applicationId: 73, questionId: 10, answer: '' },
                { applicationId: 73, questionId: 11, answer: '' },
                { applicationId: 73, questionId: 12, answer: '' },
                { applicationId: 73, questionId: 13, answer: '' },
                { applicationId: 73, questionId: 14, answer: '' },
                { applicationId: 73, questionId: 15, answer: '' },
                { applicationId: 73, questionId: 16, answer: '' },
                { applicationId: 73, questionId: 17, answer: '' },
                { applicationId: 73, questionId: 18, answer: '' },
                { applicationId: 73, questionId: 19, answer: '' },
            ];

    }
}
