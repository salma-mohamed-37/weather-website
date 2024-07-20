import { Component } from '@angular/core';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.scss'
})
export class CurrentWeatherComponent {

  visable:boolean = false;

  ngOnInit()
  {
    this.visable = true;
  }

}
