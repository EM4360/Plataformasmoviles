import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormpublicarPageRoutingModule } from './formpublicar-routing.module';

import { FormpublicarPage } from './formpublicar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormpublicarPageRoutingModule
  ],
  declarations: [FormpublicarPage]
})
export class FormpublicarPageModule {}
