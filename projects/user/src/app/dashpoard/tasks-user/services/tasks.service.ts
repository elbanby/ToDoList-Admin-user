import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/user/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient) { }

  getTaskForuser(id:any , paramsForUser:any){
    let params = new HttpParams();
    for (let [key, value] of Object.entries(paramsForUser) as Array<[string, string | number | boolean]>) {
      params = params.append(key,value)
      console.log(key, value);
    }
    return this.http.get( environment.baseapi + 'tasks/user-tasks/'+id , {params})
  }
  putStatus(model:object){
    return this.http.put(environment.baseapi + 'tasks/complete' ,model)
  }
  getTaskDeatails(id:string){
    return this.http.get(environment.baseapi + 'tasks/task/' + id)
  }
}
