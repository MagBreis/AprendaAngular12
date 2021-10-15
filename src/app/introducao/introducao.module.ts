import { IntroducaoComponent } from './introducao.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    IntroducaoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    IntroducaoComponent
  ]
})
export class IntroducaoModule { }
