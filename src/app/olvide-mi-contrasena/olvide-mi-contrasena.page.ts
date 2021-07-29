import { Component, OnInit } from '@angular/core';
import { OlvidemicontrasenaService } from '../Services/olvidemicontrasena.service';
import { EnviarCorreoService } from '../Services/enviar-correo.service';
import { AlertController } from '@ionic/angular';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { empty } from 'rxjs';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-olvide-mi-contrasena',
  templateUrl: './olvide-mi-contrasena.page.html',
  styleUrls: ['./olvide-mi-contrasena.page.scss'],
})
export class OlvideMiContrasenaPage implements OnInit {
  clave_nueva;
  result = "";
  public datos:any;
  email;

  constructor(
    private http: HttpClient,
    private emailComposer: EmailComposer,
    public servicio:OlvidemicontrasenaService,
    public servicio1:EnviarCorreoService,
    public alertController: AlertController
  ) { }

  sendEmail() {
    let email,subject, message;
    email = this.email;
    subject = "RESTABLECIMIENTO DE CONTRASEÑA";
    message = "Hola, se solicito un restablecimiento de contraseña para tu cuenta: " + this.email + "<p></p>" +
    " Si tú no realizaste la solicitud de cambio de contraseña, entra a tu cuenta con esta contraseña " + this.datos.clave + " y cambiala. <p></p>"
  

    this.servicio1.EnviarCorreo(email,subject, message).subscribe((data)=>{
      this.datos = data;
      if (this.datos == "OK")
      {
        this.CorreoSuccess();
        this.email = null;
      }
      else
      {
        this.ErrorAlert();
      }
    },
    (error)=>{
      alert(error);
    });

  }
  
  ngOnInit() {
  
  }

  async CorreoSuccess() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Contraseña enviada',
      message: 'Su Contraseña ha sido enviada al correo ',
      buttons: ['OK']
    });
    await alert.present();
  }

  async SuccesAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Contraseña Restablecida con Exito',
      message: 'Su Contraseña es: ' + this.datos.clave,
      buttons: ['OK']
    });
    await alert.present();
  }

  async EmailVacio() {
      const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Correo Incorrecto',
      message: 'Debe ingresar un correo para poder realizar el cambio de contraseña',
      buttons: ['OK']
    });
    await alert.present();
    }

  async ErrorAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'No se pudo restablecer la contraseña',
      buttons: ['OK']
    });
    await alert.present();
  }

  async LlenarCamposAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'Por favor llene los campos necesarios',
      buttons: ['OK']
    });
    await alert.present();
  }


  onOlvideMiContrasena(){

    let emailContenido= ((document.getElementById("emailContenido") as HTMLInputElement).value);

    if (emailContenido.length==0){
      this.EmailVacio();
      
      return;
    }
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = 4;
    this.result = "";
    for (let i = 0; i < charactersLength; i++) {
       this.result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
   
    let email
    email = this.email;
    this.servicio.UContrasenaOlvidada(email,this.result).subscribe((data)=>{
      this.datos = data;
      if (this.datos.respuesta == "OK")
      {
       
        this.sendEmail();
        this.email = null;
      }
      else
      {
        this.ErrorAlert();
      }
    },
    (error)=>{
      alert(error);
    });
  }
}
