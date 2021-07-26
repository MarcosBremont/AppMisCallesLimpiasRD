import { Component, OnInit } from '@angular/core';
import { MispuntosService } from '../Services/mispuntos.service';
import { Variableglobal } from '../variableglobal';

@Component({
  selector: 'app-mis-puntos',
  templateUrl: './mis-puntos.page.html',
  styleUrls: ['./mis-puntos.page.scss'],
})
export class MisPuntosPage implements OnInit {
cod_usuario:any;
misPuntos

  constructor(public servicio:MispuntosService) { 
    this.cod_usuario = Variableglobal.cod_usuario;

  }


  ngOnInit() {
    //Este variable llamada this.cod_usuario almacena el ID del usuario. 
    this.cod_usuario = Variableglobal.cod_usuario;    
    this.servicio.obtenerMisPuntos(this.cod_usuario)
    .subscribe(
      (data)=>{this.misPuntos = data;},
      (error)=>{console.log(error);}
    )
  }

}

