import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InformateService {

  constructor(public http: HttpClient) { }
  
  obtenerPostEducacionales(cod_ayuntamiento:number){
    return this.http.get('http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/ConsultarListadodePost?cod_ayuntamiento='+cod_ayuntamiento+"");
  }

//   return this.http.get("https://localhost:44371/api/MisCallesLimpiasRD/ConsultarListadodePost");
// }
}

