import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { MesAbreviadoPipe } from './pipes/mes-abreviado.pipe';


@NgModule({
  declarations: [
    ErrorDialogComponent,
    MesAbreviadoPipe,

  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    AppMaterialModule,
  ],
  exports: [
    ErrorDialogComponent,
    MesAbreviadoPipe,
  ]
})
export class SharedModule { }

