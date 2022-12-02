import { Component, ViewChild, Input, OnInit } from '@angular/core';

import { ChartConfiguration, ChartData, ChartEvent, ChartType,  } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

// import DataLabelsPlugin from 'chartjs-plugin-datalabels';

import { IDividendos } from '../../models/dividendos.model';



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
    }
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: [ 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez' ],
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


  // groupBy (array: any, key: any) {
  //   return array.reduce((acc: any, item: any) => {
  //       if (!acc[item[key]]) acc[item[key]] = []

  //       acc[item[key]].push(item)
  //       return acc
  //     }, {})
  // }

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

}
