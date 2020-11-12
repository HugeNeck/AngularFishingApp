import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { CatchModel } from '../shared/catch.model';
import { WeatherDataService } from '../services/weather-data.service';
import { ChosenFisherService } from '../services/chosen-fisher.service';

@Component({
  selector: 'app-replace',
  templateUrl: './replace.component.html',
  styleUrls: ['./replace.component.css']
})
export class ReplaceComponent implements OnInit {

  title: string ='Add Fish to Well!';

   fishType:CatchModel;
   fishLength:string;
   fishWeight: string;
   currentFisher: string;
   currentWeather:string;

  //works but need to reload page

  constructor( private wds: WeatherDataService, private cfs : ChosenFisherService) { }

  
ngOnInit(): void {
  this.wds.getWeatherData().subscribe(
    data => {
     if(data.cod !== 200)
        this.currentWeather = data.cod
          else this.currentWeather = data.weather[0].description
    }
  );
  this.currentFisher = this.cfs.currentFisher;
}

 onSubmit(f : NgForm) {
    alert(f.value.fishType + f.value.fishLength + f.value.fishWeight
      + this.currentWeather)
}


  ngOnDestroy(): void{
    // last function that is called
  }

}
