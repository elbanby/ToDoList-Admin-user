import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AllowedLoginGuard } from '../core/guards/allowed-login.guard';

const routes: Routes = [
    {path :'', component:LoginComponent ,  pathMatch:'full' , canActivate:[AllowedLoginGuard]},
    {path :'login', component:LoginComponent, canActivate:[AllowedLoginGuard]},
    {path :'register', component:RegisterComponent, canActivate:[AllowedLoginGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
