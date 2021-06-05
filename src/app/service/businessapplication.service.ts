import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { BusinessApplicationDetails } from '../model/businessApplicationDetails.model';

const endpoint = 'https://app-inventory-restapi-test.herokuapp.com/applicationinventoryservice/';
// const endpoint = 'http://localhost:8000/applicationinventoryservice/';

@Injectable({
    providedIn: 'root'
})

export class BusinessApplicationService {
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

    retrieveBusinessApplicationByApplicationId(body: number): Observable<any> {
        return this.http.get<BusinessApplicationDetails[]>(endpoint.concat('retrieveBusinessApplicationByApplicationId/' + body)).pipe(
            catchError(this.handleError));
    }

    storeBusinessApplicationDetails(body: BusinessApplicationDetails): Observable<any> {
        return this.http.post<any>(endpoint.concat('storeBusinessApplicationDetails'), body);
    }

    updateBusinessApplicationDetails(body: BusinessApplicationDetails): Observable<any> {
        return this.http.post<any>(endpoint.concat('updateBusinessApplicationDetails'), body);
    }

    private extractData(res: Response): any {
        const body = res;
        return body || {};
    }
}