import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  URI:String = '';
  apiKey = 'bad74e557d4a4d0574e7a97372607a33';

  constructor(private http : HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?&appid=${this.apiKey}&units=metric&q=`;
   }

   getWeather(cityName:String, countryCode:String){
    return this.http.get(`${this.URI}${cityName},${countryCode}`);
   }
}
