import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { SharedModule } from '../../shared/shared.module';
import { NgChartsModule } from 'ng2-charts';

import { DividendosRoutingModule } from './dividendos-routing.module';
import { DividendosComponent } from './containers/dividendos/dividendos.component';
import { DividendosListComponent } from './components/dividendos-list/dividendos-list.component';
import { DividendosChartBarComponent } from './components/dividendos-chart-bar/dividendos-chart-bar.component';
import { DividendosTotalPieChartComponent } from './components/dividendos-total-pie-chart/dividendos-total-pie-chart.component';


@NgModule({
  declarations: [
    DividendosComponent,
       DividendosListComponent,
       DividendosChartBarComponent,
       DividendosTotalPieChartComponent
  ],
  imports: [
    CommonModule,
    DividendosRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NgChartsModule
  ]
})
export class DividendosModule { }
