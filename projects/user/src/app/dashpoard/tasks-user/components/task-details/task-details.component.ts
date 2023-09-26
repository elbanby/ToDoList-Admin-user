import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  id:any
  taskDeatails: any
  constructor(private taskSer:TasksService , private route: ActivatedRoute, private router: Router, private toaster:ToastrService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getTaskDeatails()
  }
  getTaskDeatails(){

    this.taskSer.getTaskDeatails(this.id).subscribe((res:any) =>{
      this.taskDeatails =  res.tasks
    })
  }
  changeStatus(){
    const Model = {
      id : this.id
    }
    this.taskSer.putStatus(Model).subscribe(res =>{
      this.router.navigate(['/tasksUser'])
      this.toaster.success("task completly sucssess" , "sucssess")
    })
  }
}
