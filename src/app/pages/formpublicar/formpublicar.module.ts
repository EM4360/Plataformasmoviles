import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { FormpublicarPageRoutingModule } from './formpublicar-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { FormpublicarPage } from './formpublicar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormpublicarPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FormpublicarPage]
})
export class FormpublicarPageModule {}
