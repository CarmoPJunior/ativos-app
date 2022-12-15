import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { SharedModule } from '../../shared/shared.module';
import { NgChartsModule } from 'ng2-charts';


import { VendasRoutingModule } from './vendas-routing.module';
import { VendasListComponent } from './components/vendas-list/vendas-list.component';
import { VendasChartBarComponent } from './components/vendas-chart-bar/vendas-chart-bar.component';
import { VendasComponent } from './containers/vendas/vendas.component';


@NgModule({
  declarations: [
    VendasComponent,
    VendasListComponent,
    VendasChartBarComponent
  ],
  imports: [
    CommonModule,
    VendasRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NgChartsModule
  ]
})
export class VendasModule { }
