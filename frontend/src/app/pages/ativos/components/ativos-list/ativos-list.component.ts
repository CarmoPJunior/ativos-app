import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormControl} from '@angular/forms';
import { IAtivo, IAtivoTotalValues } from '../../../../shared/models/ativo.model';

@Component({
  selector: 'app-ativos-list',
  templateUrl: './ativos-list.component.html',
  styleUrls: ['./ativos-list.component.scss']
})
export class AtivosListComponent implements OnInit {

  ativosTotalValueInitialValue = {
    "lucroVendaTotal" : 0,
      "valorDividendoTotal":0,
      "totalLucroVendaDivendendo":0
  }

  @Input() yearsSelected!: number[] ;
  @Input() selectYearsItems!: number[];
  @Input() ativos: IAtivo[] = [];
  @Output() eventSelectedYear = new EventEmitter();

  ativosTotalValues: IAtivoTotalValues = this.ativosTotalValueInitialValue;

  ngOnInit(): void {  
    this.sumValueTotalAtivos();
  }

  onSelect(){

    if(this.yearsSelected.includes(0)){
      this.yearsSelected = [];
    }

    this.eventSelectedYear.emit(this.yearsSelected);
  }

  sumValueTotalAtivos(){

    this.ativosTotalValues = this.ativos.reduce(
        (accumulator: any, currentItem: IAtivo) =>{

      accumulator.lucroVendaTotal += currentItem.lucroVenda;
      accumulator.valorDividendoTotal += currentItem.valorDividendo;

      return accumulator;
    },  this.ativosTotalValueInitialValue);

    this.ativosTotalValues.totalLucroVendaDivendendo = (
      this.ativosTotalValues.lucroVendaTotal
        + this.ativosTotalValues.valorDividendoTotal
    );

  }

}
