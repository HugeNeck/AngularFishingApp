import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
// import { CatchModel } from '../shared/catch.model';
import { WeatherDataService } from '../services/weather-data.service';
import { ChosenFisherService } from '../services/chosen-fisher.service';
import { FirebaseConnectionService } from '../services/firebase-connection.service';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-replace',
  templateUrl: './replace.component.html',
  styleUrls: ['./replace.component.css']
})
export class ReplaceComponent implements OnInit {

  title: string ='Add Fish to Well!';

   fishType:string;
   fishLength:string;
   fishWeight: string;
   currentFisher: string;
   currentWeather:string;
   loggedBy: string;
   fishImage: Blob;

  //works but need to reload page

  constructor( private angularAuth: AngularFireAuth, private fcs:FirebaseConnectionService, private wds: WeatherDataService, private cfs : ChosenFisherService) { }

  
  ngOnInit(): void {
    this.wds.getWeatherData().subscribe(
      data => {
        if (data.cod !== 200)
          this.currentWeather = data.cod
        else this.currentWeather = data.weather[0].description
      }
    );
    this.currentFisher = this.cfs.currentFisher;
    this.angularAuth.currentUser.then(user => this.loggedBy = user.email);

  }

  onSubmit(f: NgForm) {
    if (!this.currentFisher) { alert('must select fisher'); return }
    if (!f.value.fishImage) { alert('must select Image'); return; }
    if (!f.value.fishLength) { alert('must select fishLength'); return; }
    this.fcs.setCatch(f.value.fishType, f.value.fishLength, f.value.fishWeight, this.currentFisher, this.currentWeather, this.loggedBy, f.value.fishImage);
  }


  ngOnDestroy(): void {
    // last function that is called
  }

}
