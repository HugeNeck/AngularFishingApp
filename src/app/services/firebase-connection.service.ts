import { Injectable } from '@angular/core';
// import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseConnectionService {

  constructor() { }

  getCatches() {
       
   return [
    {
      fishLength: "15 ish",
      fishType: "Catfish",
      fishWeight: "2 ish",
      fisher: "Joel",
      loggedBy: "joelvilleneuve77@gmail.com",
      photoUri: "-MJn50Ygh_OcvBJOi0H3",
      weatherData: "broken clouds"
    },  
    {
      fishLength: "20 ish",
      fishType: "Drum",
      fishWeight:"3 ish",
      fisher: "Joel",
      loggedBy: "joelvilleneuve77@gmail.com",
      photoUri: "-MJn4tM1guJp8Dvqq_ci",
      weatherData: "broken clouds"
    }
  ]
  }
}
