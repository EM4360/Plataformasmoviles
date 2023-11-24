import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Mascota } from '../models/mascota';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  private mascotaColeccion: AngularFirestoreCollection<Mascota>

  constructor(private database:AngularFirestore) {
    this.mascotaColeccion = database.collection('mascotas')
   }


   //Crear mascotas
   Crearmascotas(mascota:Mascota){
    return new Promise(async(resolve,reject)=>{
      try{
        const id =this.database.createId();
        mascota.uid = id
        const resultado = await this.mascotaColeccion.doc(id).set(mascota)
        resolve(resultado);
      }catch(error){
        reject(error)
      }
    })
   }

   //Obtener mascota GET
   obtenermascota(){
    return this.mascotaColeccion. snapshotChanges().pipe(map(Action => Action.map(a => a.payload.doc.data())))
   }

   //Eliminar mascotas
   eliminarMascotas(uid:string){
    return new Promise ((resolve,reject)=>{
      try{
        const respuesta = this.mascotaColeccion.doc(uid).delete()
        resolve(respuesta)
      }catch(error){
        reject(error)
      }
    }) 

    }
    publicacion!: Observable<Mascota>
    obtenerMascotabyId(uid:string){
      this.publicacion = this.database.collection("mascotas").doc(uid).valueChanges().pipe(map((data:any)=>data as Mascota ));
      return this.publicacion
    }
   }


