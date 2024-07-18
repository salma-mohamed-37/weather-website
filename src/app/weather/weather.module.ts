import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';


@NgModule({
  declarations: [
    CurrentWeatherComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule
  ]
})
export class WeatherModule { }
