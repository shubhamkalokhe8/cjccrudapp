import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterdeviceRoutingModule } from './registerdevice-routing.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    RegisterdeviceRoutingModule,
    ReactiveFormsModule
  ]
})
export class RegisterdeviceModule { }
