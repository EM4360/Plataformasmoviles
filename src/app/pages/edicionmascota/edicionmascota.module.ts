import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdicionmascotaPageRoutingModule } from './edicionmascota-routing.module';

import { EdicionmascotaPage } from './edicionmascota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdicionmascotaPageRoutingModule
  ],
  declarations: [EdicionmascotaPage]
})
export class EdicionmascotaPageModule {}
