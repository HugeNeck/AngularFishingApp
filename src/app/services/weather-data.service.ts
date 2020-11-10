import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  weatherUrl:string = "http://api.openweathermap.org/data/2.5/weather?q=ottawa,ca&APPID=7e943c97096a9784391a981c4d878b22&mode=json&units=metric%22"
   
        // .then(data => {
        //     if(data.cod !== 200)
        //         setWeatherData(data.cod)
        //     else setWeatherData(data.weather[0].description)


  constructor( private http : HttpClient) { }

  getWeatherData():Observable<any>{
   return this.http.get<any>(this.weatherUrl);
  }

}
