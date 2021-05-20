import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Department } from '../model/department.model';
import { ApplicationLifecycle } from '../model/applicationlifecycle.model';

const endpoint1 = 'https://app-inventory-restapi-test.herokuapp.com/applicationinventoryservice/';

@Injectable({
    providedIn: 'root'
})

export class ApplicationLifecycleService {

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

    retrieveAllApplicationLifecycleDetails(): Observable<any> {
        return this.http.get<ApplicationLifecycle[]>(endpoint1.concat('retrieveAllApplicationDetails')).pipe(
            catchError(this.handleError)
        );
    }

    storeApplicationLifecycleDetails(body: ApplicationLifecycle): Observable<any> {
        return this.http.post<any>(endpoint1.concat('storeApplicationLifecycleDetails'), body);
    }

    private extractData(res: Response): any {
        const body = res;
        return body || {};
    }
}

function body<T>(arg0: string, body: any): Observable<any> {
    throw new Error('Function not implemented.');
}

