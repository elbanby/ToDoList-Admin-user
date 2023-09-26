import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/user/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  
  creatUser(form:any){
    return this.http.post(environment.baseapi + 'auth/createAccount' ,form)
  }
  login(form:any){
    return this.http.post(environment.baseapi + 'auth/login' ,form)
  }
}
