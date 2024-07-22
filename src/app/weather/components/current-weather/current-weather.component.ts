import { Component, effect, ViewChild } from '@angular/core';
import { InputService } from '../../../services/input.service';
import { WeatherService } from '../../../services/weather.service';
import { WeatherInformation } from '../../../interfaces/weather-information';
import { UserInputComponent } from '../user-input/user-input.component';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.scss'
})
export class CurrentWeatherComponent {

  @ViewChild(UserInputComponent) userInputComponent!: UserInputComponent;

  city!:string|undefined ;
  country!:string|undefined;

  currentWeather : WeatherInformation|undefined = undefined;
  displayDialogBox:boolean =true;
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
            this.userInputComponent.hide()
          },
          error:(err)=>
          {
            console.log(err)
          }
        });
      }
     });
  }

  display()
  {
    this.userInputComponent.isVisible=true;
  }

  hide()
  {
    this.userInputComponent.isVisible=false
  }
}
