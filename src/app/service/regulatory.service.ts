import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Regulatory } from '../model/regulatory.model';

// const endpoint2 = 'http://localhost:8000/applicationinventoryservice/';
// const endpoint3 = 'http://localhost:8000/applicationinventoryservice/retrieveRegulatoryByApplicationId/1';
const endpoint = 'https://app-inventory-restapi-test.herokuapp.com/applicationinventoryservice/';

@Injectable({
    providedIn: 'root'
})

export class RegulatoryService {
    constructor(private http: HttpClient) { }

    private handleError(error: HttpErrorResponse): any {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }

        return throwError(
            'Something bad happened; please try again later.');
    }

    getRegulatory(): Observable<any> {
        return this.http.get<Regulatory>(endpoint).pipe(
            catchError(this.handleError)
        );
    }

    storeRegulatoryDetails(body: Regulatory): Observable<any> {
        return this.http.post<any>(endpoint.concat('storeRegulatoryDetails'), body);
    }

    private extractData(res: Response): any {
        const body = res;
        return body || {};
    }
}


