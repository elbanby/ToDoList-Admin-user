import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbpardRoutingModule } from './dashbpard-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { MatrialModule } from '../matrial/matrial.module';
import { SharedModule } from '../shared/shared.module';
import { TasksUserModule } from 'projects/user/src/app/dashpoard/tasks-user/tasks-user.module';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    DashbpardRoutingModule,
    RouterModule,
    MatrialModule,
    SharedModule,

  ]
})
export class DashbpardModule { }
