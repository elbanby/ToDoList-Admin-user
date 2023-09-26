import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/admin/src/environments/environment';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private httpClient: HttpClient) { }
   user = new BehaviorSubject({})
  getAllTasks(filtration:any) {
    console.log(filtration);
    let params = new HttpParams();
    for (let [key, value] of Object.entries(filtration) as Array<[string, string | number | boolean]>) {
      if(value){
        params = params.append(key,value)
      }
      console.log(params);
    }
    return this.httpClient.get(environment.baseapi + 'tasks/all-tasks', {params:params})
  }
  creatTask(model: any) {
    return this.httpClient.post(environment.baseapi + 'tasks/add-task', model)
  }
  updateTask(model: any, id: any) {
    return this.httpClient.put(environment.baseapi + 'tasks/edit-task/' + id, model)
  }
  deleteTask(id: any) {
    return this.httpClient.delete(environment.baseapi + 'tasks/delete-task/' + id)
  }
  getUsers(){
    return this.httpClient.get(environment.baseapi +'auth/users' ,  )
  }
}
