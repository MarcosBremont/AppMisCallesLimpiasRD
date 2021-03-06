import { RecompensasService } from '../Services/recompensas.service';
import {ActualizarpuntosService} from '../Services/actualizarpuntos.service'
import { Component, OnInit,  ViewChild, ElementRef } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IonLoaderService } from '../Services/ion-loader.service';

import { interval, Subscription } from 'rxjs';
import {RegistroReciboService} from '../Services/registrorecibo.service';
import { MispuntosService } from '../Services/mispuntos.service';
import { Variableglobal } from '../variableglobal';
import { Router } from "@angular/router"; 


@Component({
  selector: 'app-recompensas',
  templateUrl: './recompensas.page.html',
  styleUrls: ['./recompensas.page.scss'],
})
export class RecompensasPage implements OnInit {
  cod_usuario:any;
  public datos:any;
  subscription: Subscription;


  constructor(
    private ionLoaderService: IonLoaderService,
    public servicio:RecompensasService, 
    public servicioPuntos: MispuntosService,
    public servicioActualizarPuntos:ActualizarpuntosService,
    public registroRecibo: RegistroReciboService,
    public alertController: AlertController,
    private alertCtrl: AlertController,
    private router:Router
    ) { 
      this.cod_usuario = Variableglobal.cod_usuario;

    }
  
  recompensas:any;
  misPuntos:any;
  
  ngOnInit() {
    this.cod_usuario = Variableglobal.cod_usuario;
    this.servicio.obtenerrecompensas(Variableglobal.cod_ayuntamiento)
    .subscribe(
      (data)=>{this.recompensas = data;},
      (error)=>{console.log(error);}
    )

   
      //Esta variable llamada this.cod_usuario almacena el ID del usuario. 
      //Obtenemos los puntos del usuario logeado corrientemente
      this.cod_usuario = Variableglobal.cod_usuario;    
      this.servicioPuntos.obtenerMisPuntos(this.cod_usuario)
      .subscribe(
        (data)=>{this.misPuntos = data;},
        (error)=>{console.log(error);}
      )

      //Llamamos al procedimiento para actualizar los puntos
    // this.servicioActualizarPuntos.ActualizarPuntos(this.cod_puntos, this.cod_usuario, this.puntosAcumulados)
    // .subscribe(
    //   (data)=>{this.recompensas = data;}, 
    //   (error)=>{console.log(error);}
    // )   
    

    
  }

  async presentConfirm() {
    let alert = this.alertCtrl.create({
      header: "Prueba",
      message: 'Do you want to buy this book?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Buy',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
     (await alert).present();
  }





  async AlertaRecompensaCambiada() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '??Enhorabuena!',
      message: 'Su recompensa ha sido procesada con exito, por favor dirigirse a su punto de cambio mas cercano.',
      buttons: ['OK']
    });
    await alert.present();
  }
  async AlertaDeExceder() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'El art??culo seleccionado excede la cantidad de puntos acumulados',
      buttons: ['OK']
    });
    await alert.present();
  }


  async AlertaDeError() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'En estos momentos no se puede realizar dicha acci??n',
      buttons: ['OK']
    });
    await alert.present();
  }

  async AlertaRecuerdeCambiar() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'Recuerde seleccionar la recompensa a cambiar',
      buttons: ['OK']
    });
    await alert.present();
  }


 //Temporalmente tanto el cod_punto y cod_usuarios le asignaremos el 1 hasta poder generarlo de forma din??mica

 puntosAcumulados:any;
 precioArticulo:any;
 articuloSeleccionado:any;
 cod_recompensas:any;

 cod_puntos:any;

 




 canjearPuntos(i) {
 
  //Almacena los puntos cumulados por el usuario
   this.puntosAcumulados= ((document.getElementById("puntos") as HTMLIonLabelElement).textContent);

  //Almacena el precio del articulo
  this.precioArticulo = ((document.getElementById('puntosArticulo' + i) as HTMLIonCheckboxElement).textContent);

  //Valida cual de los art??culos fue seleccionado o si un art??culo fue seleccionado
  this.articuloSeleccionado = ((document.getElementById('puntosArticulo' + i) as HTMLIonCheckboxElement).checked);

  //Capturamos el id del boton 
  let botonId = ((document.getElementById('boton'+i) as HTMLIonButtonElement).id);

  //Almacenamos el cod_puntos que est?? activo en ese momento.
  this.cod_puntos=((document.getElementById('cod_puntos') as HTMLIonLabelElement).textContent);


  //Seleccionamos el untimo caracter de los botones din??micos.
  let ultimoCaracterBoton = botonId.charAt(botonId.length - 1);

//Cambiamos el tipo de datos a entero para poder hacer la resta
  let puntosInt= parseInt(this.puntosAcumulados);
  let precioInt =parseInt(this.precioArticulo);
 
//Obtenemos el ID del art??culo para luego insertarlo en el recibo
  this.cod_recompensas = ((document.getElementById('cod_recompensas'+ i) as HTMLInputElement).textContent);


 

  console.log( this.cod_recompensas);
  console.log(this.cod_puntos);



  
  //Para registro de recibo

//Condici??n que valida si el bot??n seleccionado y el index son el mismo, adem??s si el checkbox est?? seleccionado
  if (i == ultimoCaracterBoton && this.articuloSeleccionado==true){


    //Condici??n que valida si los puntos de la recompensa exceden los puntos que tenemos
      if(precioInt > puntosInt){
        this.AlertaDeExceder();
        return;

        }
        
    //Confirma antes de procesar el cambio de recompensa por puntos
    if (confirm('??Est?? seguro de que desea cambiar sus puntos por este art??culo?')) {
     
      let resultado = parseInt(this.puntosAcumulados) - parseInt(this.precioArticulo);
      console.log(resultado);

      let cod_usuarios, puntos_acumulados;
      cod_usuarios = this.cod_usuario;
      puntos_acumulados = resultado;

      // this.ionLoaderService.simpleLoader(); No necesario en esta p??gina

 
  //Creamos los datos del recibo e insertamos los datos en la tabla Recibos
  this.servicioActualizarPuntos.ActualizarPuntos(this.cod_puntos,puntos_acumulados,cod_usuarios).subscribe((data)=>{
    this.datos=data;
    if(this.datos.respuesta=="OK"){
      // this.ionLoaderService.dismissLoader();  No necesario en esta p??gina
        this.AlertaRecompensaCambiada();
        this.registroRecibo.IngresarRecibo(this.cod_usuario,this.cod_recompensas, Variableglobal.cod_ayuntamiento).subscribe((data)=>{
          this.datos = data; 
          console.log (this.datos);

          document.getElementById('puntos').innerHTML =resultado+"";
          
        },
        (error)=>{
          this.AlertaDeError();
        });
        
    }
    else{
     this.AlertaDeError();
    }
    

  })

      
      } 

    }
    //Condici??n que devuelvel mensaje cuando no se marca ning??n checkbox
    else{
      this.AlertaRecuerdeCambiar();
      return;
    }
    // this.router.navigate(['/login']); 
  
  }

}



