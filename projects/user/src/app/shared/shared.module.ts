import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxPaginationModule,
    TranslateModule.forChild({
      extend:true
    })
  ],
  exports : [
    TranslateModule
  ],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }
