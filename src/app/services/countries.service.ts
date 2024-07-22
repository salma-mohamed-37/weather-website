import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient, public messageService: MessageService) { }
  apiURL :string ="https://countryapi.io/api/";
  apiToken:string="E9nA8tW04qa0ZVxhGpvao5GRc6gkyty2Wn4glEQY"

  getCountriesbycontinent(continentName :string) : Observable<string[]>
  {
    var countries:string[]=[]
    // return this.http.get<any>(`${this.apiURL}region/${continentName}?apikey=${this.apiToken}`).pipe(
    //   map(data => Object.keys(data).map(key => data[key].name)),
    //   catchError(error => {
    //     this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
    //     return [];
    //   })
    // );

    var dummy =[
      "Egypt","Sudan"
    ]
    return of(dummy)

  }
}
