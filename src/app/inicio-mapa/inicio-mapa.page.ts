import { Component, OnInit } from '@angular/core';
// import { base64StringToBlob } from 'blob-util';
// import { Base64 } from '@ionic-native/base64/ngx';
import { IonLoaderService } from '../Services/ion-loader.service';
import { RegistroReporteService } from '../Services/registro-reporte.service';
import { DatosInicioService } from '../Services/datos-inicio.service';
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
  fotos = null;
  cod_usuario;
  puntosacumulados:any;
  cantidadreportes:any;
  reportesenespera:any;
  cantidadrecibo:any;
  isBtnCamaraVisible = false;
  isBtnRegistroVisible = false;
  //Prueba
cod_nivel;

btnCamara;
btnRegistro
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
  nombrecalle: any;
  constructor( 
    // private base64: Base64,
    private ionLoaderService: IonLoaderService,
    public servicio2:DatosnecesarioService,
    public servicio3:RegistroReporteService,
    public servicio4:DatosInicioService,
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
        this.VerificarSiHayFoto();
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
      console.log(Variableglobal.cod_usuario, Variableglobal.cod_ayuntamiento, Variableglobal.nombre_usuario)
    this.ionLoaderService.dismissLoader();
    this.SlistaDatosInicio()
    this.VerificarSiHayFoto();
    await this.platform.ready();
    this.onload();
    await this.loadMap();
    await this.localizar()
    }

    SlistaDatosInicio(){
      try {
        console.log(this.cod_usuario)
        console.log(Variableglobal.cod_usuario)
        this.servicio4.obtenerDatosNecesarios(Variableglobal.cod_usuario).subscribe((data)=>{
          this.datos = data;
          this.datos

         this.cantidadrecibo = data[0].cantidadrecibo
         this.cantidadreportes = data[0].cantidadreportes
         this.puntosacumulados = data[0].puntosacumulados
         this.reportesenespera = data[0].reportesenespera
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
    
    
    
    VerificarSiHayFoto(){
      if (this.currentImage != null) {
     this.isBtnRegistroVisible = true;
     this.isBtnCamaraVisible = true;

      } else {
        this.isBtnRegistroVisible = false;
        this.isBtnCamaraVisible = true;

      }  
    }

    loadMap() {
      this.ionLoaderService.dismissLoader();

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
            lng: -79.8883037,
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

          });          // Mostramos un InfoWindow
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
      // var urlGoogleStreetName = "https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY";
      this.LocationService.getPosition().then(pos => {
        console.log(pos)
          this.latitude = pos.lat;
          this.longitud = pos.lng;
}
      );}

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
          this.ionLoaderService.dismissLoader();

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¡Enhorabuena!',
      message: 'Reporte enviado con exito.',
      buttons: ['OK']
    });
    this.ionLoaderService.dismissLoader();

    await alert.present();
  }
  

  onRegistroReporte(){
    this.ionLoaderService.simpleLoader();

    this.servicio3.StreetNameGoogle(this.latitude,this.longitud).subscribe((data)=>{
      this.datos = data;
      this.nombrecalle = this.datos.results[1].formatted_address;
      console.log(this.nombrecalle)


    let cod_usuario, ubicacion, lat, lng, fotos, cod_ayuntamiento;
    cod_usuario = Variableglobal.cod_usuario;
    ubicacion = this.nombrecalle;
    lat = this.latitude;
    lng = this.longitud;
    fotos = this.currentImage; 
    cod_ayuntamiento = Variableglobal.cod_ayuntamiento

    
    let datos = {
      "ubicacion": ubicacion,
      "lat": lat,
      "lng": lng,
      "fotos":fotos,
      "cod_usuario":cod_usuario,
      "cod_ayuntamiento":cod_ayuntamiento
    };
  

    this.servicio3.RegistroReporte(datos).subscribe((data)=>{
      this.datos = data;
      if (this.datos == true)
      {
        this.SuccesAlert();
        this.isBtnRegistroVisible = false;
        this.SlistaDatosInicio();

        // this.onLimpiar();
      }
      else
      {
        this.ionLoaderService.dismissLoader();

        this.ErrorAlert();
        this.ionLoaderService.dismissLoader();

      }
      this.ionLoaderService.dismissLoader();

    },
    (error)=>{
      this.ionLoaderService.dismissLoader();

      alert("Error ");
      this.ionLoaderService.dismissLoader();

    });

  });
      this.ionLoaderService.dismissLoader();

  }
  
}
