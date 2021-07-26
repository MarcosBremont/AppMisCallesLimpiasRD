import { Injectable, TestabilityRegistry } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { RegistroService } from './registro.service';

@Injectable({
  providedIn: 'root'
})
export class RegistroReporteService {
  baseURL: string = "http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/GuardarFotosOrden";
  llave: string = "AIzaSyABac4fl7IWEhoH7cQr-p-het84Kz12g50";
  urltotal="";

  constructor(public http: HttpClient) { 
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
  }
  
  RegistroReporte(datos:any){
    return this.http.post(this.baseURL, datos);
  }


 StreetNameGoogle(lat:any, lng:any){
   this.urltotal = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+ lat+ "," + lng + "&key=" + this.llave;
   console.log(this.urltotal);
    return this.http.get(this.urltotal);

  }
}
