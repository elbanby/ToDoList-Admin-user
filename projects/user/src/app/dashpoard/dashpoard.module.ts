import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashpoardRoutingModule } from './dashpoard-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatrialModule } from '../matrial/matrial.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    // CommonModule,
    // RouterModule,
    // ReactiveFormsModule,
    DashpoardRoutingModule,
    // MatrialModule,
    SharedModule,
    // NgxPaginationModule,
    // BrowserModule
  ]
})
export class DashpoardModule { }
