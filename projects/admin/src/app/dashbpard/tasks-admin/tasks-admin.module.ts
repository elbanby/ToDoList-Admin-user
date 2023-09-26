import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TasksAdminRoutingModule } from './tasks-admin-routing.module';
import { MatrialModule } from '../../matrial/matrial.module';
import { AddNewTaskComponent } from './components/add-new-task/add-new-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmatinCloseComponent } from './components/confirmatin-close/confirmatin-close.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    TasksListComponent,
    AddNewTaskComponent,
    ConfirmatinCloseComponent
  ],
  imports: [
    CommonModule,
    TasksAdminRoutingModule,
    MatrialModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SharedModule,
    
  ]
})
export class TasksAdminModule { }
