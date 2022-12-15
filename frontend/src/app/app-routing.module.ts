import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.PageTestModule) },
  { path: 'ativos', loadChildren: () => import('./pages/ativos/ativos.module').then(m => m.AtivosModule) },
  { path: 'dividendos', loadChildren: () => import('./pages/dividendos/dividendos.module').then(m => m.DividendosModule) },
  { path: 'vendas', loadChildren: () => import('./pages/vendas/vendas.module').then(m => m.VendasModule) },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
