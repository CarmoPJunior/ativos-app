import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { IDividendos } from '../../models/dividendos.model';

@Component({
  selector: 'app-dividendos-list',
  templateUrl: './dividendos-list.component.html',
  styleUrls: ['./dividendos-list.component.scss']
})
export class DividendosListComponent implements OnInit {

  @Input() yearSelected!:number;
  @Input() dividendos: IDividendos[] = [];
  @Output() eventSelectedYear = new EventEmitter();

  totalValueDividendos: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.sumValueTotalDividendos();
  }

  onSelect(){
    this.eventSelectedYear.emit(this.yearSelected);
  }

  sumValueTotalDividendos(){

    this.totalValueDividendos = this.dividendos.reduce((total, currentValue) =>{
      return total + currentValue.valor;
    }, 0);

  }

}
