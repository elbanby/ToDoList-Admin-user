import { AllowedUserComponentsGuard } from './../core/guards/allowed-user-components.guard';
import { TasksListComponent } from './tasks-user/components/tasks-list/tasks-list.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { TaskDetailsComponent } from './tasks-user/components/task-details/task-details.component';


const routes: Routes = [
  {
    path :'', component: LayoutComponent ,
    canActivateChild:[AllowedUserComponentsGuard],
    children:[
      {
        path: "", component:TasksListComponent
      },
      {
        path: "tasksUser", component:TasksListComponent
      },
      {
        path:'tasksUser/:id', component: TaskDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashpoardRoutingModule { }
