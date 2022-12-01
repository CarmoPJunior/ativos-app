import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageTestRoutingModule } from './page-test-routing.module';
import { PageTestComponent } from './page-test.component';


@NgModule({
  declarations: [
    PageTestComponent
  ],
  imports: [
    CommonModule,
    PageTestRoutingModule
  ]
})
export class PageTestModule { }
