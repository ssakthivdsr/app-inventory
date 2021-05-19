import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ApplicationDetails } from '../model/application-details.model';

//const endpoint = 'https://app-inventory-restapi-test.herokuapp.com/applicationinventoryservice/retrieveDepartmentData/11';
const endpoint1 = 'https://app-inventory-restapi-test.herokuapp.com/applicationinventoryservice/';
//const endpoint = 'http://localhost:8000/applicationinventoryservice/retrieveApplicationById/11';
// const endpoint1 = 'http://localhost:8000/applicationinventoryservice/';

@Injectable({
    providedIn: 'root'
})

export class ApplicationService {
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

    retrieveApplicationById(body: number): Observable<any> {
        return this.http.get<ApplicationDetails[]>(endpoint1.concat('retrieveApplicationById/' + body)).pipe(
            catchError(this.handleError));
    }

    retrieveAllApplicationDetails(): Observable<any> {
        return this.http.get<ApplicationDetails[]>(endpoint1.concat('retrieveAllApplicationDetails')).pipe(
            catchError(this.handleError));
    }

    storeApplicationDetails(body: ApplicationDetails): Observable<any> {
        return this.http.post<any>(endpoint1.concat('storeApplicationDetails'), body);
    }

    private extractData(res: Response): any {
        const body = res;
        return body || {};
    }
}


