import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }
  apiURL :string ="https://countryapi.io/api/";
  apiToken:string="E9nA8tW04qa0ZVxhGpvao5GRc6gkyty2Wn4glEQY"

  getCountriesbycontinent(continentName :string) : Observable<string[]>
  {
    var countries:string[]=[]
    return this.http.get<any>(`${this.apiURL}region/${continentName}?apikey=${this.apiToken}`).pipe(
      map(data => Object.keys(data).map(key => data[key].name)),
      catchError(error => {
        console.error('Error fetching countries:', error);
        // Handle the error and return an empty array or other fallback value
        return [];
      })
    );
  }
}
