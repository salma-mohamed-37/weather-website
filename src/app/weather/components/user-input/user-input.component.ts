import { Component } from '@angular/core';
import { CountriesService } from '../../../services/countries.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [NgFor],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss'
})
export class UserInputComponent {
  countries :string[] =[]
  cities:string[]=[]

  constructor(public countriesService : CountriesService){}

  onChooseContinent(event :Event)
  {
    const selectElement = event.target as HTMLSelectElement;
    var c = selectElement.value;
    if (c == "")
    {
      console.log("required")
    }
    else
    {
      this.countriesService.getCountriesbycontinent(c).subscribe({
        next: (countries)=>
        {
          this.countries=countries
        },
        error :(err :Error)=> console.log(err)
      });
    }
  }
}
