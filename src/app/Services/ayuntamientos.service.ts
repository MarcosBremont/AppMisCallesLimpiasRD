import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AyuntamientosService {

  constructor(public http: HttpClient) { }
    
  obtenerAyuntamientos(){
   return this.http.get("http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/ConsultarListadoAyuntamientos"); 
 }
} 
 