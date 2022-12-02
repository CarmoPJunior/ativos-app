import { Component, OnInit} from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MatDialog as MatDialog } from '@angular/material/dialog';

import { IDividendos } from '../../models/dividendos.model';
import { DividendosService } from '../../services/dividendos.service';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';


@Component({
  selector: 'app-dividendos',
  templateUrl: './dividendos.component.html',
  styleUrls: ['./dividendos.component.scss']
})
export class DividendosComponent implements OnInit {

  dividendos$!: Observable<IDividendos[]>;
  yearSelected: number;

  constructor( private dividendosService: DividendosService,
    public dialog: MatDialog,
  ) {
    this.getDividendos();
    this.yearSelected = 0;
  }

  receiverYearSelected(year: number) {
    this.yearSelected = year;
    this.getDividendos()
  }

  getDividendos(){

    this.dividendos$ = this.dividendosService.getDividendosByAno(this.yearSelected)
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar dividendos!.');
        return of([])
      })
    );

  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
    console.log(errorMsg);
  }

  ngOnInit(): void { }
}
