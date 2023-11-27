import { Component, OnInit, ViewChild} from '@angular/core';
import { Mascota } from 'src/app/models/mascota';
import { MascotaService } from 'src/app/service/mascota.service';
import { EdicionmascotaPage } from '../edicionmascota/edicionmascota.page';
import { AlertController, IonModal, ModalController } from '@ionic/angular';
import { FormGroup,Validators,FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cardmascotas',
  templateUrl: './cardmascotas.page.html',
  styleUrls: ['./cardmascotas.page.scss'],
})
export class CardmascotasPage implements OnInit {
  coleccionMascotas: Mascota[]=[]
  mascotaseleccionada!: Mascota;
 mascotas$:Observable<Mascota[]>;

 
  constructor(
    public mascotaservice: MascotaService,
    public alertController: AlertController,
    private modalController: ModalController
  ) {
    this.mascotas$ = this.mascotaservice.obtenermascota();
    this.mascotas$.subscribe(data=>console.log('Mascota Actualizada: ',data))
   }
    
  ngOnInit():void {
    this.mascotas$.subscribe(mascotas =>{
      this.coleccionMascotas = mascotas
    })
    }
  
  async confirmarEliminacion(id:string){
    const alert = await this.alertController.create({
      header: 'Confirmar Eliminacion',
      message: '¿Estas seguro de que quieres eliminar la publicacion?',
      buttons:[
        {
          text:'Cancerlar',
          role:'cancel',
          cssClass:'Secondary'
        },
        {
          text:'Eliminar',
          handler:()=>{
            this.eliminarMascota(id)
          }
        }

      ]
    });

    await alert.present()
  }

  async abrirModalEdicion(mascota:Mascota){
    const modal = await this.modalController.create({
      component: EdicionmascotaPage,
      componentProps: {mascota}
    })
    await modal.present()
  }

  eliminarMascota(id:string){
    this.mascotaservice.eliminarMascotas(id)
  }
  
}
