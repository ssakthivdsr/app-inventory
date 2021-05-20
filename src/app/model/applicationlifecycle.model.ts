
import { QuestionAnswer } from './questionanswer.model';


export class ApplicationLifecycle {

    applicationId: number;
    questionId: number;
    i: number;
    questionAnswer: QuestionAnswer[] = [];

    constructor() {

        this.applicationId = 1;
        this.questionAnswer = [];
        for (this.i = 0; this.i <= 13; this.i++) {
            this.questionAnswer[this.i] = new QuestionAnswer();
        }
        for (this.i = 0; this.i <= 13; this.i++) {
            this.questionAnswer[this.i].questionId = this.i + 1;
        }
        for (this.i = 0; this.i <= 13; this.i++) {
            this.questionAnswer[this.i].answer = '';
        }

    }

}