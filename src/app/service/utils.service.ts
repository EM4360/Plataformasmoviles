import { Injectable, inject } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  loadingCtrl = inject(LoadingController)
  router = inject(Router)

  loading() {
    return this.loadingCtrl.create({ spinner: 'crescent' })
  }
  routerLink(url: string) {
    return this.router.navigateByUrl(url)
  }

  saveInLocalStorage(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value))
  }

  getFromLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key))
  }
}
