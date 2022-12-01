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

  constructor() {}

  ngOnInit(): void {}

  onSelect(){
    this.eventSelectedYear.emit(this.yearSelected);
  }

}
