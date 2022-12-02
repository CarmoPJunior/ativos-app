import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mesAbreviado'
})
export class MesAbreviadoPipe implements PipeTransform {

  transform(value: number): string {

    if(value > 12)
      return "Mês não encontrado!"

    const abbreviatedMonth = [ 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez' ];
    return abbreviatedMonth[value - 1];
  }

}

