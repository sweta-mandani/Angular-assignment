import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private _http:HttpClient) { }
  CreateUser(user: any)
  {
    return this._http.post("http://localhost:3000/Users",user);
  }
  getallUser()
  {
    return this._http.get("http://localhost:3000/Users");
  }
}
