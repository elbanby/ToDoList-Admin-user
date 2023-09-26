
import { Component, OnInit } from '@angular/core';
import { flush } from '@angular/core/testing';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { group } from '@angular/animations';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formRegister!: FormGroup
  passFlag: boolean = false
  constructor(private fb: FormBuilder,private router: Router , private loginSer:LoginService) { }

  ngOnInit(): void {
    this.getFormRegister()
  }
  getFormRegister() {
    this.formRegister = this.fb.group({
      username: ['', [Validators.required , Validators.minLength(5)]],
      email: ['',[ Validators.required , Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    },{validators:this.checkPassword})
  }
  submit() {
    const model={
      email:this.formRegister.value['email'],
      password:this.formRegister.value['password'],
      username:this.formRegister.value['username'],
      rolr:'user',
    }
    this.loginSer.creatUser(model).subscribe(res => {
      console.log(res)
      this.router.navigate([''])
    })
  }
  checkPassword:ValidatorFn = (group:AbstractControl):ValidationErrors | null => {
    let password = group.get("password")?.value
    let confirmPassword = group.get("confirmPassword")?.value
    return password === confirmPassword ? null : {notSame : true}
  }

}
