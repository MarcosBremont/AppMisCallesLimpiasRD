import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisPuntos2Page } from './mis-puntos2.page';

const routes: Routes = [
  {
    path: '',
    component: MisPuntos2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisPuntos2PageRoutingModule {}
