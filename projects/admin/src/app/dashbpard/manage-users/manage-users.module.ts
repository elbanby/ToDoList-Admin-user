import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { ManageUsersRoutingModule } from './manage-routing.module';
import { MatrialModule } from '../../matrial/matrial.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    ManageUsersRoutingModule,
    MatrialModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SharedModule
  ]
})
export class ManageUsersModule { }
