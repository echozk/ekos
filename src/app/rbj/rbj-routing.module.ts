import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RbjPage } from './rbj.page';

const routes: Routes = [
  {
    path: '',
    component: RbjPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RbjPageRoutingModule {}
