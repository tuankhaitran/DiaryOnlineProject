import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  _url="http://mongodb://localhost:27017/registration";
  constructor(private _http: HttpClient) { }

  register(userData:any){
    return this._http.post<any>(this._url, userData);
  }
}
