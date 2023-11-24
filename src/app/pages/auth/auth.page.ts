import { Component, OnInit, inject} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/service/firebase.service';
import { User } from 'src/app/models/user.mode';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  form = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),
  })

  firebaseSvc = inject(FirebaseService)
  utilsSvc =inject(UtilsService)

  ngOnInit() {
  }

  async submit(){
    if (this.form.valid){

      this.firebaseSvc.signIn(this.form.value as User).then(res =>{
        this.getUserInfo(res.user.uid)
      })
    }
  }
  async getUserInfo(uid:string){
    if (this.form.valid){

      let path = "user/${uid}"
      this.firebaseSvc.getDocument (path).then( user=>{
       this.utilsSvc.saveInLocalStorage('user',user)
       this.utilsSvc.routerLink('/home')
       this.form.reset()

      })
    }
  }
}
