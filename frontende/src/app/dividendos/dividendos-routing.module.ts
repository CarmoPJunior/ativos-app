import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DividendosComponent } from './containers/dividendos/dividendos.component';

const routes: Routes = [{ path: '', component: DividendosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DividendosRoutingModule { }
