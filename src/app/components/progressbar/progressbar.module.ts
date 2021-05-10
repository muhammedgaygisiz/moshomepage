import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProgressbarComponent} from './progressbar/progressbar.component';
import {MatStepperModule} from "@angular/material/stepper";


@NgModule({
  declarations: [
    ProgressbarComponent
  ],
  exports: [
    ProgressbarComponent
  ],
  imports: [
    MatStepperModule,
    CommonModule
  ]
})
export class ProgressbarModule {
}
