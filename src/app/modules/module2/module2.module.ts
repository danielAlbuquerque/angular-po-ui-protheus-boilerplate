import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from './module2-routing.module';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    Module2RoutingModule
  ]
})
export class Module2Module { }
