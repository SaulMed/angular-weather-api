import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  weather;

  constructor(private weatherService: WeatherService) {

  }

  ngOnInit() { //Apenas carga el componente esto se ejecuta

  }

  getWeather(cityName: String, countryCode: String) {
    this.weatherService.getWeather(cityName, countryCode)
      .subscribe(
        res => (
          this.weather = res,
          console.log(this.weather)
        ),
        err => console.log(err)
      )
  }

  submitLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement) {
    //console.log(cityName.value, countryCode.value)
    if (cityName.value && countryCode.value) {
      this.getWeather(cityName.value, countryCode.value);
      cityName.value = '';
      countryCode.value = '';
    }else{
      alert('Please insert some values.')
    }

    cityName.focus();
    return false;
  }
}
