import { IonicModule } from '@ionic/angular';
import { SignPadComponent } from './sign-pad/sign-pad.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignaturePadModule } from 'angular2-signaturepad';

const components = [
  SignPadComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    IonicModule,
    CommonModule,
    SignaturePadModule
  ],
  exports: [...components],
})
export class ComponentsModule { }
