import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { SharedModule } from '../../shared/shared.module';
import { NgChartsModule } from 'ng2-charts';

import { AtivosRoutingModule } from './ativos-routing.module';
import { AtivosComponent } from './containers/ativos/ativos.component';
import { AtivosListComponent } from './components/ativos-list/ativos-list.component';
import { AtivosChartBarComponent } from './components/ativos-chart-bar/ativos-chart-bar.component';


@NgModule({
  declarations: [
    AtivosComponent,
    AtivosListComponent,
    AtivosChartBarComponent
  ],
  imports: [
    CommonModule,
    AtivosRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NgChartsModule
  ]
})
export class AtivosModule { }
