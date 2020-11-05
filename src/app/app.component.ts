import { Component, OnInit } from '@angular/core';
// import {AngularFireDatabase} from '@angular/fire/database'
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(public angularAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }
  
  logOut(){
    this.angularAuth.signOut()
    alert('logged out')
  }

}
