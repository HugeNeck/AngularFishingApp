import { Component, OnInit } from '@angular/core';
import { CatchModel } from '../shared/catch.model';

@Component({
  selector: 'app-livewell',
  templateUrl: './livewell.component.html',
  styleUrls: ['./livewell.component.css']
})

export class LivewellComponent implements OnInit {

  catches:CatchModel[];


  constructor() { }

  ngOnInit(): void {
    
  this.catches= [
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
