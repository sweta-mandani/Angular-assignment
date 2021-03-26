import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {Compnanymodul } from './Compnanymodul';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private apiServer = "http://http://localhost:5555/";
  
  
  constructor(private httpClient: HttpClient) { }

 
 

  getAll(): Observable<Compnanymodul[]> {
    return this.httpClient.get<Compnanymodul[]>(this.apiServer + '/Compnanymodul/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  

  
  errorHandler(error:HttpErrorResponse) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }
}