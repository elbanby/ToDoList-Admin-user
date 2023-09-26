import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/admin/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http:HttpClient) { }
  PostLoginForm(model:any){
    return  this.http.post(environment.baseapi+ "auth/login",model)
  }
}
