import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginSer:LoginService,
    private toaster:ToastrService,
    private router:Router,
    private spinner: NgxSpinnerService
  ) {}
  ngOnInit(): void {
    this.getFormData()
  }
  getFormData() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required , Validators.minLength(3) ,Validators.maxLength(20)]],
      role: ['admin']
    })
  }
  submit() {
    this.loginSer.PostLoginForm(this.loginForm.value).subscribe((res:any)=>{
      console.log(res)
      localStorage.setItem("token",res.token)
      this.toaster.success("Success","Login success")
      this.router.navigate(["/tasks"])
    })
    console.log(this.loginForm.value)
  }
}
