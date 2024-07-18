import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path : "",
    loadChildren:()=> import("./weather/weather.module").then((m=>m.WeatherModule))
  }
];
