import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/models/mascota';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MascotaService } from 'src/app/service/mascota.service';

@Component({
  selector: 'app-formpublicar',
  templateUrl: './formpublicar.page.html',
  styleUrls: ['./formpublicar.page.scss'],
})
export class FormpublicarPage implements OnInit {

  coleccionmascotas: Mascota[] = []
  mascotaseleccionada!: Mascota;

  mascotaform = new FormGroup({
    nombre: new FormControl("", [Validators.required]),
    raza: new FormControl("", [Validators.required]),
    sexo: new FormControl("", [Validators.required]),
    tamano: new FormControl("", [Validators.required]),
    descripcion: new FormControl("", [Validators.required]),
    img: new FormControl("", [Validators.required]),
    ciudad: new FormControl("", [Validators.required]),
    barrio: new FormControl("", [Validators.required]),
    fecha: new FormControl("", [Validators.required])
  })


  constructor(
    public mascotaservice: MascotaService
  ) { }


  async agregarmascota() {
    if (this.mascotaform.valid) {
      let nuevamascota: Mascota = {
        uid: '',
        nombre: this.mascotaform.value.nombre!,
        raza: this.mascotaform.value.raza!,
        sexo: this.mascotaform.value.sexo!,
        tamano: this.mascotaform.value.tamano!,
        descripcion: this.mascotaform.value.descripcion!,
        img: this.mascotaform.value.img!,
        ciudad: this.mascotaform.value.ciudad!,
        barrio: this.mascotaform.value.barrio!,
        fecha: this.mascotaform.value.fecha!,

      }
      await this.mascotaservice.Crearmascotas(nuevamascota)
        .then(mascotas => {
          alert("se ha añadido su mascota correctamente")
        })
        .catch(error => {
          alert("Hubo un error al agregar sus mascotas :( \n" + error)
        })
    }
  }

  ngOnInit() {
  }

}
