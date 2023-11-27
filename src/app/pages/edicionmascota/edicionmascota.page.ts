import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from '@ionic/angular';
import { Mascota } from 'src/app/models/mascota';
import { ActivatedRoute } from '@angular/router';
import { MascotaService } from 'src/app/service/mascota.service';

@Component({
  selector: 'app-edicionmascota',
  templateUrl: './edicionmascota.page.html',
  styleUrls: ['./edicionmascota.page.scss'],
})
export class EdicionmascotaPage implements OnInit {
  mascota: Mascota

  constructor(
    private navCtrl: NavController, private mascotaService: MascotaService, private navParams: NavParams) { }

  ngOnInit() {
    this.mascota = this.navParams.get('mascota')
  }
  cerrarmodal() {
    this.navCtrl.back()
  }

  guardarCambios() {
    this.mascotaService.actualizarMascota(this.mascota).then(() => {
      console.log('Cambios guardados correctamente.')
      alert('Los cambios se han guardado correctamente')
      this.navCtrl.back()
    }).catch(error => {
      console.error('Error al guardar cambios: ', error)
    })

  }
}
