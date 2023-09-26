import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class CatchErrorsInterceptor implements HttpInterceptor {

  constructor(private router:Router , private toaster:ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error:HttpErrorResponse)=>{
        this.toaster.error(error.error.message)
        if(error.error.message === 'jwt expired' || error.error.message === 'jwt malformed'){
          this.router.navigate(['/login'])
          localStorage.removeItem('token')
        }
        throw error
      })
    );
  }
}
