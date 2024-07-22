import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { WeatherInformation } from '../interfaces/weather-information';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InputService } from './input.service';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(public http : HttpClient, public inputService: InputService, public messageService : MessageService) { }

  apiURL :string ="https://open-weather13.p.rapidapi.com/city/"
  getWeather():Observable<any>
  {
    const headers = new HttpHeaders({
      'x-rapidapi-key': 'ceca4fe5cemsh5fb6d571c55839ep129e56jsndc33da3a75cc',
      'x-rapidapi-host':'open-weather13.p.rapidapi.com'
    });

    var weather = undefined
    var city = this.inputService.getData().city
    // return this.http.get<any>(`${this.apiURL}${city}/EN`,{ headers: headers }).pipe(
    //   catchError(error => {
    //      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message , sticky: true });
    //      return [];
    //     })
    // );

    const r : any = {
        coord: {
          lon: -89.1028,
          lat: 30.438
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n"
          }
        ],
        base: "stations",
        main: {
          temp: 49.46,
          feels_like: 44.89,
          temp_min: 45.68,
          temp_max: 51.8,
          pressure: 1030,
          humidity: 59
        },
        visibility: 10000,
        wind: {
          speed: 11.5,
          deg: 50,
          gust: 20.71
        },
        clouds: {
          all: 0
        },
        dt: 1702548828,
        sys: {
          type: 2,
          id: 2015175,
          country: "US",
          sunrise: 1702557907,
          sunset: 1702594622
        },
        timezone: -21600,
        id: 4429197,
        name: "Landon",
        cod: 200
    }

    return of(r)

  }


}
