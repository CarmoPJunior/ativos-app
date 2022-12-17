import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

import { IAtivo } from '../../../../shared/models/ativo.model';
import { AtivosService } from '../../../../services/ativos.service';
import { ErrorDialogComponent } from '../../../../components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-ativos',
  templateUrl: './ativos.component.html',
  styleUrls: ['./ativos.component.scss']
})
export class AtivosComponent implements OnInit {

  ativos$!: Observable<IAtivo[]>;
  yearsSelected: number[] ;
  selectYearsItems: number[] = [2020, 2021, 2022];

  constructor(  private ativosService: AtivosService,
                public dialog: MatDialog,
  ) {
    this.yearsSelected = [];
  }

  receiverYearSelected(years: number[]) {
    this.yearsSelected = years;
    this.getAtivos()
  }

  getAtivos(){

    this.ativos$ = this.ativosService.getAtivosByYear(this.yearsSelected)
    .pipe(
      catchError(error => {
        console.log(error)
        this.onError('Erro ao carregar ativos!.');
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

  ngOnInit(): void {
    this.getAtivos();
  }
}
