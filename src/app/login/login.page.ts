import { Component, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { DatosnecesarioService } from '../Services/datosnecesario.service';
import { LoginService } from '../Services/Login.service';
import {  MenuController } from '@ionic/angular';
import { Router } from "@angular/router"; 
import { AlertController } from '@ionic/angular';
import { first } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { NavController} from '@ionic/angular';
import { IonLoaderService } from '../Services/ion-loader.service';

import { Platform, LoadingController, ToastController } from "@ionic/angular";
import { InicioMapaPage } from '../inicio-mapa/inicio-mapa.page';
import { Variableglobal } from '../variableglobal';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  usuario;
  clave;
  public datos:any;
  isActiveToggleTextPassword: Boolean = true;

  constructor(
    private ionLoaderService: IonLoaderService,
    public servicio2:DatosnecesarioService, 
    public menuCtrl: MenuController,
    public servicio:LoginService,
    public toastCtrl: ToastController,
    public alertController: AlertController,
    private router:Router,
    public navCtrl: NavController
  ) 
  { 

  }

  ngOnInit() {
  }

  async ErrorAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'Usuario o Contraseña Incorrecta.',
      buttons: ['OK']
    });
    await alert.present();
  }
  
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }
  
    onload()
    {
      try {
        this.servicio2.obtenerDatosNecesarios(this.usuario).subscribe((data)=>{
          this.datos = data;
          // console.log(data)
         
        },
        (error)=>{
          // alert(error);
          alert("Error: " + error.message)
  
        });
      } 
      catch (error) {
        alert("Error: " + error.message)
      }
     
    }
  onVerificarPantallas(){
    
  }
  onIniciarSesion(){
    this.onload();
    // this.ionLoaderService.simpleLoader();

    try
    {

        let usuario,clave, respuestas;
        usuario = this.usuario;
        clave = this.clave;
        this.servicio.IniciarSesion(usuario,clave).subscribe((data)=>{
          this.datos = data;
          if (this.datos.respuesta == "OK")
          {
            
            Variableglobal.cod_usuario = this.datos.cod_usuario;
            Variableglobal.nombre_usuario = usuario;
            Variableglobal.correo_Usuario = this.datos.correo_Usuario;
            Variableglobal.cedula_usuario = this.datos.cedula_usuario;
            Variableglobal.telefono_Usuario = this.datos.telefono_Usuario;
            Variableglobal.clave = this.datos.clave;
            Variableglobal.foto_usuario = this.datos.foto_usuario;
            this.menuCtrl.enable(true);
           
            this.router.navigate(['/inicio-mapa']);
            this.ionLoaderService.dismissLoader();

          }
          else
          {
            this.ErrorAlert()
          }
         
        },
        (error)=>{
          alert("Error: " + error.message)
          alert("Error: " + error.message)
        });
    }
    catch(ex)
    {
      alert("Error: " + ex.message)
    }

  }
 
  public toggleTextPassword(): void{
    this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword==true)?false:true;
}
public getType() {
    return this.isActiveToggleTextPassword ? 'password' : 'text';
}

}
