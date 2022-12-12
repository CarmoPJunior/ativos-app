import { Component, ViewChild, Input, OnInit } from '@angular/core';

import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import { IDividendos } from '../../../../shared/models/dividendos.model';

@Component({
  selector: 'app-dividendos-total-pie-chart',
  templateUrl: './dividendos-total-pie-chart.component.html',
  styleUrls: ['./dividendos-total-pie-chart.component.scss']
})
export class DividendosTotalPieChartComponent implements OnInit{

  @Input() dividendos: IDividendos[] = [];
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    }
  };
  public pieChartData: ChartData<'pie', number[], string[]> = {
    labels: [ ],
    datasets: [ {
      data: [ ]
    } ]
  };

  public pieChartType: ChartType = 'pie';

  ngOnInit(): void {

    let valuesGroupByYear = this.groupByYear(this.dividendos, 'ano');

    valuesGroupByYear.forEach((element:any) => {
      this.pieChartData.datasets[0].data.push(element.data);
      this.pieChartData.labels?.push(element.label);
    });

  }

  groupByYear (array: any, key: any) {
    return array.reduce((acc: any, item: any) => {

        let yearly = {
          data: 0,
          label: item.ano
        }

        if (!acc[item[key]])
          acc[item[key]] = yearly

        acc[item[key]]['data'] += item.valor
        return acc
      }, [])
  }


}
