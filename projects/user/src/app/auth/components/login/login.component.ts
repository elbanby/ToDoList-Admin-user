import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private loginSer: LoginService, private router: Router,private toaster:ToastrService) { }

  ngOnInit(): void {
    this.getFormData()
  }
  getFormData() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      role: ['user']
    })
  }

  submit() {
    this.loginSer.login(this.loginForm.value).subscribe((res:any) => {
      console.log(res)
      localStorage.setItem('token',res.token)
      this.router.navigate(['/tasksUser'])
      this.toaster.success("login Success" , "success")
    })
  }
}
