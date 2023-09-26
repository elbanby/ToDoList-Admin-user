import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { MatrialModule } from './matrial/matrial.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ManageUsersModule } from './dashbpard/manage-users/manage-users.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { DashbpardModule } from './dashbpard/dashbpard.module';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { TasksAdminModule } from './dashbpard/tasks-admin/tasks-admin.module';
import {  HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    AuthModule,
    CoreModule,
    ManageUsersModule,
    MatrialModule,
    TasksAdminModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    DashbpardModule,
    NgxPaginationModule,
    NgxSpinnerModule.forRoot({ type: 'square-jelly-box' }),
    TranslateModule.forRoot({
      defaultLanguage:'en',
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
