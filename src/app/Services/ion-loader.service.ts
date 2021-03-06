import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class IonLoaderService {

  constructor(
    public loadingController: LoadingController
  ) { }

  simpleLoader() {
    this.loadingController.create({
        message: 'Cargando, por favor espere...'
    }).then((response) => {
        response.present();
    });

    
}

dismissLoader() {
  this.loadingController.dismiss().then((response) => {
      console.log('Loader closed!', response);
  }).catch((err) => {
      console.log('Error occured : ', err);
  });
}
}
