import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private _http:HttpClient) { }
  getallUser()
  {
    return this._http.get("http://localhost:5555/Company_modules");
  }
}
