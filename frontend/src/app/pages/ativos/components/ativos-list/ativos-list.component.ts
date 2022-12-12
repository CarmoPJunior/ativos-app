import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { IAtivo } from '../../../../shared/models/ativo.model';

@Component({
  selector: 'app-ativos-list',
  templateUrl: './ativos-list.component.html',
  styleUrls: ['./ativos-list.component.scss']
})
export class AtivosListComponent {

  @Input() ativos: IAtivo[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);

  onAdd() {
    this.add.emit(true);
  }

  onEdit(ativo: IAtivo) {
    this.edit.emit(ativo);
  }
}
