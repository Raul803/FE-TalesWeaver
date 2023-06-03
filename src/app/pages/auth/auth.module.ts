import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from "@angular/router";
import { AuthRoutes } from "./auth.routing";
import {RegistryComponent} from "./registry/registry.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AuthRoutes),
        FormsModule,
        ReactiveFormsModule,
    ],
  declarations: [
    LoginComponent,
    RegistryComponent
  ],
  exports: [],
  providers: []
})
export class AuthModule { }
