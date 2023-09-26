
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmatinCloseComponent } from '../confirmatin-close/confirmatin-close.component';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.scss']
})
export class AddNewTaskComponent implements OnInit {
  fileName: '' | undefined;
  outputDate: any
  OldForm: any
  users :any[]= []
  newTask!: FormGroup
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private tasksService: TasksService,
    private toaster: ToastrService,
    private spinner: NgxSpinnerService,
    public dialog: MatDialogRef<AddNewTaskComponent>,
    public matdialog: MatDialog,
  ) { }
  ngOnInit(): void {
    this.getUsers()
    this.creatform()
    console.log(this.data?.image)
  }
  creatform() {
    this.newTask = this.fb.group({
      title: [this.data?.title || '', [Validators.required, Validators.minLength(5)]],
      userId: [this.data?.userId._id || '', Validators.required],
      image: [this.data?.image || '', Validators.required],
      deadline: [this.data?new Date(this.data?.deadline.split('-').reverse().join('-')).toISOString() : '', Validators.required],
      description: [this.data?.description || '', Validators.required],
    })
    this.OldForm = this.newTask.value
  }
  getUsers(){
    this.tasksService.user.subscribe((res:any)=>{
      console.log(res)
      this.users = res
    })
  }
  selectImage(event: any) {
    this.fileName = event.target.value
    this.newTask.get("image")?.setValue(event.target.files[0])
  }
  creatTask() {
    let model = this.prepareFormData();
    this.tasksService.creatTask(model).subscribe(res => {
      this.toaster.success("Task Created Successfully", "succeess")
      this.dialog.close(true);
      console.log(res)
    })
  }
  updateTask() {
    let model = this.prepareFormData();
    this.tasksService.updateTask(model, this.data._id).subscribe(res => {
      this.toaster.success("Task updated Successfully", "succeess")
      this.dialog.close(true);
      console.log(res)
    })
  }
  prepareFormData() {
    let deadlineFormat = moment(this.newTask.value['deadline']).format('DD-MM-YYYY')
    let formData = new FormData()
    Object.entries(this.newTask.value).forEach(([key, value]: any) => {
      if (key == 'deadline') {
        formData.append(key, deadlineFormat)
      } else {
        formData.append(key, value)
      }
    })
    return formData;
  }
  close() {
    let hasChanges = false
    Object.keys(this.OldForm).forEach((item) => {
      if (this.OldForm[item] !== this.newTask.value[item]) {
        hasChanges = true
      }
    })

    if (hasChanges) {
      const dialogRef = this.matdialog.open(ConfirmatinCloseComponent, {
        width: '500px',
        disableClose:true
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {

        }
      });
    } else {
      this.dialog.close(true)
    }
  }

}
