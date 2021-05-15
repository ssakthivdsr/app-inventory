import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { BusinessPartner } from '../model/businesspartner.model';

//const endpoint = 'https://app-inventory-restapi-test.herokuapp.com/applicationinventoryservice/retrieveDepartmentData/11';
const endpoint1 = 'https://app-inventory-restapi-test.herokuapp.com/applicationinventoryservice/';
//const endpoint = 'http://localhost:8000/applicationinventoryservice/retrieveBusinessPartnerByApplicationId/11';
//const endpoint1 = 'http://localhost:8000/applicationinventoryservice/';

@Injectable({
    providedIn: 'root'
})

export class BusinessPartnerService {
    constructor(private http: HttpClient) { }

    //  getAllUsers(){
    //     return this.http.get('http://jsonplaceholder.typicode.com/users'); 
    //  }

    private handleError(error: HttpErrorResponse): any {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        return throwError(
            'Something bad happened; please try again later.');
    }

    retrieveBusinessPartnerByApplicationId(body: number): Observable<any> {
        return this.http.get<BusinessPartner[]>(endpoint1.concat('retrieveBusinessPartnerByApplicationId/' + body)).pipe(
            catchError(this.handleError));
    }

    storeBusinessPartnerDetails(body: BusinessPartner): Observable<any> {
        return this.http.post<any>(endpoint1.concat('storeBusinessPartnerDetails'), body);
    }

    private extractData(res: Response): any {
        const body = res;
        return body || {};
    }
}