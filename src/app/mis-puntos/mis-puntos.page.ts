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
misPuntos:any;
cod_ayuntamientos:any;
currentImage: any;  public name:any;
public str:any;
lblAyunta:any;
myFieldLabel:any;

  constructor(public servicio:MispuntosService) { 
    this.cod_usuario = Variableglobal.cod_usuario;
    console.log("Entreeee a mis puntos POR EL CONSTRUCTOR ")

  }


  ngOnInit() {
    
    console.log("Entreeee a mis puntos ");
    console.log('si muestra este funciona a la primera')
    this.cod_usuario = Variableglobal.cod_usuario;    
   
    this.autoClick();
    this.servicio.obtenerMisPuntos(this.cod_usuario)
    .subscribe(
      (data)=>{this.misPuntos = data;},
      (error)=>{console.log(error);}
    )
    //Este variable llamada this.cod_usuario almacena el ID del usuario. 
    console.log(Variableglobal.cod_ayuntamiento)
    if (Variableglobal.cod_ayuntamiento == 2) {
      this.currentImage = "assets/imagenes/Jarabacoa.png";
      this.name="Ayuntamiento Jarabacoa";

    } else {
      this.currentImage = "assets/imagenes/AyuntamientoDeSantiago.jpg";
      this.name="Ayuntamiento Santiago";

    }
    
  }

  cargarDatos(){
    this.cod_usuario = Variableglobal.cod_usuario;   
    
    this.cod_ayuntamientos = Variableglobal.cod_ayuntamiento;

    console.log('COD AYUNTAMIENTO :', this.cod_ayuntamientos);
    this.servicio.obtenerMisPuntos(this.cod_usuario)
    .subscribe(
      (data)=>{this.misPuntos = data;},
      (error)=>{console.log(error);}
    )
  }

  autoClick(){
   
    document.getElementById('prueba').click();
    document.getElementById('prueba').click();
    document.getElementById('prueba').click();
   }

}

