import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Department } from '../model/department.model';

const endpoint = 'https://app-inventory-restapi-test.herokuapp.com/applicationinventoryservice/retrieveDepartmentData/11';
const endpoint1 = 'https://app-inventory-restapi-test.herokuapp.com/applicationinventoryservice/';
// const endpoint = 'http://localhost:8000/applicationinventoryservice/retrieveDepartmentData/11';
// const endpoint1 = 'http://localhost:8000/applicationinventoryservice/';

@Injectable({
  providedIn: 'root'
})

export class UserService {

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

  getDepartment(): Observable<any> {
    return this.http.get<Department>(endpoint).pipe(
      catchError(this.handleError)
    );
  }

  retrieveDepartmentById(id: number): Observable<any> {
    return this.http.get<Department>(endpoint1.concat('retrieveDepartmentById/' + id)).pipe(
      catchError(this.handleError)
    );
  }

  retrieveAllDepartmentDetails(): Observable<any> {
    return this.http.get<Department[]>(endpoint1.concat('retrieveAllDepartmentDetails')).pipe(
      catchError(this.handleError)
    );
  }

  storeDeparttment(departmentName: string, departmentOwner: string): Observable<any> {
    return this.http.get<Department>(endpoint1.concat('storeDepartmentData/', departmentName, '/', departmentOwner)).pipe(
      catchError(this.handleError)
    );
  }

  storeDepartmentDetails(body: Department): Observable<any> {
    return this.http.post<any>(endpoint1.concat('storeDepartmentDetails'), body);
  }

  private extractData(res: Response): any {
    const body = res;
    return body || {};
  }
}


