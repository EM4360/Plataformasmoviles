import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/models/mascota';
import { MascotaService } from 'src/app/service/mascota.service';

@Component({
  selector: 'app-cardmascotas',
  templateUrl: './cardmascotas.page.html',
  styleUrls: ['./cardmascotas.page.scss'],
})
export class CardmascotasPage implements OnInit {
  coleccionMascotas: Mascota[]=[]
  mascotaseleccionada!: Mascota;


  constructor(
    public mascotaservice: MascotaService
  ) { }

  ngOnInit():void {

    this.mascotaservice.obtenermascota().subscribe(mascota =>{
      this.coleccionMascotas=mascota
    })
  }

}
