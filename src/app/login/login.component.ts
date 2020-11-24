import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import {NgForm} from '@angular/forms';
import { ChosenFisherService } from '../services/chosen-fisher.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn:boolean = false;

  constructor(public angularAuth: AngularFireAuth, private cfs: ChosenFisherService) {
      this.angularAuth.onAuthStateChanged( user => {
        if(user){
          this.isLoggedIn = true;
          this.cfs.setFisherByUID(user.uid);
          this.cfs.setLoggedInUID(user.uid);
        }else{
          this.isLoggedIn = false;
        }
      })
   }


   onSubmit(f : NgForm) {
    this.angularAuth.signInWithEmailAndPassword(f.value.email, f.value.password)
      .then(() => {
        // on success populate variables and select items
       alert(f.value.email + "logged in succesfully");
      })
      .catch((error) => {
        alert(error);
      });
  }

  ngOnInit(): void {
  }

}
