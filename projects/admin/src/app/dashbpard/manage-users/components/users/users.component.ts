import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ToastrService } from 'ngx-toastr';

export interface PeriodicElement {
  Name: string;
  position:number
  Email: number;
  Tasks: string;
  Edit :any
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  displayedColumns: string[] = [ 'position', 'Name', 'Email', 'Tasks' , 'Edit'];
  Model:any
  page = 1
  limit = 6
  name = ''
  dataSource:any
  total: number | undefined;
  constructor(private userSer:UsersService , private toaster:ToastrService) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser(){
     this.Model = {
      page : this.page,
      limit: this.limit,
      name: this.name
    }
    this.userSer.getUsers(this.Model).subscribe((res:any) =>{
      this.dataSource = res.users
      this.total = res.totalItems
      console.log(res)

    })
  }

  deleteUser(id:string){
    this.userSer.deleteUSer(id).subscribe(res => {
      this.toaster.success("Deleted Succssesfully")
      this.getUser()
    })
  }
  
  changeStatus(status:string , id:string){
    let Model ={
      status,
      id,
    }
    this.userSer.changeStuses(Model).subscribe(res =>{
      this.toaster.success("Changed Succssesfully")
      this.getUser()
    })
  }

  changePage(event: any) {
    this.page = event
    this.Model['page'] = event
    this.getUser()
  }

}
