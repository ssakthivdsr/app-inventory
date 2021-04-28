import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

const endpoint = 'https://app-inventory-restapi-test.herokuapp.com/applicationinventoryservice/retrieveDepartmentData/11';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

   getAllUsers(){
      return this.http.get('http://jsonplaceholder.typicode.com/users'); 
   }

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

  getProducts(): Observable<any> {
    return this.http.get<Department>(endpoint).pipe(
      catchError(this.handleError)
    );
  }
  private extractData(res: Response): any {
    const body = res;
    return body || { };
  }

}

export interface Department {
  id: number;  // required field
  departmentName: string;
  departmentOwner: String;
}

