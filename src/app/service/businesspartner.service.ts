import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { BusinessPartner } from '../model/businesspartner.model';

// const endpoint1 = "http://localhost:8000/applicationinventoryservice/";
const endpoint = 'https://app-inventory-restapi-test.herokuapp.com/applicationinventoryservice/';

@Injectable({
    providedIn: 'root'
})

export class BusinessPartnerService {

    constructor(private http: HttpClient) { }

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

    getBusinessPartner(): Observable<any> {
        return this.http.get<BusinessPartner>(endpoint).pipe(
            catchError(this.handleError)
        );
    }

    retrieveBusinessPartnerByApplicationId(body: number): Observable<any> {
        return this.http.get<BusinessPartner>(endpoint.concat('retrieveBusinessPartnerByApplicationId/' + body)).pipe(
            catchError(this.handleError));
    }


    storeBusinessPartner(primaryBusinessPartner: string, secondaryBusinessPartner: string, businessPartnerManagers: string, businessPartnerDirectors: string): Observable<any> {
        return this.http.get<BusinessPartner>(endpoint.concat('storeBusinessPartnerData/', primaryBusinessPartner, '/', secondaryBusinessPartner, '/', businessPartnerManagers, '/', businessPartnerDirectors)).pipe(
            catchError(this.handleError)
        );
    }
    storeBusinessPartnerDetails(body: BusinessPartner): Observable<any> {
        return this.http.post<any>(endpoint.concat('storeBusinessPartnerDetails'), body);
    }
    private extractData(res: Response): any {
        const body = res;
        return body || {};
    }

}