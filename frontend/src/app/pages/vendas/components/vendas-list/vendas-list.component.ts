import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IVendas } from 'src/app/shared/models/vendas.model';

@Component({
  selector: 'app-vendas-list',
  templateUrl: './vendas-list.component.html',
  styleUrls: ['./vendas-list.component.scss']
})
export class VendasListComponent implements OnInit{

  @Input() yearSelected!:number;
  @Input() vendas: IVendas[] = [];
  @Output() eventSelectedYear = new EventEmitter();

  totalValueVendas: number = 0;

  ngOnInit(): void {
    this.sumValueTotalVendas();
  }

  onSelect(){
    this.eventSelectedYear.emit(this.yearSelected);
  }

  sumValueTotalVendas(){

    this.totalValueVendas = this.vendas.reduce((total, currentValue) =>{
      return total + currentValue.lucro;
    }, 0);

  }


}
