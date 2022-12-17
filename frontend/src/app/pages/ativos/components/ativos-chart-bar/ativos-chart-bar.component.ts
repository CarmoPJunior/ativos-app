import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import { IAtivo } from '../../../../shared/models/ativo.model';
import {MesPorExtensoConstants} from '../../../../shared/constants/mesPorExtensoConst'

@Component({
  selector: 'app-ativos-chart-bar',
  templateUrl: './ativos-chart-bar.component.html',
  styleUrls: ['./ativos-chart-bar.component.scss']
})
export class AtivosChartBarComponent implements OnInit{

  @Input() ativos: IAtivo[] = [];
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
        display: false,
        text: 'Lucro Total Ativos',
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

    let valuesGroupByYear = this.groupByYear(this.ativos, 'ano');

    for (const key in valuesGroupByYear) {
      this.barChartData.datasets.push(valuesGroupByYear[key])
    }

  }

  groupByYear (array: any, key: any) {
    return array.reduce((accumulator: any, currentItem: any) => {

        let newItem = {
          data:[],
          label: currentItem.ano
        }

        if (!accumulator[currentItem[key]])
          accumulator[currentItem[key]] = newItem

          accumulator[currentItem[key]]['data'].push(currentItem.totalLucroVendaDivendendo)

        return accumulator
      }, {})
  }


}
