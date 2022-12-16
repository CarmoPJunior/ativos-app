import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType,  } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import { IDividendos } from '../../../../shared/models/dividendos.model';
import {MesPorExtensoConstants} from '../../../../shared/constants/mesPorExtensoConst'

@Component({
  selector: 'app-dividendos-chart-bar',
  templateUrl: './dividendos-chart-bar.component.html',
  styleUrls: ['./dividendos-chart-bar.component.scss']
})
export class DividendosChartBarComponent implements OnInit{

  @Input() yearSelected!: number;
  @Input() dividendos: IDividendos[] = [];
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
        text: 'Dividendos Recebidos',
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

    let valuesGroupByYear = this.groupByYear(this.dividendos, 'ano');

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

        acc[item[key]]['data'].push(item.valor)
        return acc
      }, {})
  }

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

}
