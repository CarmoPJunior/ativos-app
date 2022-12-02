import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

import { IAtivo } from '../../models/ativo.model';
import { AtivosService } from '../../services/ativos.service';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-ativos',
  templateUrl: './ativos.component.html',
  styleUrls: ['./ativos.component.scss']
})
export class AtivosComponent implements OnInit {

  ativos$: Observable<IAtivo[]>;

  constructor(
    private ativosService: AtivosService,
    public dialog: MatDialog,
    public formAtivosDialog : MatDialog,
  ) {
    this.ativos$ = this.ativosService.list()
      .pipe(
        catchError(error => {
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

  ngOnInit(): void { }

  onAdd() {
  }

  onEdit(ativo: IAtivo) {
  }


}
