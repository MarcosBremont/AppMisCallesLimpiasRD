import { Injectable, TestabilityRegistry } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { RegistroService } from './registro.service';

@Injectable({
  providedIn: 'root'
})
export class RegistroReporteService {
  baseURL: string = "http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/GuardarFotosOrden";

  constructor(public http: HttpClient) { 
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
  }
  
  RegistroReporte(datos:any){
    return this.http.post(this.baseURL, datos);
  }

}
