import { NgModule } from '@angular/core';
import {IonicModule} from "ionic-angular";

import { LoginComponent } from './login/login.component';

@NgModule({
	declarations: [
	  LoginComponent
  ],
	imports: [IonicModule],
	exports: [
	  LoginComponent
  ]
})
export class ComponentsModule {}
