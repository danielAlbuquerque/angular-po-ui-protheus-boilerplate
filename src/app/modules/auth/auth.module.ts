import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { PoModalPasswordRecoveryModule, PoPageLoginModule } from '@po-ui/ng-templates';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PoPageLoginModule,
    PoModalPasswordRecoveryModule
  ]
})
export class AuthModule { }
