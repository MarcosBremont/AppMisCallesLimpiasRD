import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisPuntos2PageRoutingModule } from './mis-puntos2-routing.module';

import { MisPuntos2Page } from './mis-puntos2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisPuntos2PageRoutingModule
  ],
  declarations: [MisPuntos2Page]
})
export class MisPuntos2PageModule {}
