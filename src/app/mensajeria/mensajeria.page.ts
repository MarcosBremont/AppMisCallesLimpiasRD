import { Component, OnInit } from '@angular/core';
import {MensajeriaService} from '../Services/mensajeria.service';

import { Variableglobal } from '../variableglobal';


@Component({
  selector: 'app-mensajeria',
  templateUrl: './mensajeria.page.html',
  styleUrls: ['./mensajeria.page.scss'],
})
export class MensajeriaPage implements OnInit {
  cod_usuario:any;

  Mensajes:any;

  constructor(public servicio:MensajeriaService) {
    this.cod_usuario = Variableglobal.cod_usuario;
   }

  ngOnInit() {
    this.servicio.MostrarMensajes(this.cod_usuario, )
    .subscribe( 
      (data)=>{this.Mensajes = data;},
      (error)=>{console.log(error);}
    )
  }

}
