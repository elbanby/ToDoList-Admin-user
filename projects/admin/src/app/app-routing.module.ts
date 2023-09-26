import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"dashboard" ,
    loadChildren:()=> import(`./dashbpard/dashbpard.module`).then(m => m.DashbpardModule)
  },
  {
    path:"" ,
    loadChildren:()=> import(`./auth/auth.module`).then(m => m.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
