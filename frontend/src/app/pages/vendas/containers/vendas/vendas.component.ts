import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { MatDialog as MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../../../components/error-dialog/error-dialog.component';

import { IVendas } from 'src/app/shared/models/vendas.model';
import { VendasService } from '../../../../services/vendas.service';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss']
})
export class VendasComponent {

  vendas$!: Observable<IVendas[]>;
  yearSelected: number;

  constructor(private vendasService: VendasService,
              public dialog: MatDialog,
  ) {
    this.yearSelected = 0;
  }

  receiverYearSelected(year: number) {
    this.yearSelected = year;
    this.getVendas()
  }

  getVendas(){

    this.vendas$ = this.vendasService.getVendasByYear(this.yearSelected)
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar Vendas!.');
        return of([])
      })
    );

  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
    this.getVendas();
  }

}
