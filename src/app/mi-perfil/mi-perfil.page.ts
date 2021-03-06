import { Component, OnInit } from '@angular/core';
import { Variableglobal } from '../variableglobal';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { IonLoaderService } from '../Services/ion-loader.service';
import { Router } from "@angular/router"; 
import { AlertController } from '@ionic/angular';
import { GuardardatosperfilService } from '../Services/guardardatosperfil.service';
import { Ng2ImgMaxService } from 'ng2-img-max';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.page.html',
  styleUrls: ['./mi-perfil.page.scss'],
})
export class MiPerfilPage implements OnInit {
  cod_usuario:any;
  nombre_usuario:any;
  correo_Usuario:any;
  cedula_usuario:any;
  telefono_Usuario:any;
  foto_usuario:any;
  foto_:any;
  clave:any;
  public datos:any;
  isActiveToggleTextPassword: Boolean = true;
  currentImage: any;
  fotoenhtml: any;
  splitted: any;
  currentImage2: any;


  txt_correo_Usuario: string = Variableglobal.correo_Usuario;
  txt_Telefono_Usuario: string = Variableglobal.telefono_Usuario;
  txt_Cedula_Usuario: string = Variableglobal.cedula_usuario;
  txt_contrasena: string = Variableglobal.clave;
  lbl_usuario: string = Variableglobal.nombre_usuario;
  lbl_usuario2: string = Variableglobal.cod_usuario;
  fotohtml: string = Variableglobal.foto_usuario;  

  constructor(
    public servicio:GuardardatosperfilService, 
    public alertController: AlertController,
    private camera: Camera, 
    private ionLoaderService: IonLoaderService,
    private router:Router
    ) { 
    
    this.cod_usuario = Variableglobal.cod_usuario;
    this.nombre_usuario = Variableglobal.nombre_usuario; 
    this.correo_Usuario = Variableglobal.correo_Usuario;
    this.cedula_usuario = Variableglobal.cedula_usuario;
    this.telefono_Usuario = Variableglobal.telefono_Usuario;
    this.clave = Variableglobal.clave;
    this.foto_usuario = Variableglobal.foto_usuario;
  }

  ngOnInit() {
    this.cod_usuario = Variableglobal.cod_usuario;
    this.nombre_usuario = Variableglobal.nombre_usuario;
    this.correo_Usuario = Variableglobal.correo_Usuario;
    this.cedula_usuario = Variableglobal.cedula_usuario;
    this.telefono_Usuario = Variableglobal.telefono_Usuario;
    this.clave = Variableglobal.clave;
    this.foto_usuario = Variableglobal.foto_usuario;
    
    this.obtenerFotoPerfil(this.cod_usuario)
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

  obtenerFotoPerfil(cod_usuario){
    cod_usuario = Variableglobal.cod_usuario
    this.servicio.obtenerFotoPerfil(this.cod_usuario).subscribe((data)=>{
      this.datos = data;
      console.log(this.datos);
      console.log(data)
      if (this.datos.respuesta == "OK")
      {
        this.datos = data
        this.currentImage = this.datos.foto_usuario
       
      }
      else
      {
        alert("Hubo un error al cargar la foto")
      }
     
    },
    (error)=>{
      alert("Hubo un error al cargar la foto")
    });
  }

async ErrorAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'No se pudieron actualizar los datos.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async SuccessAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '??Enhorabuena!',
      message: 'Se han actualizado los datos de tu perfil.',
      buttons: ['OK']
    });
    await alert.present();
  }
  
  
  OnGuardarPerfil(){
    this.ionLoaderService.simpleLoader();
    this.cod_usuario = Variableglobal.cod_usuario;
    this.correo_Usuario = this.txt_correo_Usuario;
    this.cedula_usuario = this.txt_Cedula_Usuario;
    this.clave = this.txt_contrasena;
    this.telefono_Usuario = this.txt_Telefono_Usuario;
    this.foto_usuario = this.foto_usuario;

    let datos = {
      "cod_usuario": this.cod_usuario,
      "correo_Usuario": this.correo_Usuario,
      "cedula_usuario": this.cedula_usuario,
      "telefono_Usuario": this.txt_Telefono_Usuario,
      "clave": this.clave,
      "foto_usuario":this.foto_usuario
    };
  
    this.servicio.UDatosPerfilUsuario(datos).subscribe((data)=>{
      this.datos = data;
      if (this.datos == true)
      {
        this.ionLoaderService.dismissLoader();
        this.SuccessAlert();
        this.router.navigate(['/login']);

      }
      else
      {
        this.ErrorAlert();
      }
     
    },
    (error)=>{
      this.ErrorAlert();
    });
    

  }
  public toggleTextPassword(): void{
    this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword==true)?false:true;

}
public getType() {
  return this.isActiveToggleTextPassword ? 'password' : 'text';
}



takePicture() {

  const options: CameraOptions = {
    quality: 40,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  this.camera.getPicture(options).then((imageData) => {
    this.currentImage = "data:image/jpeg;base64,"+ imageData;
    this.foto_usuario = imageData;
    // this.currentImage =  `<img src="data:image/jpeg;base64,${this.currentImage}" alt="g-maps" style="border-radius: 2px">`;
  
  }, (err) => {
    // Handle error
    console.log("Camera issue:" + err);
  });
}

// CambiarFoto(){
//   this.photo = 
//   this.servicio.UFotoPerfil(Variableglobal.foto_usuario, Variableglobal.cod_usuario).subscribe((data)=>{
//     this.datos = data;
//     if (this.datos.respuesta == "OK")
//     {
//       this.SuccessAlert();
//       this.currentImage = this.datos.foto_usuario
//     }
//     else
//     {
//       this.ErrorAlert();
//     }
   
//   },
//   (error)=>{
//     this.ErrorAlert();
//   });

// }

}
