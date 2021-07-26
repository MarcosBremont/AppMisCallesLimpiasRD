import { Component, OnInit } from '@angular/core';
import { MisreportesService } from '../Services/misreportes.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Variableglobal } from '../variableglobal';
import {RegistroService} from '../Services/registro.service';
import { ModalController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-mis-reportes',
  templateUrl: './mis-reportes.page.html',
  styleUrls: ['./mis-reportes.page.scss'],
}) 
export class MisReportesPage implements OnInit {
  cod_usuario:any;
  cod_reporte:any;
  public reportes: any;
  public niveles:any;
  public datos:any;

  currentImage: any;

  constructor(
    public servicio:MisreportesService, 
    public alertController: AlertController, 
    public nivelUsuario: RegistroService, 
    public modalCtrl: ModalController) 
    { 
    this.cod_usuario = Variableglobal.cod_usuario;
  }


  async ImgAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: `<img src="${this.currentImage}" alt="g-maps" style="border-radius: 2px">`,
      buttons: ['OK']
    });
    await alert.present();
  }

 
  ngOnInit() {
    this.cod_usuario = Variableglobal.cod_usuario;
    this.servicio.obtenerMisReportes(this.cod_usuario).subscribe((data)=>
    {this.reportes = data;},
      (error)=>{console.log(error);}
    )
    // this.obtenerFoto(); 
 
    this.nivelUsuario.NivelUsuario(this.cod_usuario).subscribe((data)=>
    {this.niveles = data;},
      (error)=>{console.log(error);}
    )
  
 
 
  }

  

  obtenerFoto(cod_reporte){
    this.servicio.obtenerFoto(cod_reporte).subscribe((data)=>{
      this.datos = data;
      if (this.datos.respuesta == "OK")
      {
        this.datos = data
        this.currentImage = this.datos.fotos
        this.ImgAlert();
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


  showAlert(i) {
    

this.cod_reporte=((document.getElementById('cod_reporte' + i) as HTMLIonLabelElement).textContent);
 
this.obtenerFoto(this.cod_reporte)
  }
}