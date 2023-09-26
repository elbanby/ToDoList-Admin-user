import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  language:any ='en'

  constructor(translate:TranslateService , private router:Router) {
    this.language =  translate.currentLang
  }

  ngOnInit(): void {
  }
  changeLanguage(){
    if(this.language === 'en'){
      localStorage.setItem('language', 'ar')
    }else{
      localStorage.setItem('language', 'en')
    }
    window.location.reload()
  }
  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
}
