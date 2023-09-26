import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './interceptor/loader.interceptor';
import { catchError } from 'rxjs';
import { CatchErrorsInterceptor } from './interceptor/catch-errors.interceptor';
import { AuthInterceptor } from './interceptor/auth.interceptor';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,

  ],
  providers:[
    {
      useClass: LoaderInterceptor,
      provide: HTTP_INTERCEPTORS,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CatchErrorsInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ]
})
export class CoreModule { }
