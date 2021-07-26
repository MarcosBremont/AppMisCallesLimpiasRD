import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnviarCorreoService {

  constructor(public http: HttpClient) { }

  EnviarCorreo(email:string, subject:string, message:string){
    return this.http.get("http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/Enviarcorreo?email="+email+"&subject="+subject+"&message="+message+"");
    }
}
