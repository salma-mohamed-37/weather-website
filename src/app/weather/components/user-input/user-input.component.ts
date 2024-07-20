import { Component} from '@angular/core';
import { CountriesService } from '../../../services/countries.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserInput } from '../../../interfaces/UserInput';
import { InputService } from '../../../services/input.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss'
})
export class UserInputComponent {
  countries :string[] =[];

    input = new FormGroup ({
    continent: new FormControl("",Validators.required),
    country: new FormControl("",Validators.required),
    city : new FormControl("",Validators.required)

  })

  constructor(public countriesService : CountriesService, public inputService: InputService){}

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
      this.countries =[
        "Egypt","Sudan"
      ]
      // this.countriesService.getCountriesbycontinent(c).subscribe({
      //   next: (countries)=>
      //   {
      //     this.countries=countries
      //   },
      //   error :(err :Error)=> console.log(err)
      // });
    }
  }

  submit()
  {
    if (this.input.valid)
    {
      var i: UserInput={
        continent:this.input.value.continent!,
        country:this.input.value.country!,
        city:this.input.value.city!
      }
    }
  }
}
