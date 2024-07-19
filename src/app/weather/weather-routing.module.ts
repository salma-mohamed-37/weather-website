import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { UserInputComponent } from './components/user-input/user-input.component';

const routes: Routes = [
  {
    path:"",
    component:CurrentWeatherComponent
  },
  {
    path:"i",
    component: UserInputComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
