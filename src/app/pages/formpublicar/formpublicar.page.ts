import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/models/mascota';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { MascotaService } from 'src/app/service/mascota.service';

@Component({
  selector: 'app-formpublicar',
  templateUrl: './formpublicar.page.html',
  styleUrls: ['./formpublicar.page.scss'],
})
export class FormpublicarPage implements OnInit {

  coleccionmascotas : Mascota[] = []
  mascotaseleccionada!: Mascota;

  Mascota = new FormGroup({

    nombre: new FormControl("",Validators.required),
    raza: new FormControl("",Validators.required),
    sexo:new FormControl("",Validators.required),
    tamaño:new FormControl("",Validators.required),
    descripcion:new FormControl("",Validators.required),
    img:new FormControl("",Validators.required),
    ciudad:new FormControl("",Validators.required),
    barrio:new FormControl("",Validators.required),
    fecha:new FormControl("",Validators.required),
  })


  constructor(
    public mascotaservice : MascotaService
  ) { }


    async agregarmascota(){
      if (this.Mascota.value){
        let nuevamascota : Mascota = {
          uid: '',
          nombre: this.Mascota.value.nombre!,
          raza: this.Mascota.value.raza!,
          sexo: this.Mascota.value.sexo!,
          tamaño: this.Mascota.value.tamaño!,
          descripcion: this.Mascota.value.descripcion!,
          img: this.Mascota.value.img!,
          ciudad: this.Mascota.value.ciudad!,
          barrio:this.Mascota.value.barrio!,
          fecha:this.Mascota.value.fecha!,

        }
        await this.mascotaservice.Crearmascotas(nuevamascota)
        .then(mascotas=>{
          alert("se ha añadido su mascota correctamente")
        })
        .catch(error =>{
          alert("Hubo un error al agregar sus mascotas :( \n"+error)
        })
      }
    }

  ngOnInit() {
  }

}
