import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdicionmascotaPage } from './edicionmascota.page';

const routes: Routes = [
  {
    path: '',
    component: EdicionmascotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdicionmascotaPageRoutingModule {}
