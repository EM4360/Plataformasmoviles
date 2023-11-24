import { Component, OnInit, inject} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/service/firebase.service';
import { User } from 'src/app/models/user.mode';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {


  form = new FormGroup({
    uid: new FormControl(''),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),
    name:new FormControl('',[Validators.required,Validators.minLength(4)]),
  })

  firebaseSvc = inject(FirebaseService)
  utilsSvc =inject(UtilsService)

  ngOnInit() {
  }

  async submit(){
    if (this.form.valid){

      this.firebaseSvc.signUp(this.form.value as User).then(async res =>{
       await this.firebaseSvc.updateUser(this.form.value.name)
       let uid = res.user.uid;

       this.form.controls.uid.setValue(uid);
       this.setUserInfo(uid)
      })
    }
  }



  async setUserInfo(uid:string){
    if (this.form.valid){

      let path = "user/${uid}"
      delete this.form.value.password
      this.firebaseSvc.setDcoument (path, this.form.value).then(async res =>{
       this.utilsSvc.saveInLocalStorage('user',this.form.value)
       this.utilsSvc.routerLink('/home')
        console.log(res)
      })
    }
  }
}
