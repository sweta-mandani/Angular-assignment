import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Employee} from './app.module';
import { retry, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CrudService {

  base_path='http://localhost:3000/Users';

  constructor(private _http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


  id:number;
  private headers=new Headers({'Content-Type':'application/json'});
  createItem(item: Employee): Observable<Employee[]> {
    return this._http
      .post<Employee[]>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  
 
  // Get students data
  getList(): Observable<Employee[]> {
    return this._http
      .get<Employee[]>(this.base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  
 

  // Delete item by id
  deleteItem(id: number) {
    return this._http
      .delete<Employee[]>(this.base_path + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

      // Update item by id
  updateItem(id:number, item: Employee): Observable<Employee[]> {
  
    return this._http
      .put<Employee[]>(this.base_path + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
      
      }
// Get single employee data by ID
getItem(id:number): Observable<Employee> {
  return this._http
    .get<Employee>(this.base_path + '/' + id)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
   
}
}
