import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/user/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  getUsers(model:any){
    return this.http.get(environment.baseapi +'auth/users' , model )
  }
  changeStuses(model:any){
    return this.http.put(environment.baseapi + 'auth/user-status' , model)
  }
  deleteUSer(id:any){
    return this.http.delete(environment.baseapi + 'auth/user/' + id )
  }
}
