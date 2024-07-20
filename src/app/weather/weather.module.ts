import { NgModule } from '@angular/core';
import { WeatherRoutingModule } from './weather-routing.module';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { TimeComponent } from '../time/time.component';
import {ReactiveFormsModule} from '@angular/forms';
import { DialogModule } from 'primeng/dialog';





@NgModule({
  declarations: [
    CurrentWeatherComponent,
    UserInputComponent
  ],
  imports: [
    WeatherRoutingModule,
    TimeComponent,
    ReactiveFormsModule,
    DialogModule,
]
})
export class WeatherModule { }
