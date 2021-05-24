import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  getUserDetails(username:any, password:any){
    // post these details to API server return user info
    return this.http.post('localhost:3000',{
      username,
      password
    })

  }
}
