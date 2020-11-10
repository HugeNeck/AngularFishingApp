import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../services/weather-data.service';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.css']
})
export class WeatherDataComponent implements OnInit {
  
  weatherData:string;

  constructor( private wds: WeatherDataService) { }

  ngOnInit(): void {
    this.wds.getWeatherData().subscribe(
      data => {
       if(data.cod !== 200)
          this.weatherData = data.cod
            else this.weatherData = data.weather[0].description
      }
    )
  }
}
