import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { MatrialModule } from '../matrial/matrial.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { AuthRoutingModule } from './auth-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent,

  ],
  imports: [
    CommonModule,
    MatrialModule,
    ReactiveFormsModule,
    RouterModule,
    AuthRoutingModule,
  ],
  exports:[
    LoginComponent
  ]
})
export class AuthModule { }
