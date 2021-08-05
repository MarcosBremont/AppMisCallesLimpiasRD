import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, LoadChildren } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import {Variableglobal} from './variableglobal'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'inicio-mapa',
    loadChildren: () => import('./inicio-mapa/inicio-mapa.module').then( m => m.InicioMapaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'olvide-mi-contrasena',
    loadChildren: () => import('./olvide-mi-contrasena/olvide-mi-contrasena.module').then( m => m.OlvideMiContrasenaPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'mis-reportes',
    loadChildren: () => import('./mis-reportes/mis-reportes.module').then( m => m.MisReportesPageModule)
  },
  {
    path: 'mis-puntos',
    loadChildren: () => import('./mis-puntos/mis-puntos.module').then( m => m.MisPuntosPageModule)
  },
  {
    path: 'informate',
    loadChildren: () => import('./informate/informate.module').then( m => m.InformatePageModule)
  },
  {
    path: 'recibos-bonos',
    loadChildren: () => import('./recibos-bonos/recibos-bonos.module').then( m => m.RecibosBonosPageModule)
  },
  {
    path: 'sobre-nosotros',
    loadChildren: () => import('./sobre-nosotros/sobre-nosotros.module').then( m => m.SobreNosotrosPageModule)
  },
  {
    path: 'mi-perfil',
    loadChildren: () => import('./mi-perfil/mi-perfil.module').then( m => m.MiPerfilPageModule)
  },
  {
    path: 'recompensas',
    loadChildren: () => import('./recompensas/recompensas.module').then( m => m.RecompensasPageModule)
  },
  {
    path: 'terminosycondiciones',
    loadChildren: () => import('./terminosycondiciones/terminosycondiciones.module').then( m => m.TerminosycondicionesPageModule)
  },
  {
    path: 'mensajeria',
    loadChildren: () => import('./mensajeria/mensajeria.module').then( m => m.MensajeriaPageModule)
  },
  {
    path: 'modal-popover',
    loadChildren: () => import('./modal-popover/modal-popover.module').then( m => m.ModalPopoverPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
