import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardmascotasPageRoutingModule } from './cardmascotas-routing.module';

import { CardmascotasPage } from './cardmascotas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardmascotasPageRoutingModule
  ],
  declarations: [CardmascotasPage]
})
export class CardmascotasPageModule {}
