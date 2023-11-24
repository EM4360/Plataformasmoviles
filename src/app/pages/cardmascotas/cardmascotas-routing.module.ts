import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardmascotasPage } from './cardmascotas.page';

const routes: Routes = [
  {
    path: '',
    component: CardmascotasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardmascotasPageRoutingModule {}
