import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageTestComponent } from './page-test.component';

const routes: Routes = [{ path: '', component: PageTestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageTestRoutingModule { }
