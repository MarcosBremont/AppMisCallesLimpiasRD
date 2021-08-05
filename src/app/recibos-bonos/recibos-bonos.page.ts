import { Component, OnInit,  ViewChild, ElementRef } from '@angular/core';
import { RegistroReciboService } from '../Services/registrorecibo.service';
import { MispuntosService } from '../Services/mispuntos.service';
import { Variableglobal } from '../variableglobal';
import { ModalController } from '@ionic/angular';
import { ModalPopoverPage } from '../modal-popover/modal-popover.page';
import { verifyHostBindings } from '@angular/compiler';

@Component({
  selector: 'app-recibos-bonos',
  templateUrl: './recibos-bonos.page.html',
  styleUrls: ['./recibos-bonos.page.scss'],
})
export class RecibosBonosPage implements OnInit {
  cod_usuario:any;
  modalDataResponse: any;
  nombreproducto:any;
  cod_bono:any;
  Recibos:any;
  misPuntos:any;


  constructor(public servicio:RegistroReciboService, public servicio2:MispuntosService, public modalCtrl: ModalController) {
    this.cod_usuario = Variableglobal.cod_usuario;

  }



  async initModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPopoverPage,
      componentProps: {
        'cod_bono': this.cod_bono,
        'usuario': Variableglobal.nombre_usuario,
        'nombreproducto': this.nombreproducto
      }
    });

    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        this.modalDataResponse = modalDataResponse.data;
        console.log('Modal Sent Data : '+ modalDataResponse.data);
      }
    });

    return await modal.present();
  }

  



  data:any;
  ngOnInit() {
     this.cod_usuario = Variableglobal.cod_usuario; 

    this.servicio.MostrarRecibos(this.cod_usuario)
    .subscribe(
      (data)=>{this.Recibos = data;},
      (error)=>{console.log(error);}
    ),
  
      this.servicio2.obtenerMisPuntos(this.cod_usuario)
      .subscribe(
        (data)=>{this.misPuntos = data;},
        (error)=>{console.log(error);}
      )
  }

  showAlert(i) {
    this.nombreproducto=((document.getElementById('nombreproducto' + i) as HTMLIonLabelElement).textContent);
    this.cod_bono=((document.getElementById('cod_bono' + i) as HTMLIonLabelElement).textContent);
this.initModal();
    console.log(this.nombreproducto)
  }


}
