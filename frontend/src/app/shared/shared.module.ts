import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ErrorDialogComponent } from '../components/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { MesAbreviadoPipe } from './pipes/mes-abreviado.pipe';
import { LoadSpinnerComponent } from '../components/load-spinner/load-spinner.component';
import { LoadSpinnerCardComponent } from '../components/load-spinner-card/load-spinner-card.component';


@NgModule({
  declarations: [
    ErrorDialogComponent,
    MesAbreviadoPipe,
    LoadSpinnerComponent,
    LoadSpinnerCardComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    AppMaterialModule,
  ],
  exports: [
    ErrorDialogComponent,
    MesAbreviadoPipe,
    LoadSpinnerComponent,
    LoadSpinnerCardComponent
  ]
})
export class SharedModule { }

