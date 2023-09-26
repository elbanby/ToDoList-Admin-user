import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { MatDialog } from '@angular/material/dialog';
import { AddNewTaskComponent } from '../add-new-task/add-new-task.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { TranslateService } from '@ngx-translate/core';

// export interface periodElement {
//   title: string;
//   user: string;
//   deadline: string;
//   status: string;
//   footer: string
// }

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  displayedColumns = ['position', 'title', 'user', 'deadline', 'status', 'footer']
  dataSource: any = []
  page = 1
  filtreation: any = {
    page: 1,
    limit: 7
  }
  timeOutId: any
  total: any
  users : any[] =[]
  status = [
    { name: this.translate.instant("tasks.complete") },
    { name: this.translate.instant("tasks.In-Progress") }
  ]
  constructor(
    private task: TasksService,
    public dialog: MatDialog,
    private toaster: ToastrService,
    private spinner: NgxSpinnerService,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.getUsers()
    this.getAllTasks()
  }

  // Add New Task
  addNewTask() {
    const dialogRef = this.dialog.open(AddNewTaskComponent, {
      width: '750px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getAllTasks()
      }
    });
  }

  // Get Tasks in table
  getAllTasks() {
    this.task.getAllTasks(this.filtreation).subscribe((res: any) => {
      this.dataSource = this.showUser(res.tasks)
      this.total = res.totalItems
      console.log(res)
      console.log(this.dataSource)
    })
  }
  showUser(data: any[]) {
    let newTask = data.map((item) => {
      return {
        ...item,
        user: item.userId?.username
      }
    })
    return newTask
  }
  deleteTask(id: any) {
    this.task.deleteTask(id).subscribe(res => {
      this.getAllTasks();
    })
  }
  updateTask(element: any) {
    const dialogRef = this.dialog.open(AddNewTaskComponent, {
      width: '750px',
      data: element,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getAllTasks()
      }
    });
  }

  // Filltration
  searchByKeyword(event: any) {
    this.page = 1
    this.filtreation['page'] = 1
    this.filtreation['keyword'] = event
    clearTimeout(this.timeOutId);
    this.timeOutId = setTimeout(() => {
      this.getAllTasks()
    }, 2000);
  }
  searchByuser(event: any) {
    this.page = 1
    this.filtreation['page'] = 1
    this.filtreation['userId'] = event
    this.getAllTasks()
  }
  searchByStatus(event: any) {
    this.page = 1
    this.filtreation['page'] = 1
    this.filtreation['status'] = event
    this.getAllTasks()
  }
  searchByDate(event: any, type: any) {
    this.page = 1
    this.filtreation['page'] = 1
    this.filtreation[type] = moment(event).format('DD-MM-YYYY')
    if (type === 'toDate' && this.filtreation['toDate'] !== 'Invalid date') {
      this.getAllTasks()
    }
  }
  getUsers(){
    this.task.getUsers().subscribe((res:any)=>{
      this.users =  res.users
      this.task.user.next(this.users)
      this.task.user.subscribe(res=>{
        console.log(res)
      })
    })
  }

  // Paggination
  changePage(event: any) {
    this.page = event
    this.filtreation['page'] = event
    this.getAllTasks()
  }
}
