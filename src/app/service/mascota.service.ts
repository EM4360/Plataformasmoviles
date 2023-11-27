import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Mascota } from '../models/mascota';
import { Action } from 'rxjs/internal/scheduler/Action';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  private mascotaColeccion: AngularFirestoreCollection<Mascota>
  private mascotasSubject = new BehaviorSubject<Mascota[]>([])

  constructor(private database:AngularFirestore) {
    this.mascotaColeccion = database.collection<Mascota>('mascotas')
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
   public obtenermascota(){
    return this.mascotaColeccion.snapshotChanges().pipe(map(action=> action.map(a => a.payload.doc.data())))
    
   }

   //Eliminar mascotas
   public eliminarMascotas(id:string){
    this.mascotaColeccion.doc(id).delete()
    
    }

    actualizarMascota(mascota:Mascota){
      const mascotaDoc = this.database.collection('mascotas').doc(mascota.uid);
      return mascotaDoc.update(mascota);
    }

    }
   


