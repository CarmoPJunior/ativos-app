import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VendasComponent} from './containers/vendas/vendas.component';


const routes: Routes = [{ path: '', component: VendasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendasRoutingModule { }
