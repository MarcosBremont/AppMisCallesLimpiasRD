import { Component, OnInit } from '@angular/core';
// import { base64StringToBlob } from 'blob-util';
// import { Base64 } from '@ionic-native/base64/ngx';

import { RegistroReporteService } from '../Services/registro-reporte.service';
import { DatosnecesarioService } from '../Services/datosnecesario.service';
import { LocationService } from '../Services/location.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AlertController } from '@ionic/angular';
import { Router } from "@angular/router"; 
import {NavController, NavParams } from '@ionic/angular';
import { Variableglobal } from '../variableglobal';


import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation
} from "@ionic-native/google-maps";

import { Platform, LoadingController, ToastController } from "@ionic/angular";
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-inicio-mapa',
  templateUrl: './inicio-mapa.page.html',
  styleUrls: ['./inicio-mapa.page.scss'],
})
export class InicioMapaPage implements OnInit {
  cod_reporte;
  ubicacion;
  lat;
  lng;
  fotos;
  cod_usuario;

  //Prueba
cod_nivel;


  usuario;
  currentImage: any;

  datos: any;
  map: GoogleMap;
  loading: any;
  height = 0;
  id: any = '0';
  value:any;
  latitude: any = '0';
  longitud: any = '0';
  constructor( 
    // private base64: Base64,
    public servicio2:DatosnecesarioService,
    public servicio3:RegistroReporteService,
    public LocationService:LocationService,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public alertController: AlertController,
    private nav: NavController,
    private platform: Platform,
    public router: Router,
     private camera: Camera
 ) 
    {
      this.usuario = Variableglobal.nombre_usuario;
      console.log(platform.height())
      this.height = platform.height(); 
    }

    takePicture() {

      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      };
  
      this.camera.getPicture(options).then((imageData) => {
        this.currentImage =  imageData;
        this.Reportar()
        this.ImgAlert();
      }, (err) => {
        // Handle error
        console.log("Camera issue:" + err);
      });
    }
  

    //Prueba
    pruebaCodNivel(){
        console.log(Variableglobal.cod_nivel);
    }

   //Aqui arriba mando por consola el codigo nivel por un metodo para ver
//pero si mando otra cosa me lo devuelve correctamente


    async ngOnInit() {
    await this.platform.ready();
    this.onload();
    await this.loadMap();
    await this.localizar()
    }

    loadMap() {
      // Esta función inicializa la propiedad de clase
      // map
      // que va a contener el control de nuestro mapa de google
  
      // Para crear nuestro mapa debemos enviar como parametros
      // el id del div en donde se va a renderizar el mapa (paso anterior)
      // y las opciones que configuran nuestro mapa
      this.map = GoogleMaps.create("map_canvas", {
        camera: {
          target: {
            lat: -2.1537488,
            lng: -79.8883037
          },
          zoom: 18,
          tilt: 30
        }
      });
    }
  
    onload(){
      this.servicio2.obtenerDatosNecesarios(this.usuario).subscribe((data)=>{
        this.datos = data;
      },
      (error)=>{
        alert("ErrorDeDatosNecesarios");
      });
    }


    async localizar() {
      // Limpiamos todos los elementos de nuestro mapa
      this.map.clear();
  
      // Creamos un componente de Ionic para mostrar un mensaje
      // mientras obtenemos esperamos que termine el proceso de
      // obtener la ubicación
      this.loading = await this.loadingCtrl.create({
        message: "Espera por favor..."
      });
  
      // Presentamos el componente creado en el paso anterior
      await this.loading.present();
  
      // Ejecutamos el método getMyLocation de nuestra propiedad de clase
      // map
      // para obtener nuestra ubicación actual
      this.map
        .getMyLocation()
        .then((location: MyLocation) => {
          // Una vez obtenida la ubicación cerramos el mensaje de diálogo
          this.loading.dismiss();
  
          // Movemos la camara a nuestra ubicación con una pequeña animación
          this.map.animateCamera({
            target: location.latLng,
            zoom: 17,
            tilt: 30
          });
  
          // Agregamos un nuevo marcador
          let marker: Marker = this.map.addMarkerSync({
            title: "Estoy aquí!",
            // snippet: "This plugin is awesome!",
            position: location.latLng,
            animation: GoogleMapsAnimation.BOUNCE
          });
  
          // Mostramos un InfoWindow
          marker.showInfoWindow();
  
          // Podemos configurar un evento que se ejecute cuando
          // se haya dado clic
          marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
            this.showToast("clicked!");
          });
        })
        .catch(error => {
          // En caso de que haya un problema en obtener la
          // ubicación
          this.loading.dismiss();
          this.showToast(error.error_message);
        });
    }
  
    Reportar() {
      this.LocationService.getPosition().then(pos => {
          this.latitude = pos.lat;
          this.longitud = pos.lng;
      });
}

  // Función que muestra un Toast en la parte inferior
  // de la pantalla
  async showToast(mensaje) {
    let toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2000,
      position: "bottom"
    });

    toast.present();
  }

  
  async ImgAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: `<img src="data:image/jpeg;base64,${this.currentImage}" alt="g-maps" style="border-radius: 2px">`,
      buttons: ['OK']
    });
    await alert.present();
  }


  async ErrorAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'No se pudo guardar el reporte.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async SuccesAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Enhorabuena!',
      message: 'Reporte guardado con exito.',
      buttons: ['OK']
    });
    await alert.present();
  }
  

  onRegistroReporte(){
    let cod_usuario, ubicacion, lat, lng, fotos;
    cod_usuario = Variableglobal.cod_usuario;
    ubicacion = "Jarabacoa";
    lat = this.latitude;
    lng = this.longitud;
    fotos = this.currentImage; 
    let datos = {
      "ubicacion": ubicacion,
      "lat": lat,
      "lng": lng,
      "fotos":fotos,
      "cod_usuario":cod_usuario
    };
  

    this.servicio3.RegistroReporte(datos).subscribe((data)=>{
      this.datos = data;
      if (this.datos == true)
      {
        this.SuccesAlert();
        // this.onLimpiar();
      }
      else
      {
        this.ErrorAlert();
      }
     
    },
    (error)=>{
      alert("Error ");
    });
  }
}
