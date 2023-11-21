import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormpublicarPage } from './formpublicar.page';

const routes: Routes = [
  {
    path: '',
    component: FormpublicarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormpublicarPageRoutingModule {}
