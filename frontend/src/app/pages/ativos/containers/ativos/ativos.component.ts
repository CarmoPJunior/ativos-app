import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

import { IAtivo } from '../../../../shared/models/ativo.model';
import { AtivosService } from '../../../../services/ativos.service';
import { ErrorDialogComponent } from '../../../../components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-ativos',
  templateUrl: './ativos.component.html',
  styleUrls: ['./ativos.component.scss']
})
export class AtivosComponent {

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

  onAdd() {
    console.log("add");
  }

  onEdit(ativo: IAtivo) {
    console.log("add");
  }


}
