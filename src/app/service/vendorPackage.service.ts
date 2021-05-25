import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { VendorPackage } from '../model/vendorPackage.model';

// const endpoint = 'http://localhost:8000/applicationinventoryservice/';
//const endpoint2 = 'http://localhost:8000/applicationinventoryservice/retrieveVendorPackageData/1';
const endpoint = 'https://app-inventory-restapi-test.herokuapp.com/applicationinventoryservice/';

@Injectable({
    providedIn: 'root'
})

export class VendorPackageService {

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

    retrieveVendorPackageByApplicationId(body: number): Observable<any> {
        return this.http.get<VendorPackage>(endpoint.concat('retrieveVendorPackageByApplicationId/' + body)).pipe(
            catchError(this.handleError));
    }

    storeVendorPackageDetails(body: VendorPackage): Observable<any> {
        return this.http.post<any>(endpoint.concat('storeVendorPackageDetails'), body);
    }

    updateVendorPackageDetails(body: VendorPackage): Observable<any> {
        return this.http.post<any>(endpoint.concat('updateVendorPackageDetails'), body);
    }
    private extractData(res: Response): any {
        const body = res;
        return body || {};
    }
}


