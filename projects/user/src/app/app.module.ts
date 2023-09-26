import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatrialModule } from 'projects/admin/src/app/matrial/matrial.module';

import { AuthModule } from './auth/auth.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DashbpardModule } from 'projects/admin/src/app/dashbpard/dashbpard.module';
import { CoreModule } from './core/core.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from 'projects/admin/src/app/shared/shared.module';
import { TasksUserModule } from './dashpoard/tasks-user/tasks-user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatrialModule,
    AuthModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    DashbpardModule,
    NgxPaginationModule,
    SharedModule,
    CoreModule,
    TasksUserModule,
    ToastrModule.forRoot(),    NgxSpinnerModule.forRoot({ type: 'square-jelly-box' }),
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
