import { RouterModule } from '@angular/router';
import { SaibaMaisComponent } from './saiba-mais.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    SaibaMaisComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SaibaMaisComponent
  ]
})
export class SaibaMaisModule { }
