import { Component, OnInit } from '@angular/core';
// import {AngularFireDatabase} from '@angular/fire/database'
import {AngularFireAuth} from '@angular/fire/auth';
import { ChosenFisherService } from './services/chosen-fisher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title:string="FishingAppAngular"
  loggedIn: string;
  chosenFisher:string;

  constructor(public angularAuth: AngularFireAuth, public cfs : ChosenFisherService) { }

  ngOnInit(): void {
      this.loggedIn = this.cfs.getLoggedInUser();
      this.chosenFisher = this.cfs.getFisher();
      this.cfs.currentFisherChange.subscribe( value => {
      this.chosenFisher = value;
     })
  }

  
  logOut(){
    this.angularAuth.signOut()
    alert('logged out')
  }

}
