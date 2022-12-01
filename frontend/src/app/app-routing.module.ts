import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'page-test' },
  // { path: 'ativos', loadChildren: () => import('./ativos/ativos.module').then(m => m.AtivosModule) },
  { path: 'page-test', loadChildren: () => import('./page-test/page-test.module').then(m => m.PageTestModule) },
  { path: 'ativos', loadChildren: () => import('./ativos/ativos.module').then(m => m.AtivosModule) },
  { path: 'dividendos', loadChildren: () => import('./dividendos/dividendos.module').then(m => m.DividendosModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
