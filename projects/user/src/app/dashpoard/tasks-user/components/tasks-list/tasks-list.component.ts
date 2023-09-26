import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  dataSource:any[] = []
  userDate:any
  page:number = 1
  limit:number = 10
  status:string = 'In-Progress'
  total:any
  params:any
  constructor(private taskSer:TasksService , private toaster:ToastrService) { }

  ngOnInit(): void {
    // this.creatFormViltration()
    this.getUserInfo()
    this.getTaskUser()
  }

  getUserInfo(){
    let token = JSON.stringify((localStorage.getItem('token')))
    this.userDate = JSON.parse((window.atob(token.split('.')[1])))
    console.log(this.userDate.userId)
  }

  getTaskUser(){
    this.params = {
      page: this.page,
      limit: this.limit,
      status: this.status
    }
    this.taskSer.getTaskForuser(this.userDate.userId, this.params).subscribe((res:any)=>{
      this.dataSource = res.tasks
      this.total = res.totalItems
      console.log(res)
    })
  }

  changeStatus(id:any){
    const Model = {
      id : id
    }
    this.taskSer.putStatus(Model).subscribe(res =>{
      this.getTaskUser();
      this.toaster.success("task completly sucssess" , "sucssess")
    })
  }

  changePage(event: any) {
    this.params['page'] = event
    this.page = event
    this.getTaskUser()
  }
}
