import { Component, effect } from '@angular/core';
import { InputService } from '../../../services/input.service';
import { WeatherService } from '../../../services/weather.service';
import { WeatherInformation } from '../../../interfaces/weather-information';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.scss'
})
export class CurrentWeatherComponent {
  city!:string|undefined ;
  country!:string|undefined;

  currentWeather : WeatherInformation|undefined = undefined;

  constructor(public inputService : InputService, public weatherService: WeatherService)
  {
    effect(() => {
      this.city = this.inputService.getData().city
      this.country = this.inputService.getData().country

      if (this.city !== undefined)
      {
        this.weatherService.getWeather().subscribe({
          next:(w) =>
          {
            this.currentWeather= new WeatherInformation(w)
            console.log("weather")
            console.log(this.currentWeather)
          },
          error:(err)=>
          {
            console.log(err)
          }
        });
      }
     });



  }

  ngOnInit()
  {


  }

}
