import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { SharedModule } from '../../shared/shared.module';

import { AtivosRoutingModule } from './ativos-routing.module';
import { AtivosComponent } from './containers/ativos/ativos.component';
import { AtivosListComponent } from './components/ativos-list/ativos-list.component';


@NgModule({
  declarations: [
    AtivosComponent,
    AtivosListComponent
  ],
  imports: [
    CommonModule,
    AtivosRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AtivosModule { }
