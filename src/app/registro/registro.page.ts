import { Component, OnInit,  ViewChild, ElementRef } from '@angular/core';
import { LoginService } from '../Services/Login.service';
import {  MenuController } from '@ionic/angular';
import { Router } from "@angular/router"; 
import { AlertController } from '@ionic/angular';
import { first, retry } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { interval, Subscription } from 'rxjs';

import { takeWhile } from 'rxjs/operators';
import { take, takeUntil, tap } from "rxjs/operators";
import { Platform, LoadingController, ToastController } from "@ionic/angular";
import { RegistroService } from '../Services/registro.service';
import { IonInput } from '@ionic/angular';
import { Directive, HostListener } from '@angular/core';

import {AyuntamientosService} from '../Services/ayuntamientos.service'


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  usuario;
  isShown: boolean = false ; // hidden by default

  email;
  clave;
  cedula;
  telefono;
  estado;
  public datos:any;
  subscription: Subscription;
  btnDisabled = false;
  labelVisibility = false;
  Ayuntamientos: any;
  cod_ayuntamiento:any;
  gg;

  isActiveToggleTextPassword: Boolean = true;

  constructor(
    public menuCtrl: MenuController,
    public servicio:RegistroService,
    public toastCtrl: ToastController,
    public alertController: AlertController,
    private router:Router,
    private Ayuntamiento: AyuntamientosService
  ) { }

  public toggleTextPassword(): void{
    this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword==true)?false:true;
}

public getType() {
  return this.isActiveToggleTextPassword ? 'password' : 'text';
}

  ngOnInit() {
    this.labelVisibility = false;
    //emit value in sequence every 10 second
const source = interval(1000);
const text = 'Your Text Here';
this.subscription = source.subscribe(val => this.VerificarCorreoElectronico());

this.ayuntamientos();

  }

  ayuntamientos(){
this.Ayuntamiento.obtenerAyuntamientos()
    .subscribe( 
      (data)=>{this.Ayuntamientos = data;},
      (error)=>{console.log(error);}
    )
  }

  
    
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }

  
  async ErrorAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'No se puede realizar el registro.',
      buttons: ['OK']
    });
    await alert.present();
  }

  
  async SuccesAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      // header: 'Error',
      message: 'Usuario Registrado con Exito.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async ElementosVaciosAlertas() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error al crear usuario',
      message: 'hoho, hubo un error. Asegurese de llenar todos los campos',
      buttons: ['OK']
    });
    await alert.present();
  }

  public restrictNumeric(e) {
    let input;
    if (e.metaKey || e.ctrlKey) {

      return true;
    }
    if (e.which === 32) {
     return false;
    }
    if (e.which === 0) {
     return true;
    }
    if (e.which < 33) {
      return true;
    }
    input = String.fromCharCode(e.which);
    return !!/[\d\s]/.test(input);
  
   }
  
  VerificarCorreoElectronico()
  {
    let correo_Usuario;
    correo_Usuario = this.email;
    this.servicio.VerificarCorreoElectronico(correo_Usuario).subscribe((data)=>{
      this.datos = data;
      if (this.datos.respuesta == "OK")
      {
        this.btnDisabled = true;
        this.labelVisibility = false;
        this.isShown = true;
      }
      else
      {
        this.btnDisabled = false;
        this.labelVisibility = true;
        this.isShown = false;
      }
    });
  }

  onLimpiar()
  {
    this.usuario = null;
    this.email = null;
    this.clave = null;
    this.cedula = null;
    this.telefono = null;
  }

  numberOnlyValidation(event: any) {
    const pattern = /[0-9.,]/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }

  onKeydown(event) {
    if (event.keyCode === 32 ) {
      return false;

    }
  }

  omit_special_char(event)
{   
   var k;  
   k = event.charCode;  //         k = event.keyCode;  (Both can be used)
   return((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57)); 
}






    checkValue(event){ 
    
     this.gg=  event.detail.value;

   return this.gg;

    }





  onRegistroUsuario(event){
    // console.log(event.detail.value)
    let ayuntamiento = this.gg;
 
    let emailVacio = ((document.getElementById('email') as HTMLIonCheckboxElement).value);
    let nombreVacio = ((document.getElementById('nombre') as HTMLInputElement).value);
    let passwordVacio = ((document.getElementById('password') as HTMLInputElement).value);
    let cedulaVacio = ((document.getElementById('cedula') as HTMLInputElement).value);
    let telefonoVacio = ((document.getElementById('telefono') as HTMLInputElement).value);
    // let ayuntamiento =(document.getElementById('cod_ayuntamiento' + event) as HTMLDivElement).textContent;

   
    if (typeof ayuntamiento === 'undefined' || emailVacio.length ==0 || nombreVacio.length==0 || passwordVacio.length==0 ||cedulaVacio.length==0 || telefonoVacio.length==0){
     this.ElementosVaciosAlertas();
      console.log('Hola');
      return;
    }
    let usuario,email, clave, cedula, telefono, estado;

    usuario = this.usuario;
    email = this.email;
    clave = this.clave;
    cedula = this.cedula;
    telefono = this.telefono;
    estado = this.estado;
    this.cod_ayuntamiento = ayuntamiento;
    this.servicio.RegistroUsuario(usuario,email,clave,cedula,telefono, estado, this.cod_ayuntamiento).subscribe((data)=>{
      this.datos = data;
      if (this.datos.respuesta == "OK")
      {
        this.SuccesAlert();
        this.onLimpiar(); 
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
