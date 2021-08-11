import { Component, OnInit } from '@angular/core';
import { MispuntosService } from '../Services/mispuntos.service';

@Component({
  selector: 'app-mis-puntos2',
  templateUrl: './mis-puntos2.page.html',
  styleUrls: ['./mis-puntos2.page.scss'],
})
export class MisPuntos2Page implements OnInit {
  misPuntos:any;

  constructor(public servicio:MispuntosService) { }

  ngOnInit() {
    console.log("Entreeee a mis puntos2 ")

  }

}
