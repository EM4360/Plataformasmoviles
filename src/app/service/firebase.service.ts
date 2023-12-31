import { Injectable,inject } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
 import {getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { User } from '../models/user.mode';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { getFirestore, setDoc, doc,getDoc} from '@angular/fire/firestore'


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth)
  firestore = inject (AngularFirestore)

  getAuth(){
    return getAuth
  }

  signIn(user:User){
    return signInWithEmailAndPassword(getAuth(), user.email, user.password)
  }
  
  signUp(user:User){
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password)
  }

  updateUser(displayName:string){
    return updateProfile(getAuth().currentUser,{ displayName })
  }


  //BASE DE DATOS//
  setDcoument(path:string, data:any){
    return setDoc(doc(getFirestore(),path),data);
  }

 async getDocument(path :string){
    return (await getDoc(doc(getFirestore(),path))).data();
  }
}
