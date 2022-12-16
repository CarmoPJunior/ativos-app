import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType,  } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import { IVendas } from 'src/app/shared/models/vendas.model';
import {MesPorExtensoConstants} from '../../../../shared/constants/mesPorExtensoConst'

@Component({
  selector: 'app-vendas-chart-bar',
  templateUrl: './vendas-chart-bar.component.html',
  styleUrls: ['./vendas-chart-bar.component.scss']
})
export class VendasChartBarComponent implements OnInit{

  @Input() yearSelected!: number;
  @Input() vendas: IVendas[] = [];
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {min: 0}
    },
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: 'Lucro Ativos Vendidos',
        padding: {
            top: 2,
            bottom: 2
        }
      }
    }
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: MesPorExtensoConstants.listMesAbreviado,
    datasets: []
  };

  ngOnInit(): void {

    let valuesGroupByYear = this.groupByYear(this.vendas, 'ano');

    for (const key in valuesGroupByYear) {
      this.barChartData.datasets.push(valuesGroupByYear[key])
    }

  }

  groupByYear (array: any, key: any) {
    return array.reduce((acc: any, item: any) => {

        let yearly = {
          data:[],
          label: item.ano
        }

        if (!acc[item[key]]) acc[item[key]] = yearly

        acc[item[key]]['data'].push(item.lucro)
        return acc
      }, {})
  }

}
