import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherRoutingModule } from './weather-routing.module';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { TimeComponent } from '../time/time.component';
import { NgFor } from '@angular/common';


@NgModule({
  declarations: [
    CurrentWeatherComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    TimeComponent,
    NgFor
  ]
})
export class WeatherModule { }
