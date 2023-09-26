import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { NgxPaginationModule, PaginationControlsComponent, PaginationService } from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatrialModule } from '../../matrial/matrial.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';




@NgModule({
  declarations: [
    TasksListComponent,
    TaskDetailsComponent,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    SharedModule,
    ReactiveFormsModule,
    MatrialModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    ToastrModule

  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class TasksUserModule { }
